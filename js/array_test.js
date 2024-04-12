

var inputArray = [8,89,3,34,45,67,36,26,45,6, 7, 3,4,5,66,6,77,26,78,29,59,83,53]

// console.log(inputArray.splice(2,1));
// console.log(inputArray);

function removeDuplicate (arr){
    for(var i=0;i<arr.length ; i++){
        var findvalue  =  arra[i]
        if(findvalue){
            if(arr.indexOf(findvalue) !== i){
            var index =  arr.indexOf(findvalue)
                arr.splice(index,1)
            }
        }
    }
    return arr;
}

var uniqueArray =  removeDuplicate(inputArray)
 console.log('uniqueArray', uniqueArray)

/**
 * sort with a single loop wihtout using any inbuild function
 * @param {*} arr 
 * @returns 
 */
function sortinSigleloop(arr){
    for(j=0;j < arr.length ;){
        console.log("loop",j)
        if(arr[j] > arr[j+1] ){
            // swap elemt
            var temp  = arr[j] 
            arr[j]  = arr[j+1] 
            arr[j+1] = temp 
            j--
            // console.log("loop",arr)
        }else{
            j++
        }
    }
    /// console.log('sorted_arrat',arr)
    return arr ;
}

var sorted_array = sortinSigleloop(uniqueArray)
console.log(sorted_array)


const ab = sorted_array.filter(item => { if(item > 5)  return item })
console.log('ab',ab);