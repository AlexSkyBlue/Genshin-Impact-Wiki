import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.page.html',
  styleUrls: ['./armas.page.scss'],
})
export class ArmasPage implements OnInit {

  ArtefactosAPI:any[]=[];

  constructor(public _services: GetsApiService) {
    this._services.getArmas<any[]>("").subscribe(data => {
      this.ArtefactosAPI = data
    })
  }

  ngOnInit() {
  }
  
}
