import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    if(this.registerForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }


  }

  private initForm(){
    this.registerForm= new FormGroup({
      'userName':new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      'emailAddress':new FormControl('',[Validators.required,Validators.email]),
      'createPassword':new FormControl('',Validators.required),
      'confirmPassword':new FormControl('',Validators.required)




    })
  }

}
