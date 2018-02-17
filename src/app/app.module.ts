import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { ViewCepComponent } from './view-cep/view-cep.component';
import { SearchCepService } from './view-cep/search-cep.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewCepComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule          
  ],
  providers: [ SearchCepService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
