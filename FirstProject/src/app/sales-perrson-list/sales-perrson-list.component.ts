import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/compiler/src/util';
import { subscribeOn } from 'rxjs';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-sales-perrson-list',
  templateUrl:'./sales-perrson-list.component.html',
  styleUrls: ['./sales-perrson-list.component.css']
})
export class SalesPerrsonListComponent implements OnInit {

  constructor() { }
//objectName:className

person1 : Salesperson = new Salesperson(102,"Anusai","Dumpeti","anusai@yahoo.com",100000);

personlist : Salesperson[] =[ new Salesperson(103,"swapna","kokkula","swapna@gmail.com",100000),
            new Salesperson(104,"naresh","kokkula","naresh@gmail.com",150000),
            new Salesperson(105,"ruthika","kokkula","ruthika@gmail.com",100000),
            new Salesperson(106,"hithika","kokkula","hithikaa@gmail.com",100000),
          ];

          personModel : Salesperson = new Salesperson(0,"","","",0);

  ngOnInit(): void {
    console.log("init method")
  }

onSubmit() : void {
  console.log("submit method ++++++");
  console.log(this.personModel);

  if(this.personModel.id > 0)
  this.personlist.push(this.personModel);// push(element)===>To add an element to array
}
}