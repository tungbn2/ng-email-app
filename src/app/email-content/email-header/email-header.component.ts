import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/share/message.model';

@Component({
  selector: 'app-email-header',
  templateUrl: './email-header.component.html',
  styleUrls: ['./email-header.component.css']
})
export class EmailHeaderComponent implements OnInit {
@Input() email: Message
  constructor() { }

  ngOnInit(): void {
  }

}
