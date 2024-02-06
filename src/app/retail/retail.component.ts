import { Component, OnInit, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { CLOTHING_PRODUCTS } from "../../db-data";
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retail',
  standalone: true,
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css'],
  imports: [CommonModule, FooterComponent, NavbarComponent]
})
export class RetailComponent implements OnInit {

  constructor(private productsService: ProductsService,private router:Router) { }

  productData: Product[] = [];
  cartCountProductId: number | null = null; // Property to track the ID of the product in the cart
  signal: boolean = false;
  totalCount: any = 0;
  isTotalCount:boolean = false
  // Add to cart

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
    this.router.navigate(["/app-cart"]);
      // this.productsService.saveProducts([...this.products]);// Make sure this.products is defined
  }


  getCartCount(product: Product): number {
    // Get cart count for a specific product
    return this.productsService.getCartCount(product);
  }



removeFromCart(product: Product): void {
  // Remove product from cart
  this.productsService.removeFromCart(product);
}

getTotalCartCount(): number {
  // Get total cart count
  return this.productsService.getTotalCartCount();
}



  // get cartCount(): number {
  //   return this.productsService.getCartCount();
  // }

  // incrementQuantity(product: Product): void {
  //   if (product.quantity > 0) {
  //   product.quantity -= 1;
  //   this.productsService.addToCart(product);
  //     this.productsService.saveProducts(this.products);
  //   }
  // }

  // decrementQuantity(product: Product): void {
  //   if (this.cartCount > 0 ) {
  //     if (product.quantity >= 0) {
  //       product.quantity += 1;
  //     this.productsService.removeFromCart();
  //       this.productsService.saveProducts(this.products);
  //     }
  //   }
  // }


  ngOnInit(): void {
    // Load products data
    this.productData = this.productsService.getProducts();
  }
}
