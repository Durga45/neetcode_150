function twoSum(nums,target){
  let map =new Map()
  for(let i=0;i,nums.length;i++){
    let current=nums[i]
    let comp=target-current
    if(map.has(comp)){
      return[map.get(comp),i]
    }
    map.set(current,i)

  }
  return []
}