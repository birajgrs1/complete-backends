/*
-> Javascript is a single threaded, non blocking, achronous concurrent language.
-> It has a call stack, an event loop  and a callback queue + other APIs
-> V8 in the javascript runtime which has a call stack and a heap 
-> The heap is used for memory allocation and the stack holds the execution 
context.
-> DOM, setTimeOut, XML HttpRequest don't exist in V8 source code.


The event loop is an important concept in JavaScript that enables 
asynchronous programming by handling tasks efficiently.

Call Stack: JavaScript has a call stack where function execution is managed in a Last-In, First-Out (LIFO) order.
Web APIs (or Background Tasks): These include setTimeout, setInterval, fetch, DOM events, and other non-blocking operations.
Callback Queue (Task Queue): When an asynchronous operation is completed, its callback is pushed into the task queue.
Microtask Queue: Promises and other microtasks go into the microtask queue, which is processed before the task queue.
Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.

*/

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0); // setTimeout with 0 delay

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");
