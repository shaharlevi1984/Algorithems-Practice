 console.log("26. Remove Duplicates from Sorted Array");

 /**
 *? Problem Description:
 ** Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

 ** Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

 *? Exampels / Cases
 ** Input: nums = [1,1,2]
** Output: 2, nums = [1,2,_]
** Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k. 

** Input: nums = [0,0,1,1,1,2,2,3,3,4]
** Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
** Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

*? Requirements:
** Time Complexty: Linear -> O(n).
** Space Complexty: in-place.
*/

/* ---------------------------------------------------------------------------------- */

/**
*? Solution Main Idea:
** The use of the spliced method is most appropriate for the exercise, since the change is made in-place unlike the toSpliced method which copies the array and makes changes to it.
** Definition: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
*? Solution Time Complexty: O(n^2)
*? Solution Space Coomplexty O(1);
*/

let removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length - 1 ; i++) {
        if(nums[i] === nums[i + 1]) {  
           nums.splice(i,1);
           i--;
        } 
    }
    return nums.length;
};

let testCases = function(input,expected){
    let retVal = removeDuplicates(input);
    retVal === expected ? 
    console.log("Correct Answer") : console.log("Wrong Answer");
}

testCases([1,1,2],2);
testCases([0,0,1,1,1,2,2,3,3,4],5);



