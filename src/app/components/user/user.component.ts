import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true, // Si usas Angular Standalone Components
  imports: [CommonModule, IonicModule]
})
export class UserComponent implements OnInit {
  @Input() character: any;

  constructor() {
    // Registrar los iconos manualmente
    addIcons({
      'heart': heart,
      'heart-outline': heartOutline
    });
  }

  ngOnInit() {}

  toggleFavorito(unPersonaje: any) {
    console.log("ADDFavorite", unPersonaje);
    
    // Simular que cambia el estado con una clase animada
    const icon = document.querySelector('.favorite-icon');
    if (icon) {
      icon.classList.add('active');
    }
  }
  

  esFavorito(unPersonaje: any): boolean {
    return false;
  }
}
