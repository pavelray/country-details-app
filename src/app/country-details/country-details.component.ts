import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country : any;
  url = 'https://restcountries.eu/rest/v2/alpha/';
  code: string;
  constructor(private service : CountryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param => {
        this.code = param.get("code");
        this.service.getCountry(this.url+this.code)
          .subscribe(country=> {this.country = country; console.log(this.country)});
      });
  }

}
