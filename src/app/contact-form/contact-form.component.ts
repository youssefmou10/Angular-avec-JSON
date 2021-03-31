import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  MethodContacts =[{id:0 ,name:"email"},{id:1,name:"phone"},{id:2,name:"adress"}];
  constructor() { }

  ngOnInit(): void {
  }
  log(x){
    console.log(x);
  }
  submit(f)
  {
    console.log(f.value);
  }
}
