
var person = {
    fullname: "binee chaubey",
    sayHello : function(){
       console.log("console something ",this.fullname);
    }
}

setTimeout(()=> person.sayHello(), 2000);

