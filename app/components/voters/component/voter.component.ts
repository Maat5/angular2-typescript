import {Component, EventEmitter} from 'angular2/core'

@Component({
  selector: 'voter',
  templateUrl: 'app/components/voters/template/voter.template.html',
  styles: [`

    .voter{
      width: 20px;
    }

    .arrows{
      cursor: pointer;
    }

    .hightlight {
      color: yellow;
    }

  `],
  inputs: ['totalPoints', 'userVote'],
  outputs: []
})

export class VoterComponent{
  totalPoints = 0;
  upVote = false;
  downVote = false;
  userVote = 0;

  vote = new EventEmitter();

  doUpVote() {
    this.upVote = true;
    this.downVote = false

    if(this.userVote == 1)
      return

    this.userVote++;
    this.vote.emit({ userVote: this.userVote });
  }

  doDownVote(){
    this.downVote = true;
    this.upVote = false;


    if (this.userVote == -1)
      return

    this.userVote--;
    this.vote.emit({ userVote: this.userVote });

  }

}