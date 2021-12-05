import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../share/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('users') users: ElementRef;

  constructor(private msgService: MessageService, private router: Router) {}

  ngOnInit(): void {}

  changeUser() {
    this.msgService.setUser(this.users.nativeElement.value);
    this.msgService.currentEmailId.next(null);
    this.router.navigate(['/message']);
  }
}
