System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
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
                            likesCount: 1,
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
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map