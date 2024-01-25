import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../user.service';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLinkActive, RouterLink, ReactiveFormsModule, NavbarComponent]
})
export class HeaderComponent implements OnInit {
  expression: any;
  isMobileMenuOpen = false;
  userFirstName: string | null;

  constructor(
    private userService: UserService,
    private productsService: ProductsService,
    private router: Router
  ) {
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

  private updateUserFirstName(): void {
    this.userFirstName = this.userService.getFirstName();
  }

  // Add to cart
  getTotalCartCount(): number {
    // Get total cart count
    return this.productsService.getTotalCartCount();
  }
}
