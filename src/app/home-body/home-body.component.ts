import { CountryService } from './../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  countries : any;

  constructor(private service : CountryService) { }

  ngOnInit() {
    this.service.getAll().subscribe(countries=> {this.countries = countries; console.log(this.countries);});
    console.log(this.countries);
  }

}
