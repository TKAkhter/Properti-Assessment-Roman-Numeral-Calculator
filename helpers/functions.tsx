export default function calculateNumberToRoman(input: any, setError: any) {
  let data = generateRomanData();

  // Check for decimal points and negative since they cannot be in roman numerals
  if (input.indexOf(".") != -1 || input.indexOf("-") != -1) {
    setError("Roman numerals can not have decimal or negative values")
    return;
  }

  // Check for anything that is not a numerical value
  if(input.match(/^[0-9]+$/) === null) {
    setError("The number contains letter or special character");
    return;
  }

  // Romans can handle anything lesser than 4 million but as per requirement we set a limit to 1000
  if (input > 1000) {
    setError("The number should be between 1 and 1000 inclusive");
    return;
  }

  // Make a variable to contain the output, we will add to this
  let output = "";

  // Go through each digit from left to right
  for (let key in input) {
    // Get the actual digit as an integer so we can use it
    let number = parseInt(input[key]);
    let keyInt = parseInt(key);
    // If the number is bigger than 0, we got work to do...
    while (number > 0) {
      // Get the placement of the number, which decimal place are we in?
      // 4th place: 1000, 2nd place: 10, last digit: 1
      let numberOffset = Math.pow(10, input.length - keyInt - 1);

      // If we have a 9, we do the next 10 minus the 1.
      // 90 = C(100) - X(10) = XC
      if (number == 9) {
        output += data[numberOffset];
        output += data[numberOffset * 10];
        number -= 9;

        // Else, if the number is bigger than 5, take away the 5
        // and add whatever is there
        // 8 = 5 + 3 = V + 3 = VIII
      } else if (number >= 5) {
        output += data[numberOffset * 5];
        number -= 5;

        // Else, if the number happens to be 4, that is 5 - 1
        // 400 = D(500) - C(100) = CD
      } else if (number == 4) {
        output += data[numberOffset];
        output += data[numberOffset * 5];
        number -= 4;

        // Else, the number has to be less than 4
        // Just keep taking 1 away and loop this loop
      } else {
        output += data[numberOffset];
        number -= 1;
      }
    }
  }

  // Finally, output the text
  setError("");
  return output;
}

export function generateRomanData() {
  let data = [];
  data[1] = "I";
  data[5] = "V";
  data[10] = "X";
  data[50] = "L";
  data[100] = "C";
  data[500] = "D";
  data[1000] = "M";
  return data;
}
