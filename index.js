// Test using 147 which should equal 101011

// Function to convert decimal to binary
function decimalToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    console.log(
      `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
        x / 2
      )}`
    );
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  console.log(`Binary: ${bin}`);
}

decimalToBinary(147);

// toString method
// Also can use .toString(16) for Hexadecimal - Should equal 93

// console.log((147).toString(16));

console.log((147).toString(2));
// Can also use 147..toString(2)
// The first dot is the decimal separator which is part of the number and the second dot is the dot operator for calling the method on that number.
