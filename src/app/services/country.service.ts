import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends DataService {

  constructor(http: Http) {
    super('http://restcountries.eu/rest/v2/all',http)
  }

  getCountry(url: string){
   return this.getDetails(url);
  }
}
