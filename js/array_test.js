

var inputArray = [8,89,3,34,45,67,36,26,45,6, 7, 3,4,5,66,6,77,26,78,29,59,83,53]

// console.log(inputArray.splice(2,1));
// console.log(inputArray);

function removeDuplicate (arr){
    for(var i=0;i<arr.length ; i++){
        var findvalue  =  arr[i]
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

/**
 * Every function 
 * return boolean
 */

var everyArr =  [98,36,77,374,9873];
const testValue  = (item) => item < 20
console.log(everyArr.every(testValue))

/**
 * slice array  
 * @param start index 
 * @param end index // end not included in result
 */  

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 4)); 

/**
 * some Atleast one element passed on condition
 */
const someArray = [1, 2, 3, 4, 5];
// Checks whether an element in array is even or not
const even = (element) => element % 2 === 0;
console.log(someArray.some(even));
// Expected output: true 

/**
* splice
* This will modify exiting array
* @param index on which change required
* @param number of item to be replace/remove if available 
* @param item  item to be replace
*/  

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

