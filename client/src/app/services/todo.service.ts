import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from './settings.service';
import 'rxjs/Rx';


@Injectable()
export class TodoService{
    constructor(private http:Http, private settings:SettingsService){
        console.log('Todo Service Initialized ...');
    }
    // getTodos(){
    //     return this.http.get("http://localhost:5555/api/todos")
    //         .map(res => res.json());
    // }
    getTodos(): Observable<any> {
        return this.http.get(this.settings.url + `api/todos`)
          .map(res => res.json())
          .catch(err => Observable.throw(err));
    }
    addTodo(newTodo){
        console.log(newTodo);
        var headers = new Headers();
        headers.append('Content-Type','application/json; charset=utf-8');
        return this.http.post(this.settings.url + `api/todo`,JSON.stringify(newTodo),{headers: headers})
            .map(res => res.json())
            .catch(err => Observable.throw(err));
    }
    deleteTodo(id){
        // return this.http.delete(this.settings.url + `api/todo/${id}`)
        //     .map(res => res.json()
        //     .catch(err => Observable.throw(err)));
        return this.http.delete(this.settings.url + `api/todo/${id}`)
        .map(res => res.json())
        .catch(err => Observable.throw(err));
    }
}