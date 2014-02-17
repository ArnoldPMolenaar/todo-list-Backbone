define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var TodoModel = Backbone.Model.extend({
        defaults:{
            item: ""
        }
    });

    return TodoModel;
});
