let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit";
let banned = ["hit"];
para_arr = paragraph
                  .toLowerCase()
                  .replace(/[^a-zA-Z ]/g, "")
                  .trim().split(" ");


var firstFrequencyCounter = {};
var max = 0;
var result; 

for(var i = 0; i<=para_arr.length; i++){
  for(var j = 0; j<=banned.length; j++){
    if(para_arr[i] == banned[j]){
      para_arr.splice(i, 1);
    }
  }
}

for(val in para_arr){
  firstFrequencyCounter[[para_arr[val]]] = (firstFrequencyCounter[[para_arr[val]]] || 0) + 1;
  if(firstFrequencyCounter[para_arr[val]] > max) {
    max = firstFrequencyCounter[para_arr[val]];  // update max.
    result = para_arr[val]; 
  }
}

console.log(result)