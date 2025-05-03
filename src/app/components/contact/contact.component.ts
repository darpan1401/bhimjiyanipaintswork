import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  formData = {
    name: '',
    phone: '',
    address: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxXOjdX8TKKlJkTYivV6W53XqoAd531BIYX4RPiYkGnQkGgP7DwWAKhRONkpHVewv1R/exec'
  
    const formData = {
      name: this.formData.name,
      phone: this.formData.phone,
      address: this.formData.address,
      message: this.formData.message
    };
  
    this.http.post(scriptURL, formData).subscribe(
      response => {
        alert('Form submitted successfully!');
        this.formData = { name: '', phone: '', address: '', message: '' }; // reset
      },
      error => {
        alert('Error submitting form.');
      }
    );
  }
}