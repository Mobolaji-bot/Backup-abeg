import {EventEmitter} from "events";
const events = new EventEmitter();
events.on("myEvent", () => {
    console.log("myEvent was emitted")
});
events.emit("myEvent")

events.on("greet", (name) =>{
    console.log(`hey ${name}, whats up?`)
});

events.once("oneTime", () =>{
    console.log("oneTime was emitted")
})
events.emit("myEvent");
events.emit("greet", "balls")
events.emit("oneTime");
events.emit("oneTime");
event.on