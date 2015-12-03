// General
var $ = require('jquery');
var Backbone = require('backbone');
var newPropertyTemplate = require('../templates/new-property.hbs');

// App
var App = require('../app');

// View
var AddProperty = Backbone.View.extend({
  el: 'section',

  events: {
  	'submit .new-property': 'createProperty'
  },

  render: function () {
  	this.$el.html(newPropertyTemplate)
  },

  createProperty: function() {
    var usrData = {
      first_name: $('form.new-property input[name="first_name"]').val(),
      last_name: $('form.new-property input[name="last_name"]').val(),
      is_contractor: 0,
      email: $('form.new-property input[name="email"]').val()
    }
    $.post('/api/user', usrData).done(function (data) {
      var userId = data.split('/').pop();

      var propData = {
        contractor_user_id: '4',
        user_id: userId,
        address: $('form.new-property input[name="address"]').val(),
        city: $('form.new-property input[name="city"]').val()
      }
        $.post('/api/property', propData).done(function (data) {
          window.location = '/app/'
        })
    })
  	return false
  }
})


module.exports = AddProperty;