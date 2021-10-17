const express = require('express');
const router = express.Router();
const todoLists = require('../services/simple_rest_api');

/* GET all todoLists */
router.get('/', async function(req, res, next) {
  try {
    res.json(await todoLists.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting TODO Lists `, err.message);
    next(err);
  }
});

module.exports = router;