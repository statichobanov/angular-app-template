import { Injectable } from '@angular/core';
import * as COUNTRIES_AND_CITIES from '../../../../assets/json/countries-and-cities-1.json';
import * as COUNTRY_CODES from '../../../../assets/json/country-codes.json';

interface Country {
  name: string;
  countryCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  readonly countriesAndCities: { [key: string]: string[] } = COUNTRIES_AND_CITIES;
  readonly countryCodes: { [key: string]: string } = COUNTRY_CODES;

  countries!: Country[];

  constructor() {
    this.countries = Object.entries(this.countryCodes)
      .map(item => {
        const name = item[1];
        const countryCode = item[0];

        return { name, countryCode };
      })
      .filter(country => this.countriesAndCities[country.name]);
  }

  getCountries(): Country[] {
    return this.countries;
  }

  getCities(country: string): string[] {
    return this.countriesAndCities[country];
  }
}
