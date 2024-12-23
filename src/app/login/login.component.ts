import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  onLogin() {
    // Handle the login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Close the modal after login
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
  }

  openSignupModal() {
    this.router.navigate(['/signup']).then(() => {
      const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
      signupModal.show();
    });
  }
}
