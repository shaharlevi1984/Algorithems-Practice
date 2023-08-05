console.log("27. Remove Element");

/**
 *? Problem Description"
 **Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

** Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

** Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
** Return k.

*? Examples / Cases:
** Input: nums = [1,1,2]
** Output: 2, nums = [1,2,_]
** Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
** It does not matter what you leave beyond the returned k (hence they are underscores).

** Input: nums = [0,0,1,1,1,2,2,3,3,4]
** Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
** Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 ** It does not matter what you leave beyond the returned k (hence they are underscores).

*? Requirements:
** Time Complexty: Linear -> O(n).
** Space Complexty: in-space.
 */

let removeElement = function(nums, val) {
    if(nums.every(x => x === val) === true) {return 0}
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};


let testCases = function(input,val,expected){
    let retVal = removeElement(input,val);
    retVal === expected ? console.log("Correct Answer") : console.log("Wrong Answer");
}


testCases([3,2,2,3],3,2);
testCases([0,1,2,2,3,0,4,2],2,5);
