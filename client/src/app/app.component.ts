import { Component } from "@angular/core";
import { TodoService } from "./services/todo.service";

// import {} from
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [TodoService]
})
export class AppComponent {
  
}
