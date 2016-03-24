System.register(['angular2/core', './components/favorite/component/favorite.component', './components/likes/component/like.component', './components/voters/component/voter.component', './components/tweets/component/tweets.component', './components/zippy/component/zippy.component', './components/zippy/service/zippy.service', './components/contact/component/contact-form.component', './components/signup/component/signup-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, favorite_component_1, like_component_1, voter_component_1, tweets_component_1, zippy_component_1, zippy_service_1, contact_form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (zippy_service_1_1) {
                zippy_service_1 = zippy_service_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(zippyService) {
                    this.zippyContent = [];
                    this.activeView = "comps";
                    this.post = {
                        liked: false,
                        count: 10
                    };
                    this.voter = {
                        count: 10,
                        userVote: 0
                    };
                    this.zippyContent = zippyService.getContent();
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log('event', $event);
                };
                AppComponent.prototype.changeView = function (view) {
                    this.activeView = view;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.template.html',
                        directives: [favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweets_component_1.TweetsComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormCompoment, signup_form_component_1.SignUpFormComponent],
                        providers: [zippy_service_1.ZippyService]
                    }), 
                    __metadata('design:paramtypes', [zippy_service_1.ZippyService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map