import { Component, OnInit  } from '@angular/core';
import { ContactManagerService, Contact } from '../services/contact-manager.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[] = [];
  constructor(
    private contactMangerService : ContactManagerService,
  ){

  }
  ngOnInit(){
    this.getContacts();
  }
  getContacts(){
    this.contacts = this.contactMangerService.getContacts();
  }
  deleteContact(contact:Contact){
    alert('delete')
    this.contactMangerService.deleteContact(contact);
  }
}
