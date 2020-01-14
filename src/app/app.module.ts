import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { ROUTES } from './app.routes';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAwebJJFaXjPikRePAMywHaSKZf-4znaGQ",
      authDomain: "pokemon-store.firebaseapp.com",
      databaseURL: "https://pokemon-store.firebaseio.com",
      projectId: "pokemon-store",
      storageBucket: "pokemon-store.appspot.com",
      messagingSenderId: "159590955979",
      appId: "1:159590955979:web:55faf23b71373c2ae0944e",
      measurementId: "G-GWXNXSEQW0"   
    }, 'pokemons'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
