define([
    'underscore',
    'backbone',
    'models/todo'
], function(_, Backbone, TodoModel){
    var TodoCollection = Backbone.Collection.extend({
        model: TodoModel
    });

    return TodoCollection;
});
