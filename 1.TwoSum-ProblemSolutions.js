console.log("1. Two Sum")

/**
 *? Problem Description:
 ** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

 *? Exampels / Cases
 ** Input: nums = [2,7,11,15], target = 9
 ** Output: [0,1]
 ** Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

** Input: nums = [3,2,4], target = 6
** Output: [1,2]

** Input: nums = [3,3], target = 6
** Output: [0,1]

*? Requirements:
** Time Complexty: Linear -> O(n).
** Space Complexty: Constant extra space.
*/

/* -------------------------------------------------------------------------------- */

/**
*? Solution Main Idea:
** To find a linear solution we need to scan the array once. The main idea in the exercise is that both elements,indexes of the array have meaning. There is a hint of using a data structure of key -> value, in the above case the corresponding data structure is a Hash Map.
*/

let twoSum = function(nums,target) {
    let hashMap = new Map();
    let output = [];
    const size = nums.length;

    for(let i = 0; i < size; i++){
        let newTarget = target - nums[i];

        if(hashMap.has(newTarget)){
            output[0] = hashMap.get(newTarget);
            output[1] = i;
            return output;
        }

        hashMap.set(nums[i],i);
        console.log(hashMap);
    }
    return output;
}

let testCases = function(input,target,expected){
    let retVal = twoSum(input,target);
    JSON.stringify(retVal) === JSON.stringify(expected) ? 
    console.log("Correct Answer") : console.log("Wrong Answer");
}


testCases([2,7,11,15],9,[0,1]);
testCases([2,7,11,15],22,[1,3]);
testCases([3,2,4],6,[1,2]);
testCases([3,3],6,[0,1]);

