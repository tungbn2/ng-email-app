import {
  ActivatedRoute,
  ActivationEnd,
  NavigationStart,
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../share/message.service';
import { Message } from '../share/message.model';
import { tap, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'email-content',
  templateUrl: './email-content.component.html',
  styleUrls: ['./email-content.component.css'],
})
export class EmailContentComponent implements OnInit, OnDestroy {
  idSub: Subscription;
  CurrentEmail: Message | null;

  constructor(private msgService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.idSub = this.msgService.currentEmailId.subscribe((id) => {
      if (id) {
        this.CurrentEmail = this.msgService.getCurrentEmail(id);
        console.log(this.CurrentEmail);
      } else {
        this.CurrentEmail = null;
      }
    });
    console.log(this.router.url);
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}


