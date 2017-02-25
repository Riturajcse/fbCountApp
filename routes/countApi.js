var express = require('express');
var router = express.Router();

var Count = require('../models/Count.js');

/* GET /userCount listing. */
router.get('/', function(req, res, next) {
  Count.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /userCount */
router.post('/', function(req, res, next) {
  Count.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /userCount/id */
router.get('/:id', function(req, res, next) {
  Count.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /userCount/:id */
router.put('/:id', function(req, res, next) {
  Count.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /userCount/:id */
router.delete('/:id', function(req, res, next) {
  Count.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
