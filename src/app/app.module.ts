import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
//directives
import { BgDirective } from './directives/background.directive';
import { ContactManagerService, Contact } from './services/contact-manager.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    NewContactComponent,
    BgDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    ContactManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
