import { EventEmitter } from "node:events";

const sayHi = (name) => {
    console.log(`${name} logged in`);
};

const task = new EventEmitter();
task.once("greet", ()=>{
    console.log("System Started");
});



task.on("greet", sayHi);

task.on("greet", (name) => {
    console.log(`${name} starts working`);
});
task.on("greet",(name) => {
    console.log(`${name} stops working`);    
});

task.emit("greet", "Rahul Singh");
console.log();

task.off("greet", sayHi);//must have function name to execute off
task.emit("greet", "Manish Singh");
task.emit("greet", "Mukesh Singh");
console.log();


task.once("exit", (name) => {
    console.log('System shutdown by $(name)');
});
task.emit("exit", "Manager");
task.emit("exit", "Manish Singh");
console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners("greet");