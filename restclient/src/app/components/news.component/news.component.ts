import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor( public router: Router){

  }

  public goToDetail(id : string){
    console.log(id);
    this.router.navigate(["/newsDetail",id]);
  }
}
