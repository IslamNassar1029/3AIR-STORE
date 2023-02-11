import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId:any
  user:any
  userApi:any
  constructor(private activatedRoute :ActivatedRoute ,private userService:UserService){
    this.userId=activatedRoute.snapshot.params['id']
    console.log(this.userId)
  }
  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((response)=>{
      this.userApi=response
      this.user=this.userApi[0]
      console.log(this.user);
      
      
    })
  }
  
}
