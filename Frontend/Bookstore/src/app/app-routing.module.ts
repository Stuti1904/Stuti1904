import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookComponent } from './display-book/display-book.component';
import { DetailsComponent } from './details/details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthorComponent } from './author/author.component';
import { AuthorWiseBooksComponent } from './author-wise-books/author-wise-books.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenresComponent } from './genres/genres.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { LanguagesComponent } from './languages/languages.component';
import { EditLanguageComponent } from './edit-language/edit-language.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  {path:'books', component:DisplayBookComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'details/:id', component:DetailsComponent},
  {path:'error', component:ErrorPageComponent},
  {path:'author', component:AuthorComponent},
  {path:'authorwise/:id', component:AuthorWiseBooksComponent},
  {path:'addgenre', component:AddGenreComponent},
  {path:'genres', component:GenresComponent},
  {path:'editbook/:id', component:EditBooksComponent},
  {path:'editauthor/:id', component:EditAuthorsComponent},
  {path:'editgenre/:id', component:EditGenreComponent},
  {path:'language', component:LanguagesComponent},
  {path:'editLanguage/:id', component:EditLanguageComponent},
  {path:'signup', component:SignUpComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
