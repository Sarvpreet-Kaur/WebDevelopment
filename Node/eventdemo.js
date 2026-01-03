/*
an EventEmitter is a class 
(from the built-in event module)
that lets objects emit(trigger)
events and listen (subscribe) to events.
It's like a radio system:
A radio station emits signals (events).
Your radio listens(subscribes) to the station
*/ 

var events = require('events');
var eventEmitter =  new events.EventEmitter();

// Event Handlers
var playHandler = function(){
    console.log("Music started Playing....");
}
var pauseHandler = function(){
    console.log("Music Paused....");
}
var stopHandler = function(){
    console.log("Music stopped....");
}

//Assign handlers to events
eventEmitter.on('play',playHandler);
eventEmitter.on('pause',pauseHandler);
eventEmitter.on('stop',stopHandler);

eventEmitter.emit('play');
eventEmitter.emit('pause');
eventEmitter.emit('stop');
