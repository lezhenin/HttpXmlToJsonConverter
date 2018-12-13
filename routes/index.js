const express = require('express');
const router = express.Router();

const parser = require('xml2json');

// const parseString = require('xml2js').parseString;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
    console.log(req.body);
    try {
        const jsonString = parser.toJson(req.body);
        console.log(jsonString);
        res.type('text/json')
        res.send(jsonString, 200);
    } catch (e) {
        console.log(e);
        res.send(e.message, 400)
    }

});

module.exports = router;
