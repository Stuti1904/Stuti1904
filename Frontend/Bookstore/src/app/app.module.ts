import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from 'filterPipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthorComponent } from './author/author.component';
import { AuthorWiseBooksComponent } from './author-wise-books/author-wise-books.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenresComponent } from './genres/genres.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';
import { FloatButtonsComponent } from './float-buttons/float-buttons.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { LanguagesComponent } from './languages/languages.component';
import { EditLanguageComponent } from './edit-language/edit-language.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StoreFrontNavComponent } from './store-front-nav/store-front-nav.component';
import { StoreFrontHomeComponent } from './store-front-home/store-front-home.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { CheckOutComponent } from './check-out/check-out.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayBookComponent,
    DetailsComponent,
    FooterComponent,
    FilterPipe,
    ErrorPageComponent,
    AuthorComponent,
    AuthorWiseBooksComponent,
    AddGenreComponent,
    GenresComponent,
    EditBooksComponent,
    EditAuthorsComponent,
    FloatButtonsComponent,
    EditGenreComponent,
    LanguagesComponent,
    EditLanguageComponent,
    LoginComponent,
    SignUpComponent,
    AdminPanelComponent,
    StoreFrontNavComponent,
    StoreFrontHomeComponent,
    BasicInfoComponent,
    CheckOutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
