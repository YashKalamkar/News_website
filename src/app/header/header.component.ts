import { Component } from '@angular/core';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faRefresh:any = faRefresh;
  constructor(private router: Router) {}

  openLoginModal() {
    this.router.navigate(['/login']).then(() => {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    });
  }

  openSignupModal() {
    this.router.navigate(['/signup']).then(() => {
      const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
      signupModal.show();
    });
  }

  refreshPage() {
    window.location.reload();
  }
}
