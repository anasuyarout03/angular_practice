import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name = 'SaChiN teNDuLkAR';
  mySal = 5000;
  today = new Date();
  user={eId:101,name:'anu',sal:5000};
  arr = [10,20,50,60,30,40];
  msg: string = '';
  num:number = 0;

}
