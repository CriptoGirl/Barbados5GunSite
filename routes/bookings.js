//const fs = require('fs'); //NS photos
//const path = require('path'); //NS photos
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('Bookings page');
  res.render('bookings', { title: 'Bookings page' });
});

module.exports = router;
