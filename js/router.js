define([
    'jquery',
    'underscore',
    'backbone',
    'views/todo'
], function($, _, Backbone, TodoView){
    var AppRouter = Backbone.Router.extend({
        routes:{
            //view URL
            '/views': 'showTodoList',

            //default rout URL
            '*actions': 'defaultActions'
        }
    });

    var initialize = function(){
        var app_router = new AppRouter();
        app_router.on('showTodoList', function(){
            var todoView = new TodoView();

            $('form').on('submit', function(e){
                e.preventDefault();

                var item = $('#todo-input').val();
                if(item.length){
                    todoView.render(item);
                }
                else{
                    $('#message').append("Your input field is empty. fill the field for new items!");
                }
            });
        });

        app_router.on('defaultActions', function(actions){
            console.log('No route:', actions);
        });

        Backbone.history.start();

        app_router.trigger('showTodoList');
    };

    return{
        initialize: initialize
    };
});
