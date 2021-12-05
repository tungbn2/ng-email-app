import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/share/message.model';
import { MessageService } from 'src/app/share/message.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
})
export class EmailDetailComponent implements OnInit, OnDestroy {
  idSub: Subscription;
  CurrentEmail: Message | null;
  content: string;

  constructor(private msgService: MessageService) {}

  ngOnInit(): void {
    this.idSub = this.msgService.currentEmailId.subscribe((id) => {
      if (id) {
        this.CurrentEmail = this.msgService.getCurrentEmail(id);
        this.content = this.CurrentEmail.body
          .split('\n')
          .map((item: string) => {
            return '<p>' + item + '</p>';
          })
          .join('');
      } else {
        this.CurrentEmail = null;
      }
    });
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }

}
