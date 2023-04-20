
// 8
// let stringSpaces = "Remove All Spaces";
// let removeSpace = stringSpaces.replaceAll(" ", "");
// console.log(removeSpace);
function removeFunc(str){
    return str.replaceAll(" ", "")
}
let stringSpaces = "Remove All Spaces"
let removeSpaces = removeFunc(stringSpaces);
console.log(removeSpaces)




// 9
function div10(num) {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(div10(20))

// 10

let vowls = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function getVowel(str){
    let vowelCount = 0;
    for(let letter of str){
        if (vowls.includes(letter)){
            vowelCount++;
        }
    }
    return vowelCount
}

let input = prompt("Enter a word: ");
let result = getVowel (input);
console.log(result);
