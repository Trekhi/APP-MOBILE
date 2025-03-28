import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
//import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RickyMortyServiceService } from '../services/ricky-morty-service.service';
import { SwiperSlidesComponent } from '../components/elements/swiper-slides/swiper-slides.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ IonContent, HeaderComponent, FooterComponent, SwiperSlidesComponent],
})
export class Tab1Page {

  //Variables
  personajes: any[] = [];
  url_next: string = '';

  constructor(private rickMortyService: RickyMortyServiceService) {}

  ngOnInit() {
    this.cargarPersonajes();
  }


  cargarPersonajes() {
    this.rickMortyService.getCharactersA([1,2,3,4,5,6]).subscribe({
      next:(data) =>{
        //console.log("Respuesta de la API:", data);
        this.personajes = data 
        console.log("Respuesta de la API:", this.personajes);
      },
      error:(err) =>{
        console.error('Error al cargar episodios:', err);
      }
    })
  }

}
