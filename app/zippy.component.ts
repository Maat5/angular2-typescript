import {Component, Input} from 'angular2/core'

@Component({
  selector: 'zippy',
  templateUrl: 'app/zippy.template.html',
  inputs: ['title']

})

export class ZippyComponent{
  title = '';
  isOpen = false;

  toggle(){
    this.isOpen = !this.isOpen;
  }

}