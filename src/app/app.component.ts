import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Panneaux', url: '/pages/Panneaux', icon: 'mail' },
    { title: 'Permis de conduire', url: '/pages/Permis de conduire', icon: 'paper-plane' },
    { title: 'Entrainnements', url: '/pages/Entrainnements', icon: 'heart' },
    { title: 'Conseils', url: '/pages/Conseils', icon: 'archive' },
  ];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private menu: MenuController
  ) {}
}
