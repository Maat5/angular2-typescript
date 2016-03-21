import {Component} from 'angular2/core'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {TweetsComponent} from './tweets.component'


@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html',
  directives: [FavoriteComponent, LikeComponent, VoterComponent, TweetsComponent]
})

export class AppComponent {

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

}