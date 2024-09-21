function repeat(operation, num) {
    // Base case: stop when num is 0
    if (num <= 0) return;
  
    // Perform the operation
    operation();
  
    // Recursively call repeat with num decremented by 1
    repeat(operation, num - 1);
  }
  
  // Do not remove the line below
  module.exports = repeat;