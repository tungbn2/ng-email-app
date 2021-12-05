import { MessageService } from './../share/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './app-email.component.html',
  styleUrls: ['./app-email.component.css'],
})
export class AppEmailComponent implements OnInit {
  constructor(private msgService: MessageService) {}

  ngOnInit(): void {
    this.msgService.currentEmailId.next(null);
  }
}
