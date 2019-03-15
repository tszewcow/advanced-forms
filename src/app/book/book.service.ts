import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';

// TODO: this is the old way of defining services. The new one is described here and its recommended by Angular Team:
// https://angular.io/guide/singleton-services
/**
Beginning with Angular 6.0, the preferred way to create a singleton service is to specify on the service that it should be provided in the
application root. This is done by setting providedIn to root on the service's @Injectable decorator:
 */
@Injectable()
export class BookService {
  private static BOOK_URI = '/api/book';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Book> {
    return this.http.get<Book>(BookService.BOOK_URI);
  }

  findOne(id: number): Observable<Book> {
    return this.http.get<Book>(BookService.BOOK_URI + '/' + id);
  }

  save(bookToSave: Book): Observable<Book> {
    return this.http.post<Book>(BookService.BOOK_URI, bookToSave);
  }
}
