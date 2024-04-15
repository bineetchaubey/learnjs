var person =   {
    fullname: "bineet kumar chaubey"
}

// following code will create an object by associate property in object prototype 
// var person =  Object.create( {
//     fullname: "bineet kumar chaubey"
// }


console.log(person.fullname);
delete person.fullname ;
console.log(person.fullname);