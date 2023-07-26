const events = require("events");

const eventEmitter = new events.EventEmitter();

const eventHandler = (channel_name) => {
  console.log("User Subscribed! ");
  console.log(`Thanks for subscribing ${channel_name} `);
};

eventEmitter.on("subscribe", eventHandler);

eventEmitter.emit("subscribe", "College Wallah");