import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }
    else{
      document.body.removeAttribute('color-theme')
    }
  }
}
