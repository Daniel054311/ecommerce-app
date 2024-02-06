import { Injectable } from '@angular/core';
import { CLOTHING_PRODUCTS } from '../db-data';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = CLOTHING_PRODUCTS;

  constructor() { }

  // Get products
  getProducts(): Product[] {
    return this.products;
  }

  // Add product to cart
  addToCart(product: Product): void {
    // console.log(product)
    const productInCart = this.products.find(p => p.id === product.id);
    if (productInCart) {
      productInCart.cartCount = (productInCart.cartCount || 0) + 1;

    }
  }

  // getProductInCart(product: Product): Product | undefined {
  //   const productInCart = this.products.find(p => p.id === product.id);
  //   console.log(productInCart)
  //   return productInCart;

  // }

  getProductsInCart(): Product[] {
    return this.products.filter(p => p.cartCount && p.cartCount > 0);
  }





  // Remove product from cart
  removeFromCart(product: Product): void {
    const productInCart = this.products.find(p => p.id === product.id);
    if (productInCart && productInCart.cartCount && productInCart.cartCount > 0) {
      productInCart.cartCount -= 1;
    }
  }



  // Get cart count for a specific product
  getCartCount(product: Product): number {
    const productInCart = this.products.find(p => p.id === product.id);
    return productInCart ? (productInCart.cartCount || 0) : 0;
  }

  // Get total cart count
  getTotalCartCount(): number {
    return this.products.reduce((total, product) => total + (product.cartCount || 0), 0);
  }


}
