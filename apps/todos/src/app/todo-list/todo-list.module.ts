import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';

// configures NgModule imports and exports
@NgModule({
  imports: [CommonModule, TodoListRoutingModule],
  declarations: [ TodoListComponent ]
})
export class TodoListModule { }