function scuberGreetingForFeet(string){
  if (string <=400){
    return "This one is on me!";
  }
  else if (string>=2000 && string<=2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}


function ternaryCheckCity(string){
  if(string=NYC){
    return  "Ok, sounds good.";
  }
  else if(NYC != string){
    return "No go.";
  }
}
