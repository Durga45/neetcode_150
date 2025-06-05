let pick
function guess(num){
  if(pick >num) return -1
  if(pick<num) return 1
  return 0
}

let guessNumber=function(n){
  let start=1,end=n
  while(start<=end){
    let mid=Math.floor((start+end)/2)
    let res=guess(mid)
    if(res===0) return mid
    else if (result === -1) end = mid - 1;
    else start = mid + 1;
  }
  return -1
}