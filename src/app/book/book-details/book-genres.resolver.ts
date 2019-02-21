import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {Genre} from '../genre';
import {BookGenresService} from '../book-genres.service';

@Injectable({
  providedIn: 'root'
})
export class BookGenresResolver implements Resolve<Genre[]> {
  constructor(private genresService: BookGenresService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Genre[]> {
    return this.genresService.getGenres();
  }
}
