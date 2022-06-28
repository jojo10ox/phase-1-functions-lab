// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    return Math.abs(42 - pickUpLocation);
}
function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) * 264;
    //returns the number of feet traveled
  }
  function calculatesFarePrice(start, destination) {
   let distanceInFeet = distanceTravelledInFeet (start, destination);
   let fare;
   if (distanceInFeet < 400){
    fare = 0;
   }
   else if (400 <= distanceInFeet && distanceInFeet <= 2000 ){
    fare = (distanceInFeet - 400) * .02; 
   
   }
   else if (distanceInFeet > 2000 && distanceInFeet <2500){
    fare = 25;
   }
   else {
    fare = "cannot travel that far";
   }
 return fare;
  }