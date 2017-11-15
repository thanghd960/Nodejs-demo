import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { TodoService } from "./services/todo.service";
import { SettingsService } from "./services/settings.service";


@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [TodoService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
