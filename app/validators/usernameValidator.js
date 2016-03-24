System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        var usernames = ['csalinas', 'mabrante', 'ksalinas', 'sbruni'];
                        setTimeout(function () {
                            if (usernames.indexOf(control.value) !== -1) {
                                resolve({ shoulbeUnique: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                };
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannontContainSpace: true };
                    return null;
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidator.js.map