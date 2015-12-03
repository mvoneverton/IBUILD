// General 
var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Handlebars = require('hbsfy/runtime');

Handlebars.registerHelper('checkStatus', function (checkId, options) {
  if (checkId === this.task_status_id) {
    return options.fn(this);
  }
});

var listTasksTemplate = require('../templates/list-tasks.hbs');
var addNoteTemplate = require('../templates/add-note.hbs');



// App
var App = require('../app');

// View
var ListTasks = Backbone.View.extend({
  el: '.task-list',

  collection: App.Collections.task,

  events: {
    'change select': 'statusChange',
    'click .notes > textarea': 'addNote',
    'click .note-save': 'saveNote'
  },

  render: function (id) {
    var _this = this;
    var taskCollection = this.collection;

    //Fetch Collection from Server
    taskCollection.fetch().done(function (tasks) {
      var filteredList = _.filter(tasks, function (task) {
        return task.property_id == id;
      })
      _this.$el.html(listTasksTemplate(filteredList));
    }); 
  },

  statusChange: function (e) {
    var target = $(e.target);
    var status = target.val();
    var taskId = target.parents('.my-task').data('id');


    
    $.ajax({
      method: 'put',
      url: '/api/task/' + taskId,
      data: {
        task_status_id: status
      }
    })
  },

  addNote: function (e) {
    var target = $(e.target);
    var taskId = target.parents('.my-task').data('id');

    target.parents('tbody').find('.my-task').removeClass('expand');
    target.parents('.my-task[data-id='+ taskId +']').addClass('expand');
    return false
  },

  saveNote: function (e) {

    var target = $(e.target);
    var taskId = target.parents('.my-task').data('id');
    var note = target.parents('.my-task').find('textarea').val();

    target.parents('tbody').find('.my-task').removeClass('expand');

    $.ajax({
      method: 'put',
      url: '/api/task/' + taskId,
      data: {
        notes: note
      }
    })
  }


});

module.exports = ListTasks;