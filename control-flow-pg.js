//====boolean expressions & logical operators====//

!(5==="5") && (6 > 5) && (1 >= 0)



//===============conditionals=================================================//

//not equals -> true && 6 is less than 5 && 1 is bigger or equals to 0 --> i would say this is true because the only one that would not have been true was the first one.. my only question is when will i use this. 

//write code that sets a placeholder variable and sets food as variable and vegetables as its value.
//set conditionals for boolean value based on if/else statements
//print value based on isTasty
let isTasty;

let food ="vegetables";

if(food === "pizza"){
    isTasty = true;
    //sets a boolean value to the empty placeholder
}else {
    isTasty = false;
}

console.log("is the food tasty?", isTasty);

let friend =  "stanley";

if (friend === "sabrina"){
    console.log("hello sabrina");
}else if (friend === "stanley"){
        console.log("what up stan")
}else if (friend === "brenda") {
    console.log("fala brenda") 
} else {
    console.log("who this? ")
}


// "if" true say this, "if else" or "if" is false say this, "else" say this last resort statement

//truthy and falsy
//an object of any kind will usually be truthy but it will be falsy if it's 0 or null.

if (0) {
    alert('ALERT')
}

//But it will never run bc its false


//====================LOOPS========================================================//

//fizzbuzz interview question

for(let fizzbuzz = 1; fizzbuzz < 100; fizzbuzz++){
    if (fizzbuzz % 3 === 0){
        console.log("fizz")
    }else if (fizzbuzz % 5 === 0){
        console.log("buzz")
    }else if(fizzbuzz % 3 && 5 === 0){
        console.log("fizzbuzz")
    } else {
        console.log(fizzbuzz)
    }
}


//while

let fizzbuzz = 1;
while (fizzbuzz < 100) {
    if (fizzbuzz % 15 === 0){
        console.log("fizzbuzz")
    }else if (fizzbuzz % 3 === 0){
        console.log("fizz")
    }else if(fizzbuzz % 5 === 0){
        console.log("buzz")
    } else {
        console.log(fizzbuzz)
    }
    fizzbuzz++
}

//why did it only work after i put it on top of everything

//===============[PROMISES]=========//



function myCallback(resolve, reject){
    console.log('pending...');
    if(valueToRetrieve) {
        resolve(valueToRetrieve)//function to run if the value is successfully retrieved
        
    }else {
        reject("valueToRetrieve is falsey");
    }
}

// var valueToRetrieve = "!!!"
// var myPromise = new Promise(myCallback);
console.log(myPromise)


function consumePromise(){
    myPromise
    .then(function(retrievedValue){
        console.log("fulfilled! retrievedValue is:", retrievedValue)
    }).catch(function(err){
        console.log("wah wah:( error:", err)
    })
}

var valueToRetrieve = "!!!"
var myPromise = new Promise(myCallback);
consumePromise();

//stopped right before chaining promises