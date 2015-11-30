var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  Model: Homeowners
*****************************************/

App.Models.Homeowners = Backbone.Model.extend({
  url: function() {
    var base = App.Settings.apiRoot + '/user/homeowners';
    if (this.isNew()) return base;
    return base + '/' + this.id
  }
});

module.exports = App.Models.Homeowners;