let searchRange = function(nums, target) {
    function findFirst(nums, target) {
        let start = 0, end = nums.length - 1;
        let first = -1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                first = mid;
                end = mid - 1; // keep searching on left side
            } else if (target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return first;
    }

    function findLast(nums, target) {
        let start = 0, end = nums.length - 1;
        let last = -1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                last = mid;
                start = mid + 1; // keep searching on right side
            } else if (target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return last;
    }

    let first = findFirst(nums, target);
    let last = findLast(nums, target);
    return [first, last];
};
