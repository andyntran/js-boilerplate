define(function() {

    // Fixed problem with Backbone put query string in URL routing parameter
    (function(old) {
        Backbone.History.prototype.getFragment = function() {
            return old.apply(this, arguments).replace(/\?.*/, '');
        };
    })(Backbone.History.prototype.getFragment);

});
