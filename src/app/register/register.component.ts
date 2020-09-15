import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import {MustMatch} from '../must-match-vaidate';
import {LogRegisterService} from'../log-register.service'
import {User} from '../user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted=false;
  success = false;
  clicked=false;
  users:User[];
  u:User;
  public isCollapsed = true;
  title:string;
registerForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private registerService:LogRegisterService) { }

  ngOnInit(): void {
    this.submitted=false
  //  this.registerForm= new FormGroup({
  //     email:new FormControl(null, [Validators.required,Validators.email]),
  //     password:new FormControl(null,[Validators.required])
  //   })
    this.registerForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
  },{
    validators:MustMatch('password','confirmPassword')
  })

}
submit():void{
  this.submitted=true;
 if(!this.registerForm.invalid){ this.success=true}else{
  this.success=false

 }

console.log(this.registerForm.invalid)
this.u={
  email:this.registerForm.controls.email.value,
  password:this.registerForm.controls.password.value,
};
console.log("this user"+this.u+"this user");

// this.registerService.register(this.u).subscribe(
// );


}
iollapsed():void{
if(!this.clicked){
  this.isCollapsed=!this.isCollapsed;}
  this.title="teacher"
  this.clicked=true;
}
iollapsed2():void{
  if(!this.clicked){
  this.isCollapsed=!this.isCollapsed;}
  this.title="Student"
  this.clicked=true;
}
iollapsed3():void{
  if(!this.clicked){
  this.isCollapsed=!this.isCollapsed;}
  this.title="Adminstrator"
  this.clicked=true;
}}
