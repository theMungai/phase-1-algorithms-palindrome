function isPalindrome(word) {
  // Write your algorithm here
  /* Input: A string, word, that we want to check.

Step 1: Convert the string into an array of characters.

Step 2: Reverse the array of characters.

Step 3: Join the reversed array back into a string.

Step 4: Compare the original string with the reversed string:

If both strings are identical, then the input is a palindrome, and we return true.

If the strings are different, then the input is not a palindrome, and we return false.
*/


    let reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      return true;  
    } else {
      return false;  
    }
    


}

/* 
  Add your pseudocode here
  
*/

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
