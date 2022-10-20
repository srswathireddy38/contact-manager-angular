import { Injectable } from '@angular/core';


export interface Contact {
  name: string;
  email: string;
  phoneNumber: number;
};

@Injectable({
    providedIn: 'root'
})
export class ContactManagerService {
    contacts:Contact[];
    constructor() {
        this.contacts = [
            {
                name: 'swathi',
                email: 'srswathireddy38@gmail.com',
                phoneNumber: 1234567893
            },
            {
                name: 'krishna',
                email: 'krishna38@gmail.com',
                phoneNumber: 1234567893
            },
            {
                name: 'vasu',
                email: 'vasu1234@gmail.com',
                phoneNumber: 1234567893
            },
            {
                name: 'coach',
                email: 'coach786@gmail.com',
                phoneNumber: 1234567893
            },
        ]
    }
    getContacts():Contact[] {
        return this.contacts;
    }
    addContact(contact:Contact){
        this.contacts.push(contact);
    }
    deleteContact(contact:Contact){
        this.contacts.forEach((value,i)=>{
           if(value.email === contact.email){
                this.contacts.splice(i,1)
           }
        });
    }
    
}