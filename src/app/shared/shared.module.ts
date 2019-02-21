import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {BookService} from '../book/book.service';
import {CustomizedSelectBoxComponent} from './custom-components/customized-select-box/customized-select-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookGenresService} from '../book/book-genres.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [ToolbarComponent, NavigationComponent, HomeComponent, CustomizedSelectBoxComponent],
  exports: [
    CommonModule,
    ToolbarComponent,
    NavigationComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CustomizedSelectBoxComponent,
    MatInputModule,
  ]
})
export class SharedModule {
  /**
   * Use this method in your root module to provide singleton services from ALL modules including this shared one.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // put here providers of singleton services from ALL modules including this shared one
      providers: [BookService, BookGenresService]
    };
  }
}
