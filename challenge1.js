/* CHALLENGE MODULE 0
1. First, declare a variable named myArray and assign it to an empty array.
2. Great! Now populate myArray with two strings. 
    Put your full name in the first string, 
    and your Skype handle in the second.
3. Next, declare a function named cutName. It should expect a parameter name.

4. cutName should return an array by breaking up the input string into individual words.
  * Example: cutName("Douglas Calhoun") should return ["Douglas", "Calhoun"]
  * Example: cutName("John B. Smith") should return ["John", "B.", "Smith"]
5. Declare a new variable named myInfo and assign it to an empty object literal.
6. Add the following three key-value pairs to myInfo:
  * Key: fullName, Value: The result of calling cutName on the name string within myArray.
  * Key: skype, Value: The Skype handle within myArray.
  * Key: github, Value: If you have a github handle, enter it here as a string. If not, set this to null instead.
  */
 
// Bracket Notation 
var myArray = ['Genis Bardales','genisbardales'];
  
  function cutName(name) {
    return name.split(' ');
  }
  
  //grab cutName, get in it thru myArray and grab desired index.
  var myInfo = {};
    myInfo['fullName'] = cutName(myArray[0]);
    myInfo['skype'] = myArray[1],
    myInfo['github'] = 'genis_96'

    console.log(cutName("Coffee Chicken Pizza"));
    console.log(myInfo);




//2nd Way - Dot Notation
var myArray = ["Genis Bardales'", "genisbardales"];

function cutName(name) {
  cutString = name.split(" ");
  return cutString;
}
var myInfo =[];
myInfo.fullName = cutName(myArray[0]);
myInfo.skype = myArray[1];
myInfo.github = "genis96";

console.log(cutName("This Splits The String, Run On Google Console"));
console.log(myInfo);






//2nd Way - Dot Notation
var myArray = ["Genis Bardales'", "genisbardales"];

function cutName(breakString) {
  cutString = breakString.split(" ");
  return cutString;
}
var myInfo =[];
myInfo.fullName = cutName(myArray[0]);
myInfo.skype = myArray[1];
myInfo.github = "michaelwachell";

console.log(cutName("Dry Banana Hippy Hat"));
console.log(myInfo);






