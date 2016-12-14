// get rid of symbols like ?
// sort into an object comparing current word to next word
// if they are the same, push to array within the object
// if they are not the same, that word becomes the new point of comparison
// put next word into new key within the object
// check the array.length to see which is the longest
  // that words is the answer
  // if there's a tie, take both words, and sort them alphabetically



function mostFrequentWord(words) {
  var wordFrequencies = {}; // create empty object
  for (var i = 0; i <= words.length; i++) { // iterate through words
    if (words[i] in wordFrequencies) {// if that word is in the obj
      wordFrequencies[words[i]]++; // increase the counter
    }
    else {
      wordFrequencies[words[i]]=1; // keep counter at 1
    }
  }
  var currentMaxKey = Object.keys(wordFrequencies)[0]; // do not understand from here on down
  var currentMaxCount = wordFrequencies[currentMaxKey];
  
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}
