import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import * as COUNTRIES from '../assets/data/countries-and-cities.json';
import * as COUNTRY_CODES from '../assets/data/country-codes.json'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* readonly COUNTRIES_AND_CITIES: any = COUNTRIES;
  readonly COUNTRY_CODES: any = COUNTRY_CODES;
  countries!: string[];
  countryCodes!: string[]; */

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    /*  this.countries = Object.keys(this.COUNTRIES_AND_CITIES);
    const reversedKeyValue = this.inverse(this.COUNTRY_CODES);
    const check = this.countries.map(c => {
      const res = reversedKeyValue[c];
      if (!res) {
        return c;
      }
      return res;
    });
    console.log(check); */
  }

  /* inverse(obj: any): any {
    var retobj: any = {};
    for (var key in obj) {
      retobj[obj[key]] = key;
    }
    return retobj;
  } */
}
