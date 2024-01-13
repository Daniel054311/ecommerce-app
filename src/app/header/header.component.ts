import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../user.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLinkActive, RouterLink,ReactiveFormsModule, CommonModule, NavbarComponent]
})
export class HeaderComponent implements OnInit{
  expression: any;
  isMobileMenuOpen = false;
  userFirstName: string | null;

  constructor(private userService: UserService, private router: Router) {
    this.userFirstName = this.userService.getFirstName();
  }

  ngOnInit(): void {
    this.updateUserFirstName();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }




  routeToReail() {
this.router.navigate(['/app-retail'])
  }
  routeToSignUp() {
    this.router.navigate(['/sign-up'])
  }

//   logout() {
//  this.userService.logout(); // You need to implement a logout method in your UserService
//  this.router.navigate(['/app-login']);

//   }

  private updateUserFirstName(): void {
    this.userFirstName = this.userService.getFirstName();
  }
}
