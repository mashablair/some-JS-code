// Exercise for Chapter 10.  Liberating Functions. 
// Passing functions into functions. 
// Functions as a first class values. 

var passengers = [ { name: "Jane Doloop", paid: true },
  { name: "Dr. Evel", paid: true },
  { name: "Sue Property", paid: false },
  { name: "John Funcall", paid: true } ];
  
function noFlyList(passengers) {
   for (var i = 0; i<passengers.length; i++) {
      if (passengers[i].name == 'Dr. Evel') {
         return false;
      }
   }
   return true;
}

// main function to process passengers for any test: 

function processPassengers(passengers, testFunction) {
   for (var i = 0; i<passengers.length; i++) {
      if (testFunction(passengers[i])) {
         teturn false; // someone didn't pass the test!
      }
   }
   return true; // plane can fly
}

// function that takes a passenger as an argument and checks to see if that passenger's name is on the noFly list: 

function noFlyCheck(passenger) {
   if (passenger.name == 'Dr. Evel') {
      return true;
   }
   return false; 
}

function noPaid(passenger) {
   if (passenger.paid == false) {
      return true;
   }
   return false;
}

var allCanFly = processPassengers(passengers, noFlyCheck);
if (!allCanFly) {
   console.log("We canot fly! We have a no-fly passenger!");
}
