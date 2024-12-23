import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router) {}

  signupUsername: string = '';
  signupPassword: string = '';
  onSignup() {
    // Handle the signup logic here
    console.log('Signup Username:', this.signupUsername);
    console.log('Signup Password:', this.signupPassword);
    // Close the modal after signup
    const signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
    signupModal.hide();
  }

  openLoginModal() {
    this.router.navigate(['/login']).then(() => {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    });
  }

  
}
