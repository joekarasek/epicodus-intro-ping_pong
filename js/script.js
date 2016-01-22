//++++++++++++++++++++++++++++++++
//   "Business Logic"
//++++++++++++++++++++++++++++++++

var toPingPong = function(inputNumber) {
  if (inputNumber % 15 === 0) {
    return "pingpong";
  } else if (inputNumber % 5 === 0) {
    return "pong";
  } else if (inputNumber % 3 === 0) {
    return "ping";
  }
  return inputNumber.toString();
}
