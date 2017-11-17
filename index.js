// Write your code in this file!

function  shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
   console.log(string.toUpperCase())
}


function logWhisper(string) {
   console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toLowerCase()== string){
    return "I can\'t hear you!"
  }

  else if (string.toUpperCase()== string) {
    return "YES INDEED!"
      }
      else {
        return "I love you, too."
      }

}

function scuberGreetingForFeet(string){
  if ( string <=400){
    return "This one is on me!";
  } else if (string >=2000) {
    return "I will gladly take your thirty bucks."
  } else  if( string > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(string){
  if (NYC= string){
    return "Ok, sounds good.";
  }
  else if (NYC !== string) {
    return "No go."
  }
}

function switchOnCharmFromTip(string){
if (generous =  string){
  return "Thank you so much.";
} else if (generous !=+ string) {
  return "Thank you."
} else {
  return "Bye."
}
}
