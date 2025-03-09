import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class DashboardComponent implements OnInit {
  constructor() {
    addIcons({ heart, logoApple, settingsSharp, star });
  }

  ngOnInit() {
    console.log('DashboardComponent inicializado');
  }
}
