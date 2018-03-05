/**
* Question 2
* Create an array of names with Will, Nevan, and Jessica as values. Append each of these names to the class-list element using forEach.
*/

//Step 1: Create an array of names with Will, Nevan, and Jessica as values.
var names = ["Will","Nevan","Jessica"]
//Step 2: Append each of these names to the class-list element using forEach.
names.forEach(function(e){
  $(".class-list").append("<li>"+e+"</li>");
})
/**
* Question 3
* Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q3.
*/
//Step 1 :  Using the array from Question 1
var num = [1,2,3,4]
var q3 = 0;
//Step 2 : find the average of the numbers in the array (average=sum of all numbers/number of numbers)
num.forEach(function(i){
  var x = num[0] + num[1] + num[2] + num[3];
  var y = x/num.length;
  console.log(y);
})
//Step 3 Store the average in q3.
var num = [1,2,3,4]
var sum = 0;
num.forEach(function(e){
  sum = sum + e;
})
var q3 = sum/num.length ;

console.log(q3);

//Morning Challenge: The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
var num = 600851475143,
    primeArray = [],
    isPrime;

//find divisors starting with 2
  //-starting at 2 when i is less than or equal to num, add 1 to i
for(i = 2; i <= num; i++){
  //this is how to check if my number is prime
  //- if num module i equals 0
  if (num % i==0) {
    //check if divisor is prime
    for(var j = 2; j <= i/2; j++) {
      //-if i module j is 0 this means theres no remaider so the number is even
      if(i % j == 0) {
        isPrime = false;
        //if there is a a reminder then the number is prime assing the vaue to isPrime
      } else {
        isPrime = true;
      }
    }
    //if the number we got is prime
    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      num /= i
      primeArray.push(i);
    }
  }
}
//how to find the largest prime factors
//-mmaing a new variable we set it to zero ,
//-for when that variable k is less then the to total length of the array 'primeArray'
//- add 1 to k, log that element
for (var k = 0; k < primeArray.length; k++) {
  console.log(primeArray[k]);
}
