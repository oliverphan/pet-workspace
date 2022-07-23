import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const appRoutes: Routes = [
  { path: 'home', component: NxWelcomeComponent },
  { path: 'todo-list', component: TodoListComponent, data: { title: 'List of todos' } },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TodoListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
