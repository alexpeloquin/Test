//Exercise 1 passing parameters to a function
//create a global variable with your name
//create a hello function to display "hello" + global var
//perform function onload to render name
//hint: you will need the window onload and an init function

var name = "Alex";
var name2 = "30";

function scope1() {
    var last = "Peloquin"
    console.log(name,last);
    //last variable's scope is only within scope1 function
}

function scope2(){
    console.log(name,last);//function does not know variable "last" becuase it was defined within scope1 function

}

function hello(param1,param2) {
    console.log("Hello " + param1);
    console.log("Hello " + param2);
}

//Exercise 2 
/*Create a function called simpleNumbers
receive as a parameter how many numbers you want to print
printthat many numbers on the console
*/

//for the variable, variable equals 0. is it less than param1? yes, console.log it and add 1. then do it again
function simpleNumbers(param1){
    for(var i=0; i<param1; i++){
        console.log(i);
    }
}

//print the first 10 even numbers
//with the max variable, the computer will evaluate numbers untill it returns param1 quantity
function evenNumbers(param1){
    var counter = 0;
    // var max = 10000000;
    // for(var i=0; i<max; i++){
    //     if(i%2==0){

    //         console.log(i);
    //         counter+=1;

    //         if(counter == param1){
    //             //used to stop the counter
    //             i-max; // way to stop the loop
    //             break; //closes the for loop
    //         }
            
    //     }
    // }

// while(stop condition)
var i=0;
while(counter<param1) {
    if (i%2==0) {
        console.log(i);
        counter+=1;
    }
    i++;
}
}

//Exercise 3 sum all the numbers within the array
var allNumber = [3,2,4,5,6,2,12,56,2,1,5,7,8,2,78,4,12,33,2,23];
function sumArray(){
    var total = 0;
    for(var i=0; i<allNumber.length; i++){
        // total = total+allNumber[i]
        total +=allNumber[i];
        }
        console.log("Result is " , total);
    }

function findTheBiggestNumber(){
    var biggest = 0;
    for(var i=0; i<allNumber.length; i++){
    if(allNumber[i]>biggest) {
        biggest = allNumber[i];
    }
    
    }
    console.log(biggest);
}

function init(){
    //scope1(); //last only exists within scope 1
    //scope2(); //function does not work because scope2 has no definition for "last"
    //hello(name,name2);//define parameters by inserting variables into ()
    //simpleNumbers(7);
    //evenNumbers(3);
    //sumArray(); //expected result is to print on the console the sum of all the numbers in the array.
    findTheBiggestNumber(); //expected: print the biggest number in the array
}


window.onload = init;
