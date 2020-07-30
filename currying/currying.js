const greet = function(greeting) {
  return function(name) {
    return function(punctuation) {
      return `${greeting} ${name}${punctuation}`
    } 
  }
}

module.exports = greet