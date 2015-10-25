//created from from https://github.com/epeli/underscore.string/issues/285 & https://github.com/tlvince/angular-underscore-string

//Before the definition of the app's module, add 'lodash' as a model,
// providing the injectable '_' service, to which we'll mixin 'underscore.string' functions
'use strict';

(function() {
    angular.module('lodash.underscore.string', [])
        .factory('_', Lodash)
        .factory('lodashService', LodashService)
        .filter('s', S);

    function Lodash($window) {
        //Mixin underscore.string into lodash
        $window._.mixin($window._.string.exports());
        return $window._;
    }

    function LodashService($window) {
        //for karma
        if ($window.lodashService) {
            $window._thirdParty = $window._thirdParty || {};
            $window._thirdParty.lodashService = $window.lodashService;
            try {
                delete $window.lodashService;
            } catch (e) {
                $window.lodashService = undefined;
                /*<IE8 doesn't do delete of window vars*/
            }
        }
        return $window._thirdParty.lodashService;
    }

    function S() {
        /**
         * Underscore.string
         *
         * Proxy filter for calling Underscore.string functions.
         *
         * Examples:
         *
         *     {{ name | s: 'swapCase' }}
         *     {{ separator | s: 'join': ['foo', 'bar'] }}
         *
         * @param {String} s String to filter
         * @param {String} fn Underscore.string function to call
         * @param {[params]} params Extra parameters to pass to Underscore.string
         * @return {String} Filtered string
         */
        return function (str, fn, params) {
            str = str || '';
            params = params || [];
            if (typeof params === 'string')
                params = [params];
            params.unshift(str);
            var res = fn ? _.str[fn].apply(this, params) : str;
            return res;
        };
    }
})();