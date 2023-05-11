const express = require('express')
const router = express.Router()
const tickerController = require('../controllers/ticker.controller')
router.route('/').get(tickerController.getTickers)
router.route('/').post(tickerController.createTicker)

router.route('/:id')
    .get(tickerController.getTicker)
    .put(tickerController.updateTicker)
    .delete(tickerController.deleteTicker)

module.exports = router