//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  return {  year: input,
            isLeap: this.isLeap
  };
};

Year.prototype.isLeap = function() {
  var baseYear = this.year - 1600;
  if (baseYear % 4 === 0 && (baseYear % 100 !== 0 || baseYear % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
