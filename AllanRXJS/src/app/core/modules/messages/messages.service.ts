import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';


@Injectable()
export class MessagesService {

  private subject = new BehaviorSubject<string[]>([]);

  errors$: Observable<string[]> = this.subject.asObservable()
    .pipe(
      filter(messages => messages && messages.length > 0)
    );

  showErrors(...errors: string[]): Observable<string[]> {
    this.subject.next(errors);
    return of(errors);
  }

  showSuccess(...message: string[]): void {
    this.subject.next(message);
  }


}
