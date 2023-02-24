function scuberGreetingForFeet(length){
  // Write your code here!
   if (length <= 400) {
    return "This one is on me!";
   }
   if (length <= 2000) {
    return "That will be twenty bucks."
   }
   if (length <= 2499) {
    return "I will gladly take your thirty bucks."
   }
   if (length >= 2500) {
    return "No can do."
   }
}
console.log(scuberGreetingForFeet());

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
console.log(switchOnCharmFromTip());