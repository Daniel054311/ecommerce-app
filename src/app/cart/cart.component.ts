import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  productsInCart: Product[] = [];
  cartCountProductId: number | null = null; // Property to track the ID of the product in the cart
  signal: boolean = false;
  totalCount: any = 0;
  isTotalCount:boolean = false

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

    ngOnInit(): void {
      this.getProductInCartValue();
  }
  addToCart(product: Product): void {
    if(product.quantity >= product.cartCount! || this.cartCountProductId !== product.id){
      this.isTotalCount = true;
    }

    // Update cartCountProductId to track the specific product in the cart
    this.cartCountProductId = product.id;
    if (product.cartCount === undefined) {
      this.productsService.addToCart(product);
    } else {
      product.cartCount++;
    }

      // this.productsService.saveProducts([...this.products]);// Make sure this.products is defined
  }

  removeFromCart(product: Product): void {
    // Remove product from cart
    this.productsService.removeFromCart(product);
  }


  getTotalCartCount(): number {
    // Get total cart count
    return this.productsService.getTotalCartCount();
  }

  getCartCount(product: Product): number {
    // Get cart count for a specific product
    return this.productsService.getCartCount(product);
  }
    getProductInCartValue(): void {
      this.productsInCart = this.productsService.getProductsInCart();
  }

  routeToRetail() {
    this.router.navigate(["/app-retail"])
  }
  routeToCheckout() {
    this.router.navigate(["/app-checkout"])
  }

}
