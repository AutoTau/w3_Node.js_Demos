/*
	w3schools event demo
	Demoing the ability to create and use an EventEmitter object.  We will
	use Node.js' built in "Events" module that allows us to create, fire, and listen
	to our own events.
*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler
var myEventHandler = function() {
	console.log('I heard a scream!');
}

//Asign the event handler to an event
eventEmitter.on('scream', myEventHandler);

//Fire the 'Scream event'
eventEmitter.emit('scream');