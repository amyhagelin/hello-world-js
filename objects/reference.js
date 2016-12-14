
function createPerson(name, age, city) {
	return {
		name: name,
		age: age,
		city: city,
		hello: function () {
			return 'Hello, I am ' + this.name;
		},
		toString: function () {
			return '<' + this.name + ', ' + this.age + '>';
		},
		clone: function () {
			// return a new person (clone)
			return createPerson(this.name, this.age, this.city);
		}
	}
}

// create people
var a = createPerson('Anthony', 25, 'SF');
var b = createPerson('Been', 30, 'NY');

console.log(a.hello());
console.log(a + '');

var c = a; // c references a
var d = a.clone();

console.log(c.name); // Anthony

c.name = 'James';
console.log(a.name); // James
console.log(d.name); // Anthony

d.age = 80;
var e = d.clone();

d.age = 35;

console.log(e.age, d.age);