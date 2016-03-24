System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ZippyService;
    return {
        setters:[],
        execute: function() {
            ZippyService = (function () {
                function ZippyService() {
                }
                ZippyService.prototype.getContent = function () {
                    return [
                        { content: 'lorem ipsum 1', title: 'First' },
                        { content: 'lorem ipsum 2', title: 'Second' },
                        { content: 'lorem ipsum 3', title: 'Third' }
                    ];
                };
                return ZippyService;
            }());
            exports_1("ZippyService", ZippyService);
        }
    }
});
//# sourceMappingURL=zippy.service.js.map