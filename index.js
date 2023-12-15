function saturdayFun(activity = "roller-skate"){ //roller-skate here is the default argument
    return `This Saturday, I want to ${activity}!`; 
}
console.log(saturdayFun("bathe my dog !")) //This is an example of overiding an default argument

function mondayWork(activity = "go to the office"){

    return `This Monday, I will ${activity}.`;

}
console.log(mondayWork("work from home"))


function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }