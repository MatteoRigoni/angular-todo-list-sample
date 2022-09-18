import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { PaintDirective } from './paint.directive';

@NgModule({
  declarations: [
    CalendarComponent,
    PaintDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
