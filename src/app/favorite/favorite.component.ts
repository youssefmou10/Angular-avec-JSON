import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input("fav-favorite")isFav:boolean=false;
  @Output('change')click = new EventEmitter();
  
 myFavorite(){
   this.isFav=!this.isFav;
   //this.click.emit({newState:this.isFav});
 }
 

}
