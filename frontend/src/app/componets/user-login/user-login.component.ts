import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  userId: number;
  user: any;
  constructor(
    private router: Router,
    private userService: UserService,
    public activatedRoute: ActivatedRoute
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
    console.log(this.userId);
  }
  errorinForm: boolean = false;

  get getEmail() {
    return this.loginForm.controls['email'];
  }
  get getPassword() {
    return this.loginForm.controls['password'];
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  login(e: Event) {
    if (this.loginForm.status == 'VALID') {
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe((Response) => {
        console.log(Response);
        this.user = Response;
        if (this.user.role == 'admin') {
          this.router.navigate(['/productsDashboard']);
          this.errorinForm = false;
        }else{
          this.router.navigate(['/products']);
          this.errorinForm = false;
        }
      });
    } else {
      e.preventDefault();
      this.errorinForm = true;
    }

    this.router.navigate(['users/login']);
    this.errorinForm = false;
  }
}
