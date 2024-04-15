
var age = 10;

 (function (){
    console.log(age); // this will print undefined when next line age is again reinitlised with var 
    var age = 20;  
    console.log(age);
    person_name = "bineet"; 
 })()
 console.log(person_name); // This will print person name in 
 // Because in self invoke code block section person_name is define without any keyword. hence this 
 // variable is initialize in global context ;
 // But when we define person name with var or let keyword then this scope will be bound within that IFFI function
 // above line will print error in this case 
 console.log(age);

