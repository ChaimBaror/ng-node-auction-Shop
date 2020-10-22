import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LogingService } from 'src/app/services/loging.service';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  constructor(private fb: FormBuilder,private loggingSer:LogingService) { }
  signfrom = this.fb.group({
    
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_\.]+@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$')]],
    phoneNumber: ['', [Validators.required, Validators.pattern('0[0-9\s.-]{5,13}')]],
    password: ['', [Validators.required, Validators.min(4)]],
    agree: [true],
    img : ['./assets/images/icon/avataricon.png']
  })
  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.signfrom.value);
    console.log(this.signfrom.controls.firstName.value);
    this.loggingSer.setUser({
      uid:0,
      firstName:this.signfrom.controls.firstName.value,
      lastName:this.signfrom.controls.lastName.value,
      email:this.signfrom.controls.email.value,
      password:this.signfrom.controls.password.value,
      phone:this.signfrom.controls.phoneNumber.value,
      agree:this.signfrom.controls.agree.value,
      img:this.signfrom.controls.img.value,
    })
     this.signfrom.reset()
  }
}
