import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import * as countries from '../assets/countries-and-cities-1.json'; */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-crypto';

  name = 'Angular';
  /* countries!: string[]; */

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    /* testing */
    /* this.countries = Object.keys(countries); */
  }
}
