import {Component} from 'angular2/core'
import {FavoriteComponent} from './components/favorite/component/favorite.component'
import {LikeComponent} from './components/likes/component/like.component'
import {VoterComponent} from './components/voters/component/voter.component'
import {TweetsComponent} from './components/tweets/component/tweets.component'
import {ZippyComponent} from './components/zippy/component/zippy.component'
import {ZippyService} from './components/zippy/service/zippy.service'
import {ContactFormCompoment} from './components/contact/component/contact-form.component'
import {SignUpFormComponent} from './components/signup/component/signup-form.component'

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