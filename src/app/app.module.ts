import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { Sedmica4Component } from './sedmica4/sedmica4.component';
import { Sedmica5Component } from './sedmica5/sedmica5.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { BrendoviComponent } from './brendovi/brendovi.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    Sedmica4Component,
    Sedmica5Component,
    ProizvodiComponent,
    BrendoviComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgOptimizedImage,
      HttpClientModule,
      CommonModule,
      BrowserAnimationsModule, // required animations module
      ToastrModule.forRoot(), //
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
