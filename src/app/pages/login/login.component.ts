import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  constructor(private fb:FormBuilder, private auth:AuthService) {
    this.loginForm = this.fb.group({
      'email' : ['', Validators.required],
      'password' : ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  login(){
    const data = this.loginForm.value;
    this.auth.login(data).subscribe(result=>{
      if(result.success){
        alert(result.message);
        localStorage.setItem("token", result.token);
      }else{
        alert(result.message);
      }
    },err=>{
      alert("Login Failed!");
    });

  }


}
