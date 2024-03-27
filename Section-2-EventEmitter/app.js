const EventEmitter = require('./events');

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
    console.log("An event occurred 1");
})

myE.on("foo", () => {
    console.log("An event occurred 2");
})

myE.on("foo", (x) => {
    console.log("An event occurred with parameter");
    console.log(x);
})

myE.once("bar", () => {
    console.log("An event occurred only once");
})

// myE.emit("foo");
// myE.emit("foo", "some tex");

myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");