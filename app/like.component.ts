import {Component, EventEmitter} from 'angular2/core'

@Component({
  selector: 'likes',
  templateUrl: 'app/like.template.html',
  styles: [
     `
     .glyphicon {
       color: #ccc;
       cursor: pointer
     }
     .liked {
        color: deeppink
     }`

  ],
  inputs: ['isLiked: like', 'likesCount: count']
})

export class LikeComponent {

  isLiked = false;
  likesCount = 0;

  onClick(){
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
  }

}