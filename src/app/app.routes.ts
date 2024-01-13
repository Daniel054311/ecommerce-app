import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RetailComponent } from './retail/retail.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-retail', component: RetailComponent },
  { path: 'sign-up', component: SignUpComponent },
  {path:'app-login',component:LoginComponent}

];
