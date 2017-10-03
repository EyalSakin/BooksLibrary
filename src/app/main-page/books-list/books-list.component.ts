import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from './book';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { BooksService } from './../../Books.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  subscription: Subscription;

  errorMessage: string
  books: Book[] = [];
  errorString: string = 'server error';

  constructor(private _booksService: BooksService) {
    this.subscription =  _booksService.sub.subscribe(val =>{
      let newBook = val as Book;
      this.books.push(newBook);
    })
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

  editBook(index: number, form: NgForm){
    var book = this.books[index];
    book.title = form.value.title;
    book.author = form.value.author;
    book.date = form.value.date;
    //edit the book in the database
  }
}
