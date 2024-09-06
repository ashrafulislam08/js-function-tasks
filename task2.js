/*
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function takeNumber(number){
  if(number%2===1){
    console.log(number*2)
  }else {
    console.log(number/2)
  }
}

takeNumber(50)

