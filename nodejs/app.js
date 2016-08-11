/*prototype
function person(fname,lname) {
        this.fname=fname;
        this.lname=lname;
}

person.prototype.greet=function(){
      console.log('hello',this.fname + '' + this.lname);
}

var keval=new person('don','john');

keval.greet();

var patel = new person('the','rock');

patel.greet(); end program prototype*/

/*
var person ={
    firstname : '',
    lastname : '',
    greet : function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var john=  Object.create(person);

john.firstname= "keval";
john.lastname =  "patel";

var jane = Object.create(person);

jane.firstname="jnf";
jane.lastname="patel";

console.log(john.greet());
console.log(jane.greet());*/


var eventEmitter = require('events');
var util =  require('util');

function Greetr(){
    this.greeting = 'hello w';
}

util.inherits(Greetr,eventEmitter);
