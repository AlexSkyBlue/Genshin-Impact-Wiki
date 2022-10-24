import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  PersonajesAPI:any[]=[];

  constructor(public _services: GetsApiService) {
    this._services.getPersonajes<any[]>("").subscribe(data => {
      this.PersonajesAPI = data
    })
  }

  ngOnInit() {
    
  }

}
