define([
    'jquery',
    'underscore',
    'backbone',
    'collections/todo',
    'text!templates/todo.html'
], function($, _, Backbone, TodoCollection, TodoTemplate){
    var TodoView = Backbone.View.extend({
        el: $('#content'),
        initialize: function(){
            this.collection = new TodoCollection();
            this.collection.add({ item: "Finish reading the syllabus" });
            this.collection.add({ item: "Clean my room" });
            this.collection.add({ item: "Buy a card" });

            var data = {
                action: this.collection.models
            };

            this.template = _.template(TodoTemplate, data);
            $(this.$el).html(this.template);

            return{
                render: this.collection
            }
        },
        render: function(data){
            this.collection.add({ item: data }, { at: this.collection.length });

            var newData = {
                action: this.collection.models
            };

            this.template = _.template(TodoTemplate, newData);
            $(this.$el).html(this.template);
        }
    });

    return TodoView;
});
