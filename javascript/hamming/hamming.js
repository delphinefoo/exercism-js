var Hamming = function () {
  return {
    compute: this.compute
  };
};

Hamming.prototype.compute = function(stringOne, stringTwo) {
  var length = 0;
  if (stringOne.length === stringTwo.length) {
    //loop through letters of string
    for (var i = 0; i < stringOne.length; i++) {
      //if letters are not equal
      if (stringOne[i] !== stringTwo[i]) {
        //add 1 to score
        length += 1;
      }
    }
    //return score
    return length;
  } else {
    throw new Error('DNA strands must be of equal length.');
  }
};

module.exports = Hamming;
