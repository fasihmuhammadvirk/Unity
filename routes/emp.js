// Imports
const express = require('express')
var router = express()


const controller = require('../controller/emp')
const bodyparser = require('body-parser');

/// Create API
router.use(bodyparser.json())
router.post('/create',controller.create)

/// Read API
router.get('/',controller.view)

/// Update API
router.patch('/:id',controller.update)

/// Delete API
router.delete('/delete/:id',controller.remove)

module.exports = router