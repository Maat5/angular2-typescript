import {Component, EventEmitter} from 'angular2/core'


@Component({
  selector: 'favorite',
  templateUrl: 'app/favorite.template.html', //load as external file
  styles:[`
    .glyphicon-star {
      color: orange
    }
  `],
  //stylesUrls:[], //load  multiple url styles
  inputs: ['isFavorite :is-favorite'], // this is like a scope value, but now we can set an alias to it
  outputs: ['change'] // this is like a scope function
})

export class FavoriteComponent {
  isFavorite = false;

  change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(
      {
        newValue: this.isFavorite
      });
  }
}