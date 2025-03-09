import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class NotificationsComponent  implements OnInit {
  darkMode = false;
  notifications = true;
  language = 'es';
  fontSize = 'medium';
  soundEnabled = true;
  vibrationEnabled = true;


  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }

  async showAppInfo() {
    const alert = await this.alertCtrl.create({
      header: 'Información de la App',
      message: 'Versión: 1.0.0 <br> Desarrollado por: Tu Nombre',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async confirmLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Cerrar sesión', handler: () => console.log('Sesión cerrada') }
      ],
    });
    await alert.present();
  }

}
