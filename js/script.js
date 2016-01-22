//++++++++++++++++++++++++++++++++
//   "Business Logic"
//++++++++++++++++++++++++++++++++

var toPingPong = function(inputNumber) {
  if (inputNumber % 5 === 0) {
    return "pong";
  } else if (inputNumber % 3 === 0) {
    return "ping";
  }
  return inputNumber.toString();
}
