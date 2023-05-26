import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data!:any;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.auth.getProfile().subscribe((res)=>{
      if(res.success){
        this.data = res.data;
      }
    });
  }

}
