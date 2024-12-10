//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {

    let startIndex= 0;
    let maxLength = 1

    function expandAroundMiddle(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right] ){

            // lets check the size of current palindrome
            const currentPalindrome = right-left + 1;
            if(currentPalindrome > maxLength){
                maxLength = currentPalindrome;
                startIndex = left;
            }

            left -= 1;
            right +=1;
        }
    }

    for(i = 0; i< s.length; i++){
        expandAroundMiddle(i-1, i+1);
        expandAroundMiddle(i, i+1);
    }

    return s.slice(startIndex, startIndex + maxLength)
}

// Time complexity o(n^2) , sice expanding palindrome around its center could take up to O(n), and we do this for each caharacter

module.exports = longestPalindrome;
