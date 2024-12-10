const climbStairs = n => {

    if(n<=3) return n;

    let ways = [0,1,2,3]

    for(let i = 4; i<= n;i++){

        // fabionacci sequnce will happen here

         ways.push(ways[i-1] + ways[i-2])
    }

    return ways.pop()
};

module.exports = climbStairs;
