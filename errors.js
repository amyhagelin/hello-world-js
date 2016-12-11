

function divider(x, y) {
	if (typeof x != 'number' || typeof y != 'number') {
		throw {
			name: 'Non-numbers',
			message: 'Trying to divide non-numbers',
			toString: function() {
				return "Error: " + this.message;
			}
		}
	}
	return x / y;
}

// nmbers
var a = [[10, 2], [5, 6], ['a', 2], ['b', 'x'], [10, 5]];

for (var i = 0; i < a.length; i++) {
	try {
		console.log(divider(a[i][0], a[i][1]));
	} catch(e) {
		console.log("" + e);
		// fail silently and send log to server
	}
}

