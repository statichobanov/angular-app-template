import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EMAIL_VALIDATORS } from '@app/validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  emailControl!: FormControl;
  passwordControl!: FormControl;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: (this.emailControl = this.fb.control(null, [
        Validators.required,
        ...EMAIL_VALIDATORS
      ])),
      password: (this.passwordControl = this.fb.control(null, Validators.required))
    });
  }

  ngOnInit(): void {}

  submit(): void {}
}
