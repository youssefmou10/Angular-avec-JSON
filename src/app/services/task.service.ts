import { Task } from './../models/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl="http://localhost:5000/tasks"
  constructor(private http : HttpClient) { }
  findAll(){
    return this.http.get<Task[]>(this.apiUrl);
  }
  delete(id){
    return this.http.delete("http://localhost:5000/tasks/"+id);
  }
  persti(task){
    return this.http.post<Task>(this.apiUrl,task);
  }

}
