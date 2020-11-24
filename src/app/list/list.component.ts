import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {



  tasks = [];

  completedItems = [];

  task: string;




  addingItem: boolean = false;
  mouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  addToggle(){
    this.addingItem = !this.addingItem;
  }

  addItem(){
   this.tasks.push({name: this.task, completed: false});
   this.task = '';
   this.addingItem = false;
  }

  removeItem(taskDelete: string){
    let index: number = this.tasks.indexOf(taskDelete,0);
    if (index > -1) {
      this.tasks.splice(index, 1);
   }

  }

  removeCompleteItem(taskDelete: string){
    let index: number = this.completedItems.indexOf(taskDelete,0);
    if (index > -1) {
      this.completedItems.splice(index, 1);
   }

  }

  markCompleted(taskComplete: string){
    let index: number = this.tasks.indexOf(taskComplete,0);
    if (index > -1) {
      this.tasks.splice(index, 1);
   }

   this.completedItems.push(taskComplete);

  }



}
