import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true, // Ensure standalone component setup
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Fixed styleUrls format
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  
    loading = false; // New variable to show/hide blur screen
  
    constructor(private contactService: ContactService) {}
  
    onSubmit(contactForm: NgForm) {
      if (!this.contact.name || !this.contact.email || !this.contact.phone || !this.contact.message) return;
    
      this.loading = true; // Show blur effect
      this.contactService.sendFormData(this.contact).subscribe({
        next: (response) => {
          // console.log('Data sent successfully!', response);
          alert('Your message has been sent!');
    
          contactForm.reset(); // ✅ Reset the form after successful submission
          this.loading = false; // Hide blur effect
        },
        error: (error) => {
          // console.error('Error sending data:', error);
          alert('Failed to send message. Please try again!');
          this.loading = false; // Hide blur effect
        }
      });
    }
    
  }