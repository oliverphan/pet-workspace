import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'todo-list', component: TodoListComponent },
    { path: '', component: HomeComponent, pathMatch: 'full'}
  ]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }