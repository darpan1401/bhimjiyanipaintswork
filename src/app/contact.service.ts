import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private sheetyUrl = 'https://api.sheety.co/0e48fad6658810dd1abf0d491789e405/contactFormResponses/sheet1'; 

  constructor(private http: HttpClient) {}

  sendFormData(contactData: any) {
    return this.http.post(this.sheetyUrl, { sheet1: contactData });
  }
}