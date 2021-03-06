import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        password: ['', [Validators.required]],
        cpassword: ['', [Validators.required]]
      }
    )
  }

  register(){
    const user: User = {
      firstName: this.registerForm.get('firstname')?.value,
      lastName: this.registerForm.get('lastname')?.value,
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      phoneNumber: this.registerForm.get('phone')?.value,
      password: this.registerForm.get('password')?.value
    }

    this.authService.register(user).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      err => {
        console.log(err);
      }
    )
  }

}
