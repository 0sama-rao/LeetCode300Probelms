function isPalindrome(s) {
    // sanitize the input string

    s = s.toLowerCase().replace(/[\W_]/g, "") // so \W_ will consider all alpha numeric characters and exclude it from string as it was defined in leetcode to do so

    let left = 0;
    let right = s.length-1;

    while(left < right)
    {
        if(s[left]!== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;
