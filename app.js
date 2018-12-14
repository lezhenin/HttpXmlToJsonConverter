const express = require('express');
const bodyParser = require('body-parser');
const xmlParser = require('xml2json');
const logger = require('morgan');

/** Instance of http express server. */
const app = express();

/** Set logger for express server. */
app.use(logger('dev'));

/** Add middleware function for text body parsing. */
app.use(bodyParser.text({type: 'text/xml'}));

/** Set handler for post request. */
app.post('/', handler);

/** @function
 *  @name hanlder
 *
 *  Post handler for http server. Interpret body as
 *  string and try to convert xml to json. On success
 *  send json string with code 200.
 *
 *  @callback
 *
 *  @param req - request object
 *  @param res - response object
 *  @param next - next express middleware function
 */
function handler(req, res, next) {
    try {
        const jsonString = xmlParser.toJson(req.body);
        res.type('text/json');
        res.status(200).send(jsonString);
    } catch (e) {
        res.status(400).send(e.message)
    }
}


module.exports = app;
