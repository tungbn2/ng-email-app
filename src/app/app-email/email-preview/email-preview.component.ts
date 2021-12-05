import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/share/message.model';
import { MessageService } from 'src/app/share/message.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.css'],
})
export class EmailPreviewComponent implements OnInit, OnDestroy {
  currentMsgList: Message[];
  msgSub: Subscription;
  currentUser: string;
  currentId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.msgService.getCurrentMsgList(
        params['folder'],
        this.msgService.currentUser
      );
      if (params['id']) {
        this.currentId = params['id'];
        this.msgService.currentEmailId.next(params['id']);
      } else {
        this.msgService.currentEmailId.next(null);
      }
    });
    this.msgSub = this.msgService.currentMsgList.subscribe((msgList) => {
      if (msgList) {
        this.currentMsgList = msgList;
      }
    });
  }

  ngOnDestroy() {
    this.msgSub.unsubscribe();
  }

  navi(folder: string, id: string) {
    this.router.navigate([folder, id], { relativeTo: this.route.parent });
  }
}
