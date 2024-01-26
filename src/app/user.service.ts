// user.service.ts
import { Product } from './product';
import {CLOTHING_PRODUCTS} from '../db-data'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private products: Product[] = [];
  public productData = CLOTHING_PRODUCTS;
  private userKey = 'user';
  private userImageUrlKey = 'userImageUrl';
  private defaultUserImageUrl = '../assets/user.jpg';

    // // Initialize product data if not present in local storage
    // private initializeProducts(): void {
    //   if (typeof localStorage !== 'undefined') {
    //     const storedProducts = localStorage.getItem(this.productsKey);
    //     if (!storedProducts) {
    //       localStorage.setItem(this.productsKey, JSON.stringify(CLOTHING_PRODUCTS));
    //     }
    //   }
    // }



    // Get products from local storage
    // getProducts(): Product[] {
    //   if (typeof localStorage !== 'undefined') {
    //     this.initializeProducts();
    //     const storedProducts = localStorage.getItem(this.productsKey);
    //     return storedProducts ? JSON.parse(storedProducts) : [];
    //   } else {
    //     return [];
    //   }
    // }

    // saveProducts(products: Product[]): void {
    //   localStorage.setItem(this.productsKey, JSON.stringify(products));
    // }


  authenticateUser(email: any, password: any) {
    throw new Error('Method not implemented.');
  }

  getUser(): any {
    if (typeof localStorage !== 'undefined') {
      const userString = localStorage.getItem(this.userKey);
      return userString ? JSON.parse(userString) : null;
    } else {
      return null;
    }
  }

  getFirstName(): string | null {
    const user = this.getUser();
    return user ? user.firstName : null;
  }

  getProfileUrl(): string | null {
    return this.defaultUserImageUrl;
  }

  updateProfileUrl(profileImageUrl: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.userImageUrlKey, profileImageUrl);
    }
  }

  saveUser(user: any): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.userKey);
    }
  }

  // productData


  // cartCountcd
  // getCartCount(): number{
  //   return this.cartCount ;
  // }


  // doCcount(): number{
  //   return this.cartCount += 1;
  // }

  // addToCart(products: Product): void {

  //   const product_id = products.id
  //   const product = this.productData.find((p: Product) => p.id === product_id);
  //   console.log(product_id, product)

  //   if (product_id && product) {
  //     // this.cartCount += 1;
  //     this.doCcount();
  //     this.saveProducts([...this.products]); // Make sure this.products is defined
  //   }
  // }



  // removeFromCart():void {
  //   this.cartCount -= 1;
  // }
}
