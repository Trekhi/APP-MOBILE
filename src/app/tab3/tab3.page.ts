import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { RickyMortyServiceService } from '../services/ricky-morty-service.service';
import { CardComponent } from '../components/card/card.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../components/modal/modal.component';
import data from '../../assets/rick-morty.json';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonicModule, CardComponent, CommonModule],
})
export class Tab3Page {

  jsonData: any = data;
  //Variables
  personajes: any[] = [];
  url_next: string = '';

  /////////////////////////////
  episodes: any[] = [];
  currentPage = 1;
  isLoading = false;

  constructor(
    private modalCtrl: ModalController,
    private rickMortyService: RickyMortyServiceService
  ) { }

  //Una vez que cargue el tab3 este metodo se cargara y se actualizara
  ngOnInit() {
    this.loadEpisodes();
    //this.cargarPersonajes();
  }

  //El metodo que va a cargar los personajes
  async cargarPersonajes() {
    //this.cargando = true;
    await this.rickMortyService
      .getEpisodios()
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        this.personajes = resp.results;
        
        //console.log("MISPERSONAJES", this.personajes);

        this.url_next = resp.info.next;
        //console.log("SIGUIENTE", this.url_next);

      });
  }

  ///////////////////////////////////////////////////////////////////NUEVO CODIGO
  loadEpisodes(event?: any) {
    if (this.isLoading) return;
    this.isLoading = true;
  
    this.rickMortyService.getEpisodes(this.currentPage).subscribe({
      next: (data) => {
        //console.log("Respuesta de la API:", data);
  
        const episodesWithImages = data.results.map((episode: any) => {
          const match = this.jsonData.episodes.find((img: any) => 
            img.title === episode.name || 
            `S${img.season.toString().padStart(2, '0')}E${img.episode.toString().padStart(2, '0')}` === episode.episode
          );
  
          return {
            ...episode,
            image_url: match ? match.image_url : 'assets/default-image.jpg' // Imagen por defecto si no hay coincidencia
          };
        });
  
        this.episodes = [...this.episodes, ...episodesWithImages];
        console.log(this.episodes)
        this.currentPage++; 
        this.isLoading = false;
  
        if (event) event.target.complete(); 
      },
      error: (err) => {
        console.error('Error al cargar episodios:', err);
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }


  async openModal(characterUrls: string[]) {
    console.log('Opening modal with:', characterUrls);
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { characters: characterUrls },
    });
    await modal.present();
  }

  /*
  async openCharacterModal(episode: any) {
    const modal = await this.modalCtrl.create({
      component: CharacterModalComponent,
      componentProps: { characters: episode.characters }
    });
    return await modal.present();
  }
    */

}
