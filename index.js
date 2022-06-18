function isPalindrome(word) {
let copiedWord = [...word]
let reversed = copiedWord.reverse().join('')
return reversed === word;
}
console.log(isPalindrome('racecar'))
/* 
  Add your pseudocode here
*/
// change string to an array
//compare the original string with the reversed string
//change array back to string
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
