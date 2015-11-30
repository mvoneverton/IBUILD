'use strict';

var Handlebars = require('hbsfy/runtime');
var table = require('./templates/list-tasks.hbs');

var renderTable = function (tasks) {
	return table(tasks);
};

module.exports = {
	renderTable: renderTable
};