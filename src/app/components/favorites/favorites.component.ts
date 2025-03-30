// favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, UserComponent]
})
export class FavoritesComponent implements OnInit {
  favoriteCharacters: any[] = [];

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    await this.loadFavorites();
  }

  async loadFavorites() {
    this.favoriteCharacters = this.storageService.getLocalPersonajes;
    console.log('Favoritos cargados en componente:', this.favoriteCharacters);
  }

  async ionViewWillEnter() {
    // Esto se ejecutará cada vez que el tab entre en vista
    await this.loadFavorites();
  }
}