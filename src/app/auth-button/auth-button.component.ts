import { Component, Inject} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
    <button id="logout" (click)="auth.logout({ returnTo: document.location.origin })">
      Log out
    </button>
  </ng-container>

  <ng-template #loggedOut>
    <button id="login" (click)="auth.loginWithRedirect()">Log in</button>
  </ng-template>
`,
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent {



  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService)  {


  }
  // constructor(public auth: AuthService) {
  //   this.auth;
  // }
  // @Inject(DOCUMENT) public document: Document;
  //







}
