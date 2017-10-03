import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BooksListComponent } from './main-page/books-list/books-list.component';
import { CapitalizePipe } from './main-page/books-list/pipes/capitalize.pipe';
import { BooksService } from './Books.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    BooksListComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CapitalizePipe, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
