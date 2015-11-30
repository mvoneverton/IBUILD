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
    'change select': 'statusChange'
  },

  render: function () {
  	this.$el.html(newTaskTemplate)
  },

  createTask: function() {
  	console.log('submit')
  	return false
  },

  statusChange: function () {
    $(this).parent('.my-task').attr('id');
  },

})


module.exports = AddTask;