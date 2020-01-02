const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('Home Info page');
  res.render('homeInfo', { title: 'Home Info page' });
});

module.exports = router;
