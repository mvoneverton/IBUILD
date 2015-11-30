var Backbone = require('backbone');
var $ = require('jquery')
var tmpl = require('./templates')

var App = require('./app');
var taskCollection = require('./collections/tasks');
// var userCollection = require('./collections/users');
var homeownersCollection = require('./collections/homeowners');

var ListTasksView = require('./views/list-tasks');
App.Views.ListTasks = new ListTasksView;

// var ListUsersView = require('./views/list-users');
// App.Views.ListUsers = new ListUsersView;

var ListHomeownersView = require('./views/list-homeowners');
App.Views.ListHomeowners = new ListHomeownersView;

var AddProjectView = require('./views/add-new-project');
App.Views.AddProject = new AddProjectView;

var AddTaskView = require('./views/add-new-task');
App.Views.AddTask = new AddTaskView;

var AppRouter = Backbone.Router.extend({

	routes: {
		'(/)': 'home',
		'login(/)': 'login',
		'projects(/)': 'projects',
		'name/:id(/)': 'name',
		'new-project(/)': 'newProject',
		'new-task(/)': 'newTask'
	},

	home: function () {

	},

	login: function () {
		window.location.href = '/application.html';
	},

	projects: function () {
		// App.Views.ListTasks.render();
		App.Views.ListHomeowners.render();
	},

	name: function (id) {
		App.Views.ListTasks.render();
	},

	newProject: function () {
		App.Views.AddProject.render();
	},

	newTask: function () {
		App.Views.AddTask.render();
	},

});

App.router = new AppRouter;

Backbone.history.start();

