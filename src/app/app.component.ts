import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.testRequest();
  }

  testRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(response => {
        console.log('Response:', response);
      });
  }
}
