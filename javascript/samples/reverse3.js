var arr = ["a", "b", "c", "d", "e"]
var newArr = []

for (var i = arr.length - 1; i >= 0; i--) {
  var temp = arr.pop()
  newArr.push(temp)
}

console.log(newArr)

