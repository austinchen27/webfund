// Module 1

for (var i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i)
  }
}

// Module 2

for (var i = 100; i > 0; i--) {
  if (i % 3 == 0) {
    console.log(i)
  }
}

// Module 3
var arr = [4, 2.5, 1, -0.5, -2, -3.5]

for (var i = 0; i < arr.length - 1; i++) {
  console.log(arr[i])
}

// Module 4
var sum = 0

for (var i = 1; i < 101; i++) {
  sum += i;
}

console.log(sum)

// Module 5
var product = 1

for (var i = 1; i < 13; i++) {
  product *= i;
}

console.log(product)