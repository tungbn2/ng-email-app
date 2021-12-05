import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/share/message.service';


@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css'],
})
export class EmailBoxComponent implements OnInit {
  folders: string[];

  constructor(private msgService: MessageService) {}

  ngOnInit(): void {
    this.folders = this.msgService.getFolders()
  }
}
