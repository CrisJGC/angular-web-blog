import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Global } from "./global";

@Injectable()
export class ContactService{
    public urlEmail: string;
    constructor(
        private _http: HttpClient
    ){
        this.urlEmail= Global.urlEmail;
    }
    sendEmail(contactForm: any){
        return this._http.post(this.urlEmail, contactForm, {responseType: 'text'})
    }
}