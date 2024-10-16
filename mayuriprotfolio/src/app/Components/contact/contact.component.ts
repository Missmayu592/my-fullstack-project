import { Component } from '@angular/core';
import { Clients } from '../../models/Clients';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitted = false;

  //dependency injection
   constructor(private service: ClientsService){}

  //object creating
  clients = new Clients();

  
  onSubmit(){
    this.save();
    this.submitted = true;
    if (this.clients.name && this.clients.email && this.clients.subject && this.clients.msg) {
      this.submitted = true;
      // Handle form submission logic here
      console.log('Form Submitted!', this.clients);
    } else {
      console.log('Form is invalid');
    }
  }

  save(){

    this.service.createContact(this.clients).subscribe();

  }

}
