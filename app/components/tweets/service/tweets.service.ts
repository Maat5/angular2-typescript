export class TweetsService{

  getTweets(){
    return [
      {
        tweet: 'Tweet #1',
        username: 'mabrante',
        profileName: 'Manuel Abrante',
        likesCount: 0,
        liked: false
      },
      {
        tweet: 'Tweet #3',
        username: 'csalinas',
        profileName: 'Cindy Salinas',
        likesCount: 1,
        liked: false
      },
      {
        tweet: 'Tweet #3',
        username: 'ksalinas',
        profileName: 'Keily Salinas',
        likesCount:1,
        liked: true
      },
      {
        tweet: 'Tweet #4',
        username: 'sbruni',
        profileName: 'Sergio Bruni',
        likesCount: 1,
        liked: true
      }
      ];
  }

}