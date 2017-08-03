import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MarvelService} from './marvel-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MarvelService, Md5 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
