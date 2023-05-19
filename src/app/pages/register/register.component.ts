import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;
  message: string = '';
  isProgress: boolean = false;
  className = 'd-none'

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.signupForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  signup() {
    this.isProgress = true;
    // alert('Acccount Created');
    const data = this.signupForm.value;
    delete data['confirm']
    this.auth.register(data).subscribe(res => {
      if (res.success) {
        this.isProgress = false;
        this.message = "Account has been created!!"
        this.className = "alert alert-success"
      }else{
        this.isProgress = false;
        this.message = res.message
        this.className = "alert alert-danger"
      }
      // this.signupForm.reset();
    }, err => {
      console.log(err);
      this.isProgress = false;
      this.message = "Server Error!!!"
      this.className = "alert alert-danger"

    });

  }

}
