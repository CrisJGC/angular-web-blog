import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  public contact: Contact;
  public status: string;

  constructor(
    private _contactService: ContactService,
  ){
    this.status = "";
    this.contact = new Contact('','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._contactService.sendEmail(this.contact).subscribe(
      response =>{
        if(response){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'failed';
        }
      },error => {
        console.log(<any>error);
      }
    )
  }
  
}
