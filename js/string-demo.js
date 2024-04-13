
var string = `))(()())(((()`;

// problem is f=to find number of count for a valid paranthsis 
function ValidParanthasis (str){

    let stack = []
    count = 0;

    for(let ch of str){
        // console.log('ch--', ch);
        if(ch == '('){
            console.log('aaya +');
            stack.push(ch);

        }
        else{
            // console.log(stack.length);
            // console.log(stack[stack.length-1]);
            // console.log(stack.length > 0 && stack[stack.length-1] == '(');
            if(stack.length > 0 && stack[stack.length-1] == '(')
            {
                console.log('aaya -');
                stack.pop();
                count +=2
            }
        }
    }
    return count;
}

console.log('count', ValidParanthasis(string))

//  find maximun water capacity can store 
// each array  value have height of each tower
// and distance between each tower is 1 unit

var tank_arr = [1,3,4,3,9,17,23]

function findMaxStoreWaterCalculation(arr){
        var left = 0;
        var right = arr.length-1
        var maxStoreCapacity = 0;
        var leftTower = arr[0];
        var rightTower

        while(left < right){
             let   calculate =  Math.min(arr[left], arr[right]) * (right - left);
             if(calculate > maxStoreCapacity){
                maxStoreCapacity = calculate
             } 
             if(arr[left] < arr[right] ){
                left++
             }else{
                right ++
             }
        }
        return maxStoreCapacity;
}
console.log('max water capacity is ', findMaxStoreWaterCalculation(tank_arr));


/**
 * function get charactor count to make a panidrom from a given string 
 * @param {*} str 
 * @returns 
 */
function finmacCharFromStringTomakepanidrom(str){

      var isEvenItem = false
      var obj  = {}
      var count = 0;
      for(var ch of str){
          if(obj.hasOwnProperty(ch)){
            obj[ch] += 1; 
          }else{
            obj[ch] = 1; 
          }
      }
      console.log(obj)
    
      for(var value  of Object.values(obj) ){
          if(value % 2 == 0) {
            count +=value 
          }else if(value % 2 == 1){
            count += value-1
            isEvenItem = true;
          }
      } 

      if(isEvenItem){
        count += 1;
      }
      return  count
}
console.log('number of ch count for panidrom', finmacCharFromStringTomakepanidrom('aaplabp'));