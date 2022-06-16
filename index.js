function isPalindrome(word) {
  // Write your algorithm here

  // let reversed = word.split('').reverse().join('');
  // return reversed === word;

  // let reversed = '';
  // for (let i = word.length - 1; i >= 0; i--) {
  //   reversed += word[i];
  // }
  // return reversed === word;

  let right = word.length - 1;
  let left = 0;
  while (left < right) { // while left is less than right
    if (word[left] !== word[right]) { // if left is not equal to right
      return false; // return false
    }
    left++; // increment left
    right--; // decrement right
  }
  return true; // return true
}

/* 
  Add your pseudocode here
  Input: string
  Output: boolean
  Steps to solve the problem:
  1. reverse the string
  2. compare the reversed string to the original string
  3. return true if they are the same
  4. return false if they are not the same
*/

/*
  Add written explanation of your solution here
  I think the problem is that you need to reverse the string and compare it to the original string.
  The first step is to reverse the string.
  The second step is to compare the reversed string to the original string.
  The third step is to return true if they are the same and false if they are not.
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
