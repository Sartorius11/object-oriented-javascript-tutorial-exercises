class Person{
	constructor(a,b,c){
		this._name = a;
		this._lastName = b;
		this._birthDate = c;
	}
}

//do not edit below this line

let mary = new Person('Mary','Dylan','Oct 12, 2002');
console.log("Mary's instance contains:",mary);

let july = new Person('July','Mccafee','Nov 12, 2002');
console.log("July's instance contains:",july);

let testFunction = (a,b,c) => new Person(a,b,c);