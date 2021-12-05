import { MessageService } from './share/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'email-app';
  constructor(private msgService: MessageService) {}
  ngOnInit() {
    this.msgService.currentEmailId.next(null);
  }
}
