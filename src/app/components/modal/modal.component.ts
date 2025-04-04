import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { RickyMortyServiceService } from 'src/app/services/ricky-morty-service.service';

///ACTUAL

import { UserComponent } from '../user/user.component';


//ACTUAL

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class ModalComponent  implements OnInit {

  //Variables
  @Input() characters!: string[]; //valores que se Obtiene en el DOM
  characterList: any[] = []; //Se va almacenar acá cualquier tipo de variable

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private rickMortyService: RickyMortyServiceService
  ) { }

  ngOnInit() {
    this.rickMortyService.getCharacters(this.characters).subscribe((data) => { //El obtiene a partir de una lista las dirreciones de las Api y seguidamente realiza el consumo y se guarda en un ARRAY
      this.characterList = Array.isArray(data) ? data : [data];
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  togglePurchase(characterUrls: string) {
    console.log(`Abriendo modal para: ${characterUrls}`);
  }

  async openUser(characterUrl: string) {
    console.log('Dirección de usuario:', characterUrl);
  
    const modal = await this.modalCtrl.create({
      component: UserComponent,
      componentProps: { character: characterUrl }, // Asegurar que sea 'character'
    });
    await modal.present();
}
}
