import { EventEmitter } from 'events';

// Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

// Create an EventEmitter object:
var eventEmitter = new EventEmitter();

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');
