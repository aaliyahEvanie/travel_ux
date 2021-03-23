import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../scss/app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tuisblad', url: '/folder/LekkerSlaap', icon: 'home' },
    { title: 'Teken in', url: '/folder/Outbox', icon: 'person' },
    { title: 'Teken aan', url: '/folder/Favorites', icon: 'person-add' },
    { title: 'Gunstelinge', url: '/folder/Trash', icon: 'heart' },
    { title: 'Browse in English', url: '/folder/Spam', icon: 'settings' },
    { title: 'Bespreek Vlugte', url: '/folder/Spam', icon: 'airplane' },
    { title: 'B&Vs', url: '/folder/Spam', icon: 'document' },
    { title: 'Koop Geskenkbewyse', url: '/folder/Spam', icon: 'ribbon' },
    { title: 'Kontak Ons', url: '/folder/Spam', icon: 'call' },
  ];
  constructor() {}
}
