


// function removeDuplicat (arra){
//     for(var i=0;i<arra.length ; i++){
//         var findvalue  =  arra[i]
//         if(findvalue){
//             if(arra.indexOf(findvalue) !== i){
//                 var index =  arra.indexOf(findvalue)
//                 arra.splice(index,1)
//             }
//         }
//     }
//     return arra;

// }
// var inputArray = ['k','a','r','u','o']
// var uniqueArray =  removeDuplicat(inputArray)
 // console.log(uniqueArray, uniqueArray)


// function sortinSigleloop(arr){

//     for(j=0;j < arr.length ;){
//         console.log("loop",j)
//         if(arr[j] > arr[j+1] ){
//             // swap element
//             var temp  = arr[j] 
//             arr[j]  = arr[j+1] 
//             arr[j+1] = temp 
//             j--
//             // console.log("loop",arr)
//         }else{
//             j++
//         }
//     }
//     /// console.log('sorted_arrat',arr)
//     return arr ;
// }

// var sorted_array = sortinSigleloop(uniqueArray)
// console.log(sorted_array)


// 

  var obj =  {
    name: "bineet"
  }
  const key = "constructor";
  console.log(obj)
  if(obj.hasOwnProperty(key)){
    console.log('key is exist');
  }else{
    console.log('key is not exist');
  }

  if(Object.hasOwn(obj, key)){
    console.log('key is exist 2');
  }else{
    console.log('key is not exist 2');
  }

  Object.prototype.getName = function(){
     console.log('my name is this name', this.name);
  } 

  console.log(obj.getName());
  String.prototype.printName = function(){
    console.log('print from inner function')
  }
 var  person = "bineet";
 console.log(person.printName());

 /**
  * infinit loop call stack problem
  */
function show() {
  console.log('show');
  // setTimeout(show,1); // this will run program infinite without call stack size issue
  show();  // this will give error =  maxmium call stack size is excceded
 }
 show();

/**
 * This will print 5 time 5
 *  because closure , when this will print console loop will be completed and that time
 *  value of i will be 5 , then this will take value i  from outer scope which is 5 
 */
for(var i=0 ; i< 5; i++){
  setTimeout(()=>{
    console.log(i);
  },100)

}

/**
 *  This will print 0, 1,2,3,4
 *  because closure , when this will print console, The outer loop will have completed and at that time
 *  but it console.log first search value of i in there  function scope which is each time is diff 0 to 4 because 
 *  setTimeout is wrap in other self invoke function
 *  that why it will print 0 , 1, 2, 3, 4
 */
for(var i=0 ; i< 5; i++){
  (function(i){
    setTimeout(()=>{
      console.log(i);
    },100)

  })(i)
}


/**
 *  this will print 0, 1,2,3,4
 *  because closure , when this will print console, The outer loop will have completed and at that time
 *  but it console.log they will print 0 , 1, 2, 3, 4 why , because i have block scope and each loop  its block have diffirent value
 *  that why it will print 0 , 1, 2, 3, 4
 */
for(let i=0 ; i< 5; i++){
    setTimeout(()=>{
      console.log(i);
    },100);
}


// laxical scope example and hoisting 
var a = 10;
function showA (){
  console.log("value of a", a);
  // var a = 20;
  console.log(a)
}
showA();
// outpur  undefined , 20 ,
// when var a = 20 is commented then output will be 10, 10 
// this is because hoisting and laxical scoping 


console.log(+"5"+"2"+2) // output will be 522 // in
//  +"5" comvert to number 5 but 
console.log(+"5"+ +"2"+2) // output will be 9 
// in this expreestion + +"2"  , +"2"  will convert 2 to number form string 
// (+"5") + (+"2")  will become 5+2 = 7 and last + 2 will become 9

console.log("a"+"b"+2) // ab2
console.log("====", "a"+ -"b"+2) // aNAN2 // +2 will concatinate with string aNaN 
// because - sign before string "b" will try to convert b into number and this will become NaN
//string "a" + Nan + 2 = aNaN + 2 = aNaN2

console.log('+"a"+ +"b"+2', +"a"+ +"b"+2) // Nan
//  +"a" => NaN , +"b" =>  NaN , 
// NaN + NaN+ 2 = NaN //  adding any number in NaN will become NaN in math   

console.log('1+"1"+2', 1+"1"+2) // 112
//  "11"+2 = "112" // all + operater treates as concatinate 

console.log('1+-"1"+2', 1+-"1"+2) // 2
// 1+-1+2 = 0+2 = 2
// note expression will be solved from left to write

console.log('NaN  == NaN', NaN  == NaN) // false

function debounce(fun, delay){
     let timer = null
     return (...arg) => {
      if(timer) clearTimeout(timer);
      setTimeout(()=>{
        fun(...arg);
      }, delay)
     }
} 
function testDebounce(x,y,z){
  console.log('debounce', x,y,z, x+y+z)
}
var startdebounnce  = debounce(testDebounce,100)
startdebounnce(8,4,5)

// add 
const  addWithoutFunctionName  = new Function('a', 'b', 'return a + b');
console.log('addWithoutFunctionName', addWithoutFunctionName(8,4))