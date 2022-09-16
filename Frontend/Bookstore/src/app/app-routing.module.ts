import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookComponent } from './display-book/display-book.component';

const routes: Routes = [
  {path:'books', component:DisplayBookComponent},
  {path:'', redirectTo:'books', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
