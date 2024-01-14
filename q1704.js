/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
Return true if a and b are alike. Otherwise, return false.

Example 1:
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels =[ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  if(s.length%2===0){
    let ar=s.split("");
    let [a, b]=[ar.slice(0,s.length/2),ar.slice(s.length/2)]
    console.log(a,b)
    let forA=0;
    let forB=0;
    a.forEach(el=>vowels.includes(el) && ++forA)
    b.forEach(el=>vowels.includes(el) && ++forB)
    return forA===forB?true:false;
  }
};
