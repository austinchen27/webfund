var arr = ["a","b","c","d","e"]

var arrReverse = []

function arrR(arr) {

  var arrReverse = []
  for (var i = arr.length - 1; i >= 0; i--) {
    arrReverse.push(arr.pop())

    console.log(arrReverse)
  }
  return arrReverse

}

console.log(arrR(arr))