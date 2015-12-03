var Backbone = require('backbone');
var $ = require('jquery')
var tmpl = require('./templates')

var App = require('./app');
var taskCollection = require('./collections/tasks');
var homeownersCollection = require('./collections/homeowners');

var ListTasksView = require('./views/list-tasks');
App.Views.ListTasks = new ListTasksView;

var ListHomeownersView = require('./views/list-homeowners');
App.Views.ListHomeowners = new ListHomeownersView;

var AddPropertyView = require('./views/add-new-property');
App.Views.AddProperty = new AddPropertyView;

var AddTaskView = require('./views/add-new-task');
App.Views.AddTask = new AddTaskView;

var AppRouter = Backbone.Router.extend({

	routes: {
		'(/)': 'properties',
		'login(/)': 'login',
		'properties(/)': 'properties',
		'property/:id/tasks': 'propertyTasks',
		'new-property(/)': 'newProperty',
		'new-task(/)': 'newTask',
	},

	home: function () {

	},

	login: function () {
		window.location.href = '/app/';
	},

	properties: function () {
		App.Views.ListHomeowners.render();
	},

	propertyTasks: function (id) {
		App.Views.ListTasks.render(id);
	},

	newProperty: function () {
		App.Views.AddProperty.render();
	},

	newTask: function () {
		App.Views.AddTask.render();
	}

});

App.router = new AppRouter;

Backbone.history.start();

