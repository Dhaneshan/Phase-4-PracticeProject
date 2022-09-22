//IIFE and Closure
const empId = (function() {
    let count = 0;
    return function() 
    {
      ++count;
      return `emp${count}`;
    };
  }
  )
  ();
  
  console.log("New Emplyee IDs are listed here");
  console.log("Dhaneshan: "+empId()); 
  console.log("William: "+empId()); 
  console.log("Annie: "+empId());
   
 
  //Callbacks
  console.log("\n"); //to start the output from the neext line
  function fullName(firstName, lastName, calback){
    console.log("My name is " + firstName + " " + lastName);
    calback(lastName);
  }
  
  var greeting = function(ln)
  {
    console.log('Welcome ' + ln);
  };
  
  fullName("Dhaneshan", "Wilson", greeting);
  console.log("\n");
  fullName("William", "Johnson", greeting);
  console.log("\n");
  fullName("Annie", "Butler", greeting);