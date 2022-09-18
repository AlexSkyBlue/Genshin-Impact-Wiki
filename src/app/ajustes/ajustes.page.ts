import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage {

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
      document.getElementById('logoGenshinHome').setAttribute('src','/assets/images/LogoGenshinBlanco.png')
    }
    else{
      document.body.removeAttribute('color-theme')
      document.getElementById('logoGenshinHome').setAttribute('src','/assets/images/LogoGenshinNegro.png')
    }

  }





}
