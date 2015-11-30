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

// List all tasks
router.get('/', function(req, res) {
  //debug('GET' + req.path)

  db.selectFile('default_task.sql', function(error, rows, fields) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

    rows.forEach(function (row) {
      db.insert('task', row, function () {

      })
    })

    res.json(rows.map(changeCase))
  })
})

// Create a task
router.post('/', function(req, res) {
  //debug('POST' +  req.path + ',' + req.body)
  var values = snakeProps(req.body)

  db.insert('task', values, function(error, id) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

    // Make a URL string
    var uri = req.originalUrl + '/' + id;

    // Redirect
    res.location(uri).status(201).send(uri)

  })

})

module.exports = router
