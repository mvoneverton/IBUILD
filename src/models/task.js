// General
var Backbone = require('backbone');


// App
var App = require('../app');

// Model: Task
App.Models.Task = Backbone.Model.extend({
  url: function() {
    var base = App.Settings.apiRoot + '/default_task';
    if (this.isNew()) return base;
    return base + '/' + this.id
  }
});

module.exports = App.Models.Task;