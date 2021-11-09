//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Match Found" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

function findWords(inputStr, inputArr){
    let matchFound = false;
    for(let i=0; i < inputStr.split(" ").length; i++)
    {
        if (i in inputArr)
        {
            matchFound = true;
        }
    }
    if(matchFound==true){return "Match Found";}
    else{return "No Matches";}
};


console.log(findWords(dogString, dogNames));

// class exercise

function average(num1, num2)
{
    return (num1+num2)/2;
}

console.log(average(5, 14))

let sumSquares = (num1, num2) => (num1**2)+(num2**2)

console.log(sumSquares(4,5))




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];


let replaceEvenIndex = (inputArr) => 
{
    for(let i=0; i < inputArr.length; i+=2)
    {
        inputArr.splice(i, 1, "even index");
    }
    return inputArr;
}

console.log(replaceEvenIndex(givenArr));