var mongoose = require('mongoose');
var Promise = require('bluebird');

exports.connect = function(){

    return new Promise(function(resolve, reject){

        mongoose.connect('mongodb://localhost/todo-db');

        mongoose.connection.on('error',function(err){

            console.log('db error: ', err);
            reject(err);
        });

        mongoose.connection.once('open', function(){
            console.log('Database error');
            resolve();
        });

    });



};