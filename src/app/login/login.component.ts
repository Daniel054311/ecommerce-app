import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  logIn: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService )  {
    this.logIn = this.formBuilder.group({
      email: ['', Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void{ }


  onSubmitLogin(): void {
    if (this.logIn.valid) {
      const storedUser = this.userService.getUser();

      if (storedUser) {
        if (
          this.logIn.get('email')?.value === storedUser.email &&
          this.logIn.get('password')?.value === storedUser.password
        ) {
          this.router.navigate(['/app-retail']);
        } else {
          alert('Invalid email or password. Please try again.');
        }
      } else {
        alert('User not found. Please sign up first.');
      }
    }
  }
}
