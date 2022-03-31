import { NgModule } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Primeng */
import { CarouselModule } from 'primeng/carousel';

/* Pipes */
import { SafeHtmlPipe } from './pipes';

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, CarouselModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CarouselModule, SafeHtmlPipe],
  providers: [KeyValuePipe]
})
export class SharedModule {
  constructor() {}
}
