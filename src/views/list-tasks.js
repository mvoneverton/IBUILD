// General 
var $ = require('jquery');
var Backbone = require('backbone');
var listProductsTemplate = require('../templates/list-tasks.hbs');

// App
var App = require('../app');

// View
var ListTasks = Backbone.View.extend({
  el: '.task-list',

  collection: App.Collections.task,

  render: function () {
    var _this = this;
    var taskCollection = this.collection;

    //Fetch Collection from Server
    taskCollection.fetch().done(function (tasks) {
      _this.$el.html(listProductsTemplate(tasks));
    });
  }
});

module.exports = ListTasks;