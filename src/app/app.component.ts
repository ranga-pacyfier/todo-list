import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      this.todos.push(todo);
      this.newTodo ='';
    }
    else{
      alert('please enter Todo');
    }
  }
  done(id:number){
    this.todos[id].iscompleted=!this.todos[id].iscompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  }
}
