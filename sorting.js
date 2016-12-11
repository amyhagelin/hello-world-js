

a = ['amy', 'james', '10', 'ann', 2];

b = [10, 20, 5, 6, 3, 20, 25, 35, 21];


function numberSorting(x, y) {
	return x < y; // descending
}
console.log(a.sort());

console.log(b.sort(numberSorting));

console.log(b.sort(function (x, y) {
	return x > y; // ascending
}));

// closures or anon functions