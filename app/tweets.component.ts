import {Component} from 'angular2/core'
import {TweetsService} from './tweets.service'
import {LikeComponent} from './like.component'


@Component({
  selector: 'tweets',
  templateUrl: 'app/tweets.template.html',
  inputs: [],
  providers: [TweetsService],
  directives: [LikeComponent]
})

export class TweetsComponent{
  tweets = [];

  constructor(tweetsService: TweetsService) {
    this.tweets = tweetsService.getTweets();
  }

}