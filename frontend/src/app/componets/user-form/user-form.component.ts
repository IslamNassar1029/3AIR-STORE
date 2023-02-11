import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  userId: number;
  constructor(
    private router: Router,
    private userService: UserService,
    public activatedRoute: ActivatedRoute
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
    console.log(this.userId);
  }
  errorinForm: boolean = false;
  get getFirstName() {
    return this.loginForm.controls['firstName'];
  }
  get getLastName() {
    return this.loginForm.controls['lastName'];
  }
  get getEmail() {
    return this.loginForm.controls['email'];
  }
  get getPassword() {
    return this.loginForm.controls['password'];
  }

  loginForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,15}$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,15}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  login(e: Event) {
    if (this.loginForm.status == 'VALID') {
      console.log(this.loginForm.value);
      if(this.userId){
        this.userService.editUser(this.userId,this.loginForm.value).subscribe((Response) => {
          console.log(Response);
        });
      }else{
        this.userService.addUser(this.loginForm.value).subscribe((Response) => {
          console.log(Response);
        });
      }
      this.router.navigate(['users/login']);

      this.errorinForm = false;
    } else {
      e.preventDefault();
      this.errorinForm = true;
    }
  }
}
