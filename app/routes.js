const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route index page
router.get('/RAS', function (req, res) {
  //Example URL http://localhost:3000/RAS?title=Hello%20World
  console.log(req.query)
  //If req.query.title exisits set title to req.query.title else to an empty string
  var title = req.query.title ? req.query.title : ""
  res.render('RAS/index', {title})
})

// Add your routes here - above the module.exports line

module.exports = router
