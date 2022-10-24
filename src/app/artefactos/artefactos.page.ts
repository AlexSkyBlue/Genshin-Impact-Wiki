import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';


@Component({
  selector: 'app-artefactos',
  templateUrl: './artefactos.page.html',
  styleUrls: ['./artefactos.page.scss'],
})
export class ArtefactosPage implements OnInit {
  ArtefactosAPI:any[]=[];

  constructor(public _services: GetsApiService) {
    this._services.getPersonajes<any[]>("").subscribe(data => {
      this.ArtefactosAPI = data
    })
  }

  ngOnInit() {
  }

}
