import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from "@angular/core"

export class GlobalErrorHandler extends ErrorHandler {
  constructor(private httpClient: HttpClient, private locationStrategy: LocationStrategy) {
    super();
  }

//  override handleError(error): void {
//   var errorEvent = {
//     path: this.locationStrategy.path(),
//     message: error.message ? error.message : error.toString(),
//     handler: 'GlobalErrorHandler',
//     user: 'currentUser-todo',
//     time: new Date(),
//     stack: error.stack
//   }

//   this.httpClient.post('http://localhost:3001/logs', errorEvent)
//     .subscribe(() => {});
//  }
}
