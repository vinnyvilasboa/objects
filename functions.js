const greeting = function(taco) {
    // anything inside of here will execute when called
    console.log("Good morning", taco);
}

let myName = "Josh"
let name2 = "Brian"
greeting(myName);
greeting(name2);


const multiply = function(num1, num2) {
    console.log("inside the fucntion");
    return num1 * num2
}

let firstNum = 2;
let secNum = 3;
let taco = multiply(firstNum, secNum);

console.log(firstNum + " multiplied by " + secNum + "is" + taco)


/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

// return masked string
function maskify(cc) {
    // var str = "#";
    var cc = "4556364607935616"
    var lastFour = cc.substr(cc.length - 4);

     }
  
  maskify()
  
  
  //split - count last 4 strings - after 4 strings return hash for each string then joins

  //===kata solutions what i was trying to get!//
function maskify(cc) {
      //split each digit into string
    var cc = "4556364607935616"
    cc = cc.split("");
    // loop through them except the last 4 ? 
    //i < cc.length - 4 
    for(var i = 0; i < cc.length - 4; i++){
        //the ones that were counted except with the iteration of the last 4 were to equal #
      cc[i] = "#";
  }
  //then join all of them
  cc = cc.join("");
  //and return it 
  console.log(cc)
  return cc
  
  }

  maskify();
