// Debugging
var bug = require('debug')
var debug = bug('rockit-express:api:user')

// Database
var db = require('../../lib/db')

// Router
var express = require('express')
var router = express.Router()

// Utility for changing case
var changeCase = require('../../lib/change-case')

// Duplicate
router.post('/', function(req, res) {
  //debug('GET' + req.path)
	db.insert('property', values, function(error, id) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

    // Make a URL string
    var uri = req.originalUrl + '/' + id;


	  db.selectFile('default_task.sql', function(error, rows, fields) {
	    if (error) {
	      debug('DB Error', error)
	      return res.status(500).send({ error })
	    }

	    rows.forEach(function (row) {

	    	db.insert('task', {property_id: id, task_status_id: 1, name: default_task.name}, function () {

	    	})
	    })
	    
	    // Redirect
    	res.location(uri).status(201).send(uri)

	  })
  })
  
})

module.exports = router
