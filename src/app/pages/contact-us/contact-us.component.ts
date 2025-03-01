import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';

  // EmailJS Configurations
  emailjsServiceId = 'service_i3847vi';
  emailjsUserId = 'o7s5iV7spOem9uRin';

  /** ✅ Validate Fields */
  isValidName(): boolean {
    return /^[a-zA-Z\s]{2,}$/.test(this.formData.name);
  }

  isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email);
  }

  isValidMessage(): boolean {
    return this.formData.message.length >= 10;
  }

  isServiceSelected(): boolean {
    return !!this.formData.service;
  }

  validateForm(): boolean {
    if (!this.isValidName()) {
      this.errorMessage = 'Invalid Name: Only letters & spaces (min 2 chars).';
      return false;
    }

    if (!this.isValidEmail()) {
      this.errorMessage = 'Invalid Email: Please enter a valid email address.';
      return false;
    }

    if (!this.isServiceSelected()) {
      this.errorMessage = 'Please select a service before submitting.';
      return false;
    }

    if (!this.isValidMessage()) {
      this.errorMessage = 'Message must be at least 10 characters long.';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  
  async submitForm(form: any) { 
    if (!this.validateForm()) {
      return;
    }
  
    if (!this.formData.email) {
      this.errorMessage = 'Recipient email address is required.';
      return;
    }
  
    try {
      // 1️⃣ Send notification email to ResolVR team
      await emailjs.send(this.emailjsServiceId, 'template_qc5g1ke', {
        to_email: "contact@resolvr.dev",
        from_name: this.formData.name,
        from_email: this.formData.email,
        reply_to: this.formData.email,
        company: this.formData.company || 'N/A',
        service: this.formData.service,
        message: this.formData.message
      }, this.emailjsUserId);
  
      // 2️⃣ Send auto-reply to the user
      await emailjs.send(this.emailjsServiceId, 'template_wk72a8a', {
        to_email: this.formData.email,
        to_name: this.formData.name,
        from_name: "ResolVR Team",
        from_email: "contact@resolvr.dev",
        reply_to: "contact@resolvr.dev",
        message: this.formData.message
      }, this.emailjsUserId);
  
      // console.log('✅ Both Emails Sent Successfully');
      this.successMessage = '✅ Your message has been sent!';
      this.errorMessage = '';
  
      this.resetForm(form);
  
    } catch (error: unknown) {
      console.error('❌ Error Sending Email:', error);
      this.errorMessage = '❌ Failed to send email. Please try again.';
      this.successMessage = '';
    }
  }
  
  
  /** ✅ Reset Form */
  resetForm(form: any) {
    // console.log('Resetting Form...');
    
    // Reset form data
    this.formData = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    };
  
    // Reset Angular form validation state
    if (form) {
      form.resetForm(); // Resets the form including validation state
    }
  }
  
}
