import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetsApiService {

  constructor(public _http: HttpClient) { }

  getPersonajes<T>(url : string){
    url = 'https://api.genshin.dev/characters'
    return this._http.get<T[]>(url)
  }

  getArtefactos<T>(url : string){
    url = 'https://api.genshin.dev/weapons'
    return this._http.get<T[]>(url)
  }

  getArmas<T>(url : string){
    url = 'https://api.genshin.dev/artifacts'
    return this._http.get<T[]>(url)
  }
}
