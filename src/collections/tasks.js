// General
var Backbone = require('backbone');

// App
var App = require('../app');
var Task = require('../models/Task');


// Collection: User
var TaskCollection = Backbone.Collection.extend({
  url: App.Settings.apiRoot + '/api/task',
  model: Task
});

App.Collections.task = new TaskCollection;

module.exports = App.Collections.task;