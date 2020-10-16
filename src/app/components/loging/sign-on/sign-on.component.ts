import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css']
})
export class SignOnComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  signfrom = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_\.]+@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$')]],
    password: ['', [Validators.required, Validators.pattern('.{8,}$')]],
    agree: [true],
  })

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signfrom.value);
    
  }
}
