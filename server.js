/**
 * Created by zanmarolt on 4/14/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var server = express();
var PORT = 3000;

exports.server = server;

exports.init = function(){

    return new Promise(function(resolve, reject){

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended:true}));

        server.listen(PORT, function(){
            console.log('Server listening on port: '+PORT);
            resolve(server);
        });

    });



};