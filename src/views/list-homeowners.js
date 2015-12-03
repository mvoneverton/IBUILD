// General 
var $ = require('jquery');
var Backbone = require('backbone');
var listHomeownersTemplate = require('../templates/list-homeowners.hbs');


// App
var App = require('../app');

// View
var ListHomeowners = Backbone.View.extend({
  el: '.property-list',

  collection: App.Collections.homeowner,


  render: function () {
    var _this = this;
    var HomeownersCollection = this.collection;

    //Fetch Collection from Server
    HomeownersCollection.fetch().done(function (homeowners) {
      _this.$el.html(listHomeownersTemplate(homeowners));
    }); 
  },

});

module.exports = ListHomeowners;