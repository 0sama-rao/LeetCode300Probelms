


const containsDuplicate = nums => {

    let visitedNums = {}; // taking empty object

    for(i =0; i < nums.length ; i++){

        const num = nums[i];
        // checking if we have duplicate value
        if(visitedNums[num]){
            return true

        }

        else{
             
            visitedNums[num] = true
        }
    }

    return false;

};

module.exports = containsDuplicate;
