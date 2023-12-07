import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: ['mark', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(9)]]
    }, { validators: this.passwordMatchingValidators });
  }

  passwordMatchingValidators(fg: FormGroup): { [key: string]: boolean } | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : { notmatched: true };
  }

  onSubmit() {
    console.log(this.registrationForm.value);

    this.userService.addUser(this.registrationForm.value);
    this.registrationForm.reset();
  }
}
