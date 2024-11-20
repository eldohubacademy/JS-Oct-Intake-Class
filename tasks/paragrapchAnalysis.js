// word count
// longest word and longest count
// word frequency
// most frequent qord

function analyseParagraph(paragrapgh) {
  const cleanParagraph = cleanAParagraph(paragrapgh);
  console.log("Paragraph: " + cleanParagraph);
  const words = cleanParagraph.trim().split(" ");
  console.log("Word Count is: " + words.length);
  const longestWord = longestWordFinder(words);
  console.log("Longest Word : " + longestWord);
  console.log("Lenght of longest Word : " + longestWord.length);
  const wordCount = countWords(words);
  console.log("Word Frequency: ");
  console.log(JSON.stringify(wordCount));
  let highestFrequency = 0;
  let mostFeqQord = 0;
  Object.keys(wordCount).forEach((key) => {
    if (wordCount[key] > highestFrequency) {
      highestFrequency = wordCount[key];
      mostFeqQord = key;
    }
  });
  console.log("Most Frequent Word: " + mostFeqQord);
  console.log(mostFeqQord + " appears " + highestFrequency + " times.");
}

analyseParagraph(
  `Palindrome checker: Write a function that takes a string as an argument and returns a boolean indicating whether the string is a palindrome (a word or phrase that reads the same forwards and backwards). You can use string methods such as split(), reverse(), and join() to accomplish this task.`
);

// hositings --- execution context
function cleanAParagraph(paragrapgh) {
  // remove punctuations
  const punctuations = [
    ".",
    ",",
    "'",
    '"',
    ":",
    ";",
    "!",
    "?",
    "/",
    "@",
    "(",
    ")",
  ];
  let cleanParagraph = paragrapgh;
  for (let i = 0; i < punctuations.length; i++) {
    cleanParagraph = cleanParagraph.replaceAll(punctuations[i], "");
  }
  return cleanParagraph;
}

function longestWordFinder(words) {
  let longestWord = "";
  let lengthOfLongestWord = 0;
  words.forEach((word) => {
    if (word.length > lengthOfLongestWord) {
      lengthOfLongestWord = word.length;
      longestWord = word;
    }
  });
  return longestWord;
}

function countWords(words) {
  let wordCount = {};
  words.forEach((word) => {
    if (Object.keys(wordCount).includes(word)) {
      wordCount[word] = wordCount[word] + 1;
    } else {
      wordCount[word] = 1;
    }
  });
  return wordCount;
}
