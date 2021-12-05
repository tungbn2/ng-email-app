import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import messages from '../../assets/messages.json';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageList: Message[] = messages;
  currentMsgList = new BehaviorSubject<Message[] | null>(null);
  currentEmailId = new BehaviorSubject<string | null>(null);
  currentUser: string = 'myself@angular.dev';

  constructor() {}

  getCurrentMsgList(folder: string, user: string) {
    let msgList = this.messageList.filter(
      (item) => item.folder == folder && item.to == user
    );
    this.currentMsgList.next(msgList);
  }

  getCurrentEmail(id: string) {
    let currentEmailMsg = this.messageList.filter((item) => item._id == id);
    return currentEmailMsg[0];
  }

  getFolders() {
    let folder = new Set(this.messageList.map((item) => item.folder));
    return Array.from(folder).sort();
  }

  setUser(user: string){
    this.currentUser = user
  }

  showMsg(folder: string) {
    let msgList = this.messageList.filter((item) => item.folder == folder);
    console.log(msgList);
  }
}
