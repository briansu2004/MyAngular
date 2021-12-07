import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
