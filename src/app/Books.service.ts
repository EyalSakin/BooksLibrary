import { Injectable } from '@angular/core';
import { Book } from './main-page/books-list/book'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class BooksService {

  sub = new Subject();

  private baseUrl: string = "https://api.myjson.com/bins/1cnill";

  constructor(private http: Http) { this.getData(); }

  addBook(newBook: Book) {
    this.sub.next(newBook);
  }

  getData(): Observable<Book[]> {
        return this.http.get(this.baseUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json().books;
    return body || [];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
