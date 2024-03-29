import { Component, OnInit } from '@angular/core';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormArray,
  FormGroup,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkActive, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup;
  isEmailInvalid: boolean | undefined;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
    this.signUp = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      secondName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]],
      profile:  [''],
    });
  }

  isFirstName = false;
  isSecondName = false;
  isEmail = false;
  isPassword = false;
  isConfirmPassword = false;
  isPasswordMismatch = false;
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;
  isFirstNameInvalid = false;
  isSecondNameInvalid = false;
  isPasswordLength = false;

  ngOnInit(): void {}

  togglePasswordVisibility(field: string): void {
    if (field === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
    } else if (field === 'confirmPassword') {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    }
  }

  onSubmit() {
    this.isFirstNameInvalid = !/^[a-zA-Z ]+$/.test(
      this.signUp.get('firstName')?.value
    );
    this.isSecondNameInvalid = !/^[a-zA-Z ]+$/.test(
      this.signUp.get('secondName')?.value
    );

    this.isEmailInvalid = this.signUp.get('email')?.invalid;
    this.isFirstName = this.signUp.get('firstName')?.value === '';
    this.isSecondName = this.signUp.get('secondName')?.value === '';
    this.isEmail = this.signUp.get('email')?.value === '';
    this.isPassword = this.signUp.get('password')?.value === '';
    this.isConfirmPassword = this.signUp.get('confirmPassword')?.value === '';


    const passwordLength = this.signUp.get('password')?.value.length >= 4 ;
    this.isPasswordLength = !passwordLength ;

    // TO COMPARE THE PASSWORD
    const passwordMatch =
      this.signUp.get('password')?.value ===
      this.signUp.get('confirmPassword')?.value;
    this.isPasswordMismatch = !passwordMatch;
    if (
      this.isFirstNameInvalid ||
      this.isSecondNameInvalid ||
      this.isFirstName ||
      this.isSecondName ||
      this.isEmail ||
      this.isPassword ||
      this.isConfirmPassword ||
      this.isPasswordMismatch ||
      this.isEmailInvalid ||
      this.isPasswordLength

    ) {
    } else {
      // Save user data to local storage
      const user = {
        firstName: this.signUp.get('firstName')?.value,
        secondName: this.signUp.get('secondName')?.value,
        email: this.signUp.get('email')?.value,
        password: this.signUp.get('password')?.value,
        profile:this.signUp.get('profile')?.value,
       // Note: You should hash the password before saving it
      };

      const profileImageControl = this.signUp.get('profile');
    if (profileImageControl && profileImageControl.value) {
      const imageUrl = profileImageControl.value; // Assuming the value is the image URL
      this.userService.updateProfileUrl(imageUrl);
      this.userService.updateDefaultUserImageUrl(imageUrl); // Update defaultUserImageUrl
    } else {
      // If no image is uploaded, save the default image URL
      this.userService.updateProfileUrl(this.userService.defaultUserImageUrl);
    }

      this.userService.saveUser(user);

      this.router.navigate(['/app-retail']);
    }
  }


}
