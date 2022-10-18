var count = [9,12,9]

function add1() {
  var countElement = document.querySelector("#count-1");
  countElement.innerText = (count[0]++) + " like(s)"
}

function add2() {
  var countElement = document.querySelector("#count-2");
  countElement.innerText = (count[1]++) + " like(s)"
}

function add3() {
  var countElement = document.querySelector("#count-3");
  countElement.innerText = (count[2]++) + " like(s)"
}