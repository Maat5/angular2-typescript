import {Component} from 'angular2/core'
import {TweetsService} from '../service/tweets.service'
import {LikeComponent} from '../../likes/component/like.component'


@Component({
  selector: 'tweets',
  templateUrl: 'app/components/tweets/template/tweets.template.html',
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