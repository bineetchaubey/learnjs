

var arr = [2,3,4,5,6,6,4,7,8,8,3,3,3,3,3,5,4,2,7,5,4,7,4,6,4,6,6,6,6,5,5,6,7, 67];

// Question - find Count of max Number ?
function findMaxNumberCount (arr){

    var maxNumber = Number.NEGATIVE_INFINITY;
    var count = 0;

    for(let i = 0; i < arr.length ; i++){

        if(maxNumber <  arr[i]){
            maxNumber = arr[i];
            count = 1;
        }else if (maxNumber ==  arr[i]) {
            count += 1;
        }
    }
    console.log('max number and count ', maxNumber,count)
}

findMaxNumberCount(arr);

// question remove duplicate // or find unique
console.log(arr.filter((item,index) =>  arr.indexOf(item) === index))
console.log([...new Set(arr)]);

// question find duplicate
// this will also print duplicate multiple time 
console.log(arr.filter((item,index) =>  arr.indexOf(item) !== index))

// following way we will find duplicat and unique value
  function * findDuplicateAndUnique(arr){

    let seen = new Set();
    let duplicate = new Set();
    for(const item of arr){
        if(seen.has(item)){
            duplicate.add(item)
        }else{
            seen.add(item)
        }
    }
    yield Array.from(duplicate);
    yield Array.from(seen);
  }
  const generater = findDuplicateAndUnique(arr)
  console.log('Duplicate value array', generater.next().value)
  console.log('Unique value arry', generater.next().value)


  