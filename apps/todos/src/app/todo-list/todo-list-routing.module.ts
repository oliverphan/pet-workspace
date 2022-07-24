import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
    { 
      path: '',
      component: TodoListComponent
    }
  ]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }