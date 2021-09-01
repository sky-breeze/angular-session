import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obserable-session',
  templateUrl: './obserable-session.component.html',
  styleUrls: ['./obserable-session.component.css']
})
export class ObserableSessionComponent implements OnInit, OnDestroy {

  mysubscription!: Subscription;
  constructor() { }


  ngOnInit(): void {

    // this.mysubscription = interval(1000).subscribe(count => {
    //   console.log(count)
    // })

    const myObserable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 5) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Count is greater than 3'))
        }
        count++;
      }, 1000)
    });
    this.mysubscription = myObserable.subscribe(data => {
      console.log(data)
    })
  }


  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }

}
