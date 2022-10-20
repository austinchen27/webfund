function hide(element) {
  element.remove();
}

var count = [314, 159]

function add1() {
  var countElement = document.querySelector(".ninjas-current-1");
  countElement.innerText = (count[0]++);
}

function add2() {
  var countElement = document.querySelector(".ninjas-current-2");
  countElement.innerText = (count[1]++);
}

// setTimeout(function() { alert("The Ninjas have won!"); }, 13000);