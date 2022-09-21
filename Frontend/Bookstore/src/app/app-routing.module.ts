import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookComponent } from './display-book/display-book.component';
import { DetailsComponent } from './details/details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthorComponent } from './author/author.component';
import { AuthorWiseBooksComponent } from './author-wise-books/author-wise-books.component';

const routes: Routes = [
  {path:'books', component:DisplayBookComponent},
  {path:'', redirectTo:'books', pathMatch:'full'},
  {path:'details/:id', component:DetailsComponent},
  {path:'error', component:ErrorPageComponent},
  {path:'author', component:AuthorComponent},
  {path:'authorwise/:id', component:AuthorWiseBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
