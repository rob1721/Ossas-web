import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface EventData {
  name: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject();
  }

  public emitSelectEvent(value: any) {
    this.emit({
      name: 'select-event',
      value
    } as EventData);
    console.log(value);
  }

  private emit(event: EventData): void {
    this.subject.next(event);
  }

  public on(eventName: string, action: any): Subscription {
    console.log('en el ON');
    return this.subject.pipe(
      filter( (e: any) => e.name === eventName ),
      // tslint:disable-next-line: no-string-literal
      map( (e: any) => e['value'])).subscribe(action);
  }
}
