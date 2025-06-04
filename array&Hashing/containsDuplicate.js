function containDuplicate(nums){
  let set=new Set()
  for(let num of nums){
    if(set.has(num)){
      return true
    }
    set.add(num)
  }
  return false
}

let ar=[1,2,3,4,5]
console.log(containDuplicate(ar))