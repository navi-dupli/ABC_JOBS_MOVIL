import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  ngOnInit() {
    const hasReloaded = sessionStorage.getItem('hasReloaded');

    if (hasReloaded=="false") {
      window.location.reload();
      sessionStorage.setItem('hasReloaded', 'true');
    }
  }

}
