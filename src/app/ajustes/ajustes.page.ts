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
      document.getElementById('LogoWikiHome').setAttribute('src','/assets/images/GenshinWikiLogoBlanco.png')
      document.getElementById('LogoSlide').setAttribute('src','/assets/images/GenshinWikiLogoBlanco.png')
    }
    else{
      document.body.removeAttribute('color-theme')
      document.getElementById('LogoWikiHome').setAttribute('src','/assets/images/GenshinWikiLogoNegro.png')
      document.getElementById('LogoSlide').setAttribute('src','/assets/images/GenshinWikiLogoNegro.png')
    }

  }





}
