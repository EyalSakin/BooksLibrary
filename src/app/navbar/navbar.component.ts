import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from './../main-page/books-list/book';
import { BooksService } from './../Books.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = "Books Library";

  constructor(private _addBookService: BooksService) { }

  addBook(form: NgForm){
    let newBook = new Book(form.value.title, form.value.author, form.value.date);
    this._addBookService.addBook(newBook);

    form.reset();
  }
}
