import { Component, OnInit } from '@angular/core';
import { LocationService } from '@app/services/location/location.service';
import * as COUNTRIES_AND_CITIES from '../../../../assets/json/countries-and-cities-1.json';
import * as COUNTRY_CODES from '../../../../assets/json/country-codes.json';

interface Country {
  name: string;
  countryCode: string;
}

@Component({
  selector: 'app-countries-dropdown',
  templateUrl: './countries-dropdown.component.html',
  styleUrls: ['./countries-dropdown.component.scss']
})
export class CountriesDropdownComponent implements OnInit {
  readonly countriesAndCities: { [key: string]: string[] } = COUNTRIES_AND_CITIES;
  readonly countryCodes: { [key: string]: string } = COUNTRY_CODES;

  countries!: Country[];
  selectedCountry!: any;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.countries = this.locationService.getCountries();
  }

  onCountrySelect(selectedCountry: Country) {
    console.log(selectedCountry);
  }
}
