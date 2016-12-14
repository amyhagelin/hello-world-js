function word_frequency(word_array) {
	// return an object with the word frequency
	var wf = {};
	for (var i = 0; i < word_array.length; i++) {
		var  key = word_array[i];
		if (wf[key] >= 1) {
			// the word is in the object(wf), since it must at least be 1
			wf[key]++;
		} else {
			// initialize
			wf[key] = 1; 
		}
	}
	return wf;
}


function most_frequent(wf) {
	// return the most frequest word
	var words = [];
	var max = 0;
	Object.keys(wf).forEach(function (word) {
		if (wf[word] > max) {
			max = wf[word];
			words = [word];
		}

		// in case of a tie, we had other 'most' frequest words that came before
		if (wf[word] == max && words.length > 0) {
			words.push(word);
		}
	
	});

	// find the winning word
	return words.sort()[0];
}

// test
var words = "this is a list of words that may occur in any English setence anywhere in the world".split(" ");
console.log(most_frequent(word_frequency(words)));


// Perl: TMTOWODI
