const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('Photos page');
  res.render('photos', { title: 'Photos page' });
});

module.exports = router;
