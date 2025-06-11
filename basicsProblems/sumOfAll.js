function sumOfAll(nums){
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    return sum
}

let myarr=[1,2,3,4,5]
console.log(sumOfAll(myarr))