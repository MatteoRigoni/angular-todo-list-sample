import { GlobalErrorHandler } from './globalErrorHandler';
import { ErrorHandler } from '@angular/core';
import { CalendarModule } from './calendar/calendar.module';
import { TasksModule } from './tasks/tasks.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    CalendarModule
  ],
  // providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
