import {Component} from 'angular2/core'
//import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'


@Component({
  selector: 'app',
  template: `
    <likes [like]="post.liked" [count]="post.count" ></likes>`,
  directives: [LikeComponent]
})

export class AppComponent {

  post = {
    liked: false,
    count: 10
  }


}