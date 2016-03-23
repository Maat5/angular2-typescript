import {Component} from 'angular2/core'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {TweetsComponent} from './tweets.component'
import {ZippyComponent} from './zippy.component'
import {ZippyService} from './zippy.service'
import {ContactFormCompoment} from './contact-form.component'
import {SignUpFormComponent} from './signup-form.component'

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html',
  directives: [FavoriteComponent, LikeComponent, VoterComponent, TweetsComponent, ZippyComponent, ContactFormCompoment, SignUpFormComponent],
  providers: [ZippyService]
})

export class AppComponent {
  zippyContent = [];

  activeView = "comps"

  post = {
    liked: false,
    count: 10
  };

  voter = {
    count: 10,
    userVote: 0
  };

  onVote($event){
    console.log('event', $event);
  }

  constructor(zippyService: ZippyService){
    this.zippyContent = zippyService.getContent();
  }

  changeView(view){
    this.activeView = view;
  }

}