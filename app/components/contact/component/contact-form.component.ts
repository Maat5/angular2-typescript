import {Component} from 'angular2/core'

@Component({
  selector: 'contact-form',
  templateUrl: 'app/components/contact/template/contact-form.template.html'
})

export class ContactFormCompoment{

  onSubmit(f){
    console.log(f);
  }
}