function convertToBinaryUsingCharacterCodes(input) {
  let binaryResult = "";

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    let binaryValue = "";

    for (let j = 7; j >= 0; j--) {
      binaryValue += (charCode >> j) & 1;
    }

    binaryResult += binaryValue;
  }

  return binaryResult.trim();
}

const inputString = "This is my homies";
const binaryRepresentation = convertToBinaryUsingCharacterCodes(inputString);
console.log(binaryRepresentation);
