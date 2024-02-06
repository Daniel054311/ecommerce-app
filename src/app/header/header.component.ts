import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../user.service';
import { ProductsService } from '../products.service';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Product } from '../product';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, RouterLinkActive, RouterLink, ReactiveFormsModule, NavbarComponent, NgOptimizedImage]
})
export class HeaderComponent implements OnInit {

  expression: any;
  isMobileMenuOpen = false;
  userFirstName: string | null;
  userProfileUrl: string | null;
  modalRef:  | null = null;


  constructor(
    private userService: UserService,
    private productsService: ProductsService,
    private router: Router,

  ) {
    this.userFirstName = this.userService.getFirstName();
    this.userProfileUrl = this.userService.getProfileUrl();

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
    this.router.navigate(['/app-retail']);
  }

  routeToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  private updateUserFirstName(): void {
    this.userFirstName = this.userService.getFirstName();
  }

  getProductInCartValue(): void {
    this.router.navigate(["/app-cart"]);
  }
  // Add to cart
  getTotalCartCount(): number {
    // Get total cart count

    return this.productsService.getTotalCartCount();
  }



}
