import {Control} from 'angular2/common'

export class UsernameValidators{

  static shouldBeUnique(control: Control){
    return new Promise((resolve, reject) => {
      var usernames = ['csalinas', 'mabrante', 'ksalinas', 'sbruni'];

      setTimeout(function(){
        if (usernames.indexOf(control.value) !== -1) {
          resolve({ shoulbeUnique: true });
        } else{
          resolve(null);
        }

      }, 1000)

    });
  }

  static cannotContainSpace(control: Control){
    if(control.value.indexOf(' ') >= 0)
      return { cannontContainSpace: true}

    return null;
  }
}