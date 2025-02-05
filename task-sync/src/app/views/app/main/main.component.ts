import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import * as fontawesome from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../../services/authentication.service';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { User } from '../../../domain/model/user.model';


@Component({
  selector: 'task-sync-main',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  faCoffee = fontawesome.faHeartBroken;
  faCopyright = faCopyright;

  userInformation?: User;

  userId: string | null;
  accessType: string | null;
  myForm: any;
  showForm = false;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,) {

      this.userId = localStorage.getItem('id');
      this.accessType = localStorage.getItem('accessType');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['account/user-type-selection']);
  }
 

  toggleForm() {
    this.showForm = !this.showForm; 
  }

  closeForm() {
    this.showForm = false;
  }
}
