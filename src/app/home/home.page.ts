import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }
    else{
      document.body.removeAttribute('color-theme')
    }
  }
}
