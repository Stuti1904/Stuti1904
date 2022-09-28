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
import { StoreFrontHomeComponent } from './store-front-home/store-front-home.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
 
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'signup', component:SignUpComponent},
  {path:'admin', component:AdminPanelComponent, 
children: [
  {path:'books', component:DisplayBookComponent},
  {path:'books/details/:id', component:DetailsComponent},
  {path:'error', component:ErrorPageComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path:'author', component:AuthorComponent},
  {path:'authorwise/:id', component:AuthorWiseBooksComponent},
  {path:'addgenre', component:AddGenreComponent},
  {path:'genres', component:GenresComponent},
  {path:'books/editbook/:id', component:EditBooksComponent},
  {path:'author/editauthor/:id', component:EditAuthorsComponent},
  {path:'genres/editgenre/:id', component:EditGenreComponent},
  {path:'language', component:LanguagesComponent},
  {path:'language/editLanguage/:id', component:EditLanguageComponent},

]},
  {path:'storefront', component:StoreFrontHomeComponent,
children: [
  {path:'basicInfo', component:BasicInfoComponent},
  {path:'', redirectTo:'basicInfo', pathMatch: 'full'},
  {path:'checkout', component:CheckOutComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
