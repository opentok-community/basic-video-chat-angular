import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import *  as OT from '@opentok/client';
@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})

export class SubscriberComponent {
  @ViewChild('subscriberDiv', { static: true }) subscriberDiv: ElementRef;
  @Input() session: OT.Session;
  @Input() stream: OT.Stream;

  constructor() { }

  subscribe(): void {
    const subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {
      insertMode: "append",
      width: "100%",
      height: "100%"
    }, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  }
}
