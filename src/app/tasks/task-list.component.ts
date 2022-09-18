import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, ActivatedRoute } from '@angular/router';
import { NewTask } from './new-task-dto';
import { TaskItem } from './task-item-dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTask: NewTask = new NewTask();
  tasks = this.taskService.getAllTasks(this.route.snapshot.params['date']);

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  ngOnInit() {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  addTask(taskNgForm: NgForm) {
    if (taskNgForm.touched === false) {
      return;
    }
    if (taskNgForm.valid == false) {
      return;
    }

    this.taskService.addTask(this.route.snapshot.params['date'], this.newTask);
    //this.tasks = this.taskService.getAllTasks();
    taskNgForm.reset({date: this.newTask.date});
  }

  removeTask(exisitingTask: TaskItem) {
    let userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${exisitingTask.title}"`);
    if (userConfirmed) {
      this.taskService.removeTask(this.route.snapshot.params['date'], exisitingTask);
      //this.tasks = this.taskService.getAllTasks();
    }
  }

  toggleIsDone(task: TaskItem) {
    task.isDone = !task.isDone;
  }
}


