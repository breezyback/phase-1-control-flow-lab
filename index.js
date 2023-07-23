function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400)
    return 'This one is on me!';
  
  if (ride > 400 && ride <= 2000)
    return 'That will be twenty bucks.';
  
  if (ride > 2000 && ride <= 2500)
    return 'I will gladly take your thirty bucks.';

  return 'No can do.';
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipState){
  // Write your code here!
  if (tipState === 'generous')
    return 'Thank you so much.'

  if (tipState === 'not as generous')
    return 'Thank you.'

  return 'Bye.';
}