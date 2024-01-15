/*Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

class Solution {
    public boolean isPalindrome(int x) {
        if(x<0){
            return false;
        }
        int sum=0;
        int rem;
        int n=x;
        while(x!=0){
            rem=x%10;
            sum=sum*10+rem;
            x=x/10;
        }
        if(n==sum){
            return true;
        }else{
            return false;
        }
    }
}
