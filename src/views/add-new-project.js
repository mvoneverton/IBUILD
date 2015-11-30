// General
var $ = require('jquery');
var Backbone = require('backbone');
var newProjectTemplate = require('../templates/new-project.hbs');

// App
var App = require('../app');

// View
var AddProject = Backbone.View.extend({
  el: 'section',

  events: {
  	'submit .new-project': 'createProject'
  },

  render: function () {
  	this.$el.html(newProjectTemplate)
  },

  createProject: function() {
  	console.log('submit')
  	App.router.navigate('');
  	return false
  }
})


module.exports = AddProject;