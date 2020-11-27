import { Component, OnInit } from '@angular/core';
import { TASK } from '../task'
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {



  tasks = [];
  completedItems = [];
  task: TASK;
  taskname: string = '';



  constructor(public auth: AuthService) { }


  ngOnInit(): void {
  }


  addItem(){
   if (this.taskname !== '')
   {
    this.tasks.push({name: this.taskname, completed: false});
    this.taskname = '';
   }
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

  toggleCompleted(taskComplete: TASK){
    taskComplete.completed = !taskComplete.completed;
  }

  archive(){

      // this.removeItem(task)
      // this.completedItems.push(task)
      // if (task.completed == true){
      //   this.removeItem(task)
      //   this.completedItems.push(task)
      // }

    for (var _i = 0, task_1 = this.tasks; _i < this.tasks.length; _i++) {
      var task = task_1[_i];
      if (task.completed == true){
        this.removeItem(task)
        this.completedItems.push(task)
        _i--
      }
     }


  }



}
