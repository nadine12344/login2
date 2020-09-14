import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { LogRegisterService } from '../log-register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  success=false;
  users:User[];
  user:User={email:"",
password:''};

  errorMessage:String;
loginForm:FormGroup;
  constructor(private aurhService:LogRegisterService, private router:Router ) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(null, [Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required])
    })
 
      this.aurhService.getUsers().subscribe({
        next: users => {
          this.users = users;
          console.log(this.users);
       
        },
        error: err => this.errorMessage = err

      
      });
      
    }
    
  
  onSubmit(){
    console.log(this.user.email)
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }else{
  
    
    const x=this.users.find(y=>y.email==this.user.email)
      if(x==undefined){
        console.log(":--(")
      }
      else{
        this.success=true;
      }
      
    }
  
  }

}
