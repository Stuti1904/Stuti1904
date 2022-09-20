import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookComponent } from './display-book/display-book.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'books', component:DisplayBookComponent},
  {path:'', redirectTo:'books', pathMatch:'full'},
  {path:'details/:id', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
