// General
var $ = require('jquery');
var Backbone = require('backbone');
var newTaskTemplate = require('../templates/new-task.hbs');

// App
var App = require('../app');

// View
var AddTask = Backbone.View.extend({
  el: 'section',


  events: {
  	'submit .new-task': 'createTask',
  },

  render: function () {
  	this.$el.html(newTaskTemplate)
  },

  createTask: function() {

    var taskData = {
      property_id: '1',
      name: $('form.new-task input[name="name"]').val(),
      task_status_id: 1,
    }

    $.post('/api/task', taskData).done(function (data) {
      window.location = '/app/#/property/1/tasks';
    })
    return false
  },

})


module.exports = AddTask;