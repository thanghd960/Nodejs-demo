import { Component, OnInit } from "@angular/core";

import { TodoService } from "../services/todo.service";
import { Todo } from "../typings/Todo";
@Component({
  moduleId: module.id,
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  title: string;
  
  constructor(private todoService: TodoService) {
    // var todos = this.todos;
    //   console.log(todos);
    this.todoService.getTodos().subscribe(data => {
      console.log(data);
      this.todos = data;
    });
  }
  addTodo(event){
    event.preventDefault();
    // console.log(this.title)

    var newTodo = {    
      title: this.title,
      status: false
    }
    // Test add todo
    // this.todos.push(newTodo);
    // this.title = null;

    this.todoService.addTodo(newTodo)
      .subscribe(todo => {
        this.todos.push(newTodo)
        this.title = null;
      });

  }

  deleteTodo(id){
    
    console.log(id)

    var todos = this.todos;
    // this.todoService.deleteTodo(id).subscribe(data => {
    //   if (data.n == 1){
    //     for(var i = 0; i < todos.length; i++){
    //       if(todos[i]._id == id){
    //         todos.splice(i,1);
    //       }
    //     }
    //   }
    // }); 
    // this.articleService.deleteArticle(this.article.id).subscribe(() => {
    //   this.router.navigate(["cms",this.rootCateId,this.cateName,"articles"]);
    // });
    this.todoService.deleteTodo(id).subscribe(() => {
        console.log("deleted");
        

    });
    
    
  }

  ngOnInit() {}
}
