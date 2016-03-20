import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'


@Component({
  selector: 'app',
  template: `
    <h1> First Angular 2 with typescript app </h1>
    <favorite></favorite>
    <courses></courses>
    <authors></authors>`,
  directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})

export class AppComponent {}