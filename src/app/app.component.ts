import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

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
