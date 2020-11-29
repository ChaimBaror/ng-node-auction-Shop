import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LogingService } from 'src/app/services/loging.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css']
})
export class SignOnComponent implements OnInit {

  constructor(private fb: FormBuilder,private loggingSer:LogingService, private apiService:ApiService) { }
  signfrom = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_\.]+@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$')]],
    password: ['', [Validators.required, Validators.pattern('.{4,}$')]],
    agree: [true],
  })

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signfrom.value);
    this.loggingSer.signUpUser(this.signfrom.controls.email.value, this.signfrom.controls.password.value)
  }
  signInGoogle(){
    console.log('signInGoogle');
    
  }
}
