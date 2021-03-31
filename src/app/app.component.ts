import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project10';
  personne = {
    nom:"Mohamed Id brahim",
    Tel:"0651436191",
    adresse:null
  }
  /*addcourses(){
    this.courses.push({id:6,title:"react"});
  }*/
    
}
