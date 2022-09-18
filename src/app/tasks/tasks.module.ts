import { TaskService } from './task.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskTableComponent } from '../task-table/task-table.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskTableComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
