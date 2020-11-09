import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactName: string;
  contactEmail: string;
  contactMessage: string;
  published: Date;
  newMessage: any;

  messages =  [
    new Messages(0, 'Brenda Kimutai', 'kimutai.brenda@gmail.com', 'Hi there! I like your work!', new Date())
  ];

  submitMessage() {
    this.newMessage = new Messages(0, this.contactName, this.contactEmail, this.contactMessage, new Date());
    this.messages.push(this.newMessage);
  }

  constructor() { }

  ngOnInit() {
  }

}
