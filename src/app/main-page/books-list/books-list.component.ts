import { Component, OnInit } from '@angular/core';
import { BooksService } from './BooksService';
import { Book } from './book';
import {CapitalizePipe} from "./pipes/capitalize.pipe";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  providers: [BooksService]
})
export class BooksListComponent implements OnInit {

  errorMessage: string
  books: Book[] = [];
  errorString: string = 'server error';

  constructor(private _booksService: BooksService) {

  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this._booksService.getData()
        .subscribe(
            books => this.books = books,
            error =>  this.errorMessage = <any>error);
  }

  deleteBook(index: number){
    if(confirm("Are you sure you want to delete " + this.books[index].title +"?")) {
      this.books.splice(index, 1);
      //delete the books from the database
    }
  }

  editBook(index: number){

  }
}
