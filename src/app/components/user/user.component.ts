import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class UserComponent  implements OnInit {

  @Input() character: any;

  constructor() { }

  ngOnInit() {}


  toggleFavorito(unPersonaje:any){
    console.log("ADDFavorite",unPersonaje);
    //this.storageService.saveRemovePersonaje(unPersonaje);
 
 
  }
 
 
  esFavorito(unPersonaje:any):boolean{
 
 
    /*
    if(this.storageService.personajeInFavorites(unPersonaje)){
      return true;
    }
    else {
      return false;
    }
    */
    return false;
  }
 

}
