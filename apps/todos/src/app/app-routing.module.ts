import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { 
      path: 'home', 
      component: HomeComponent 
    },
    { 
      path: 'todo-list',
      loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
    },
    { 
      path: '', 
      component: HomeComponent, pathMatch: 'full'
    }
  ]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }