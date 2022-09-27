import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginAndSignupService } from '../login-and-signup.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

tempUser:any;
  LoginForm=this.fb.group({
    userName:['', Validators.required],
    password:['', Validators.required]
  })
  token:any;
  constructor(private fb: FormBuilder, private service:LoginAndSignupService, private router:Router) { }

  ngOnInit(): void {
  }
login(){
  
  this.tempUser = this.LoginForm.value;
    if(this.tempUser.userName=="" || this.tempUser.password==""){
      alert("USERNAME AND PASSWORD CANNOT BE EMPTY");
      return;
    }
    else{
      this.service.login(this.tempUser).subscribe

      ((data:any) => {
        console.log(data);
        this.token=data.tokens;
        localStorage.setItem('token', data.tokens);
        let jwtData = data.tokens.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);

        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        if(decodedJwtData.role=="Admin"){

          this.router.navigate(['/admin']);

        }

        else{

          this.router.navigate(['/storefront']);

        }
 
      },(error: HttpErrorResponse) => {
        if(error){
     
          alert("Invalid User Credentials.");
          this.LoginForm.reset();
          return;
        }
             this.LoginForm.reset();
      } )

    }
   
    }
}

