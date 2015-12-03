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

// Property tasks
router.post('/', function(req, res) {
  //debug('GET' + req.path)

  var values = req.body
  

	db.insert('property', values, function(error, propertyId) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

	  db.selectFile('default_task.sql', function(error, rows, fields) {
	    if (error) {
	      debug('DB Error', error)
	      return res.status(500).send({ error })
	    }

	    rows.forEach(function (row) {

	    	var insertData = {
	    		property_id: propertyId,
	    		task_status_id: 1,
	    		name: row.name
	    	}

	    	db.insert('task', insertData, function (error) {
					if (error) {
					  debug('DB Error', error)
					  return res.status(500).send({ error })
					}
	    	})

	    })

	    res.json({propertyId: propertyId});
	    
	  })
  })
  
})




module.exports = router
