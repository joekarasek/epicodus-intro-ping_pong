//++++++++++++++++++++++++++++++++
//   "Business Logic"
//++++++++++++++++++++++++++++++++

var toPingPong = function(inputNumber) {
  // This part catches inputs that are not numbers
  if (typeof inputNumber !== "number" || inputNumber < -1 || inputNumber % 1 !== 0) {
    return false;
  }
  // This part returns ping and pong
  if (inputNumber % 15 === 0) {
    return "pingpong";
  } else if (inputNumber % 5 === 0) {
    return "pong";
  } else if (inputNumber % 3 === 0) {
    return "ping";
  }
  return inputNumber.toString();
}


//++++++++++++++++++++++++++++++++
//   "User Interface Logic"
//++++++++++++++++++++++++++++++++

$(document).ready(function() {
  // prevents default behavior
  event.preventDefault();
  // submit event for form
  $('#pingPongForm').submit(function(event) {
    // clears result list upon subsequent submits
    $('#resultList').empty();
    //alerts user if entry does not work
    if (!toPingPong($('#inputValue').val())) {
      alert("Please enter a whole, positive interger and try again.");
      return;
    }
    // populates list to display results

  });
});
