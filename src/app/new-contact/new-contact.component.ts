import { Component } from '@angular/core';
import { ContactManagerService , Contact } from '../services/contact-manager.service';

@Component({
    selector:'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls:['./new-contact.component.scss']
})
export class NewContactComponent{
    contact:Contact;
    constructor(
        private contactManagerService: ContactManagerService,
    ){
        this.contact = {
            name:'',
            email:'',
            phoneNumber:0
        }
    }
    onSubmit() {
        this.contactManagerService.addContact(this.contact);
    }
}