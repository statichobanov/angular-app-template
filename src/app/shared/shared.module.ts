import { NgModule } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Primeng */
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

/* Pipes */
import { SafeHtmlPipe } from './pipes';
import { CountriesDropdownComponent } from './components/countries-dropdown/countries-dropdown.component';

@NgModule({
  declarations: [SafeHtmlPipe, CountriesDropdownComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    InputTextModule,
    DropdownModule,
    CountriesDropdownComponent,
    SafeHtmlPipe
  ],
  providers: [KeyValuePipe]
})
export class SharedModule {
  constructor() {}
}
