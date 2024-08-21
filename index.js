const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
    { name: 'Alice', age: 35 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

function reverseAndCapitalize(sentence) {
    // Reverse the sentence
    let reversedSentence = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

// Example usage:
const inputSentence = "hello world this is a test";
const result = reverseAndCapitalize(inputSentence);
console.log(result); // Output: "Test a is this world hello"
// Split the reversed sentence into an array of words
const words = reversedSentence.split(' ');

// Capitalize the first letter of each word
const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

// Join the capitalized words back into a sentence
const finalSentence = capitalizedWords.join(' ');

console.log(finalSentence); // Output: "Test A Is This World Hello"

    