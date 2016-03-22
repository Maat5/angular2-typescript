import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'
import {UsernameValidators} from './usernameValidator'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.template.html'
})

export class SignUpFormComponent {

  // another way to create a form
  // form = new ControlGroup({
  //   username: new Control('', Validators.required),
  //   password: new Control('', Validators.required)
  // })

  form: ControlGroup;

  constructor(fb:FormBuilder){
    this.form = fb.group({
      username: ['', Validators.compose([
        Validators.required,
        UsernameValidators.cannotContainSpace
        ]), UsernameValidators.shouldBeUnique],
      password: ['', Validators.required]
    })
  }

  signUp(){
    console.log(this.form.value);
  }
}