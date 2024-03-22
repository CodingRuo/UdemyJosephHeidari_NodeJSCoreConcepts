const EventEmitter = require('events');

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
    console.log("Event ocurred");
})

myE.emit("foo");