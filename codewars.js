// multiples of 3 or 5  => sum all the multiples of 3 or 5 under a given number.  

function solution(number)
{
    if (number < 0)
    {
        return 0;
    }
    let num = 0;
    let total = 0;
    while (num<number){
        if (num%3==0 || num%5==0)
        {
            total += num;
        }
        num ++;
    }
    return total;
}
console.log(solution(10));




// Array.diff
// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
    for(let i=0; i<a.length; i++){
      if(b.includes(a[i])){
        a[i]=undefined;
      }
    }
    let newArr = [];
    for(let i=0; i<a.length; i++){
      if(a[i]!=undefined){
        newArr.push(a[i]);
      }
    }
    return newArr;
}
console.log(arrayDiff([1,2,2,2,3],[2]));

// not my answer of course:
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }