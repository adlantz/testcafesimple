import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
    <div id="userwelcome" *ngIf="auth.user$ | async as user">
      Welcome, {{user.name}}
</div>`
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
