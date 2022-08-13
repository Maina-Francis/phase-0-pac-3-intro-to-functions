// Follow along with the examples here
function doNothing() {}

function sayHello() {
  console.log("Hello!");
}
sayHello();

// function to say hello to Isabel
function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

// function to say hello to Sofia
function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}

// function to say hello to Brendan
function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

// Arguments and Parameters
function doSomething(thing) {
  console.log(thing);
}
doSomething("anything");

// We can easily extend this to our "say hello to" example; by using an argument, we no longer need a separate function for each person we want to say hello to:
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Francis");
sayHelloTo("Faith");
sayHelloTo("Moringa");

//Say something new
function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");
say("Julio", "hello");

//Return values in JS
function add(x, y) {
  return x + y;
}
// console.log(add(1, 2));
const sum = add(5, 10);
const message = `The sum of your numbers is: ${sum}.`;
console.log(message);

// One last point about return
function hawayu(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("This is a test sentense.");
}

console.log(hawayu("Howdy", "partner"));

//Note, the console.log inside the function won't run. This is because return ends the execution inside a function. Nothing after the line with the return will be executed.
