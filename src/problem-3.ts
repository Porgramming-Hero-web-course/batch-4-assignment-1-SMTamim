{
  /**
 * Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output:
2;
 */

  const countWordOccurrences = (str: string, wordToCount: string) => {
    const matchesArr: string[] | null = str.match(RegExp(wordToCount, "gi"));
    console.log(matchesArr?.length ?? 0);
  };
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
}
