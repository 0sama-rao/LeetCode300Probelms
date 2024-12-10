// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {

    let windowsCharsMap = {};
    let windowsSart = 0;
    let maxLength = 0; 

    for(i=0; i < s.length; i++){
        const endChar = s[i];

        // if duplicate character found in out window so we have to update
        if(windowsCharsMap[endChar] >= windowsSart){
            windowsSart = windowsCharsMap[endChar] +1;
        }

        windowsCharsMap[endChar] = i;

        maxLength = Math.max(maxLength, i - windowsSart + 1);
    }

    return maxLength;

}

module.exports = lengthOfLongestSubstring;
