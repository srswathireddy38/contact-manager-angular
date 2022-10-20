import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const routes:Routes = [
  {path : 'contacts', component : ContactsComponent},
  {path : '', redirectTo:'contacts',  pathMatch:'full'},
  {path: 'contacts/new', component: NewContactComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
