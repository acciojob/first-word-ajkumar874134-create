function firstWord(str) {
  if (str.length === 0) return "";

  // Remove leading spaces
  str = str.trimStart();

  // Find first space
  const spaceIndex = str.indexOf(" ");

  // If no space found, return entire string
  if (spaceIndex === -1) {
    return str;
  }

  // Return substring till first space
  return str.substring(0, spaceIndex);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
