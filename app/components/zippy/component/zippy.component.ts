import {Component} from 'angular2/core'

@Component({
  selector: 'zippy',
  templateUrl: 'app/components/zippy/template/zippy.template.html',
  inputs: ['title']

})

export class ZippyComponent{
  title = '';
  isOpen = false;

  toggle(){
    this.isOpen = !this.isOpen;
  }

}