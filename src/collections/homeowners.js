var Backbone = require('backbone');


/****************************************
  App
*****************************************/

var App = require('../app');
var Homeowner = require('../models/Homeowner');

/****************************************
  Collection: Homeowners
*****************************************/

var HomeownerCollection = Backbone.Collection.extend({
  url: App.Settings.apiRoot + '/api/user/homeowners',
  model: Homeowner
});

App.Collections.homeowner = new HomeownerCollection;

module.exports = App.Collections.homeowner;