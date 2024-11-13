// String Manipulation Functions

/**
 * Reverses a given string.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Counts the number of characters in a string.
 * @param {string} str - The string to count characters from.
 * @returns {number} - The length of the string.
 */
function countCharacters(str) {
    return str.length;
}

/**
 * Capitalizes the first letter of each word in a sentence.
 * @param {string} sentence - The sentence to capitalize.
 * @returns {string} - The sentence with each word capitalized.
 */
function capitalizeWords(sentence) {
    return sentence
        .split(' ')                       // Split sentence into words
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter of each word
        )
        .join(' ');                       // Join words back into a sentence
}

// Array Functions

/**
 * Finds the maximum value in an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The maximum number in the array.
 */
function findMax(arr) {
    return Math.max(...arr);
}

/**
 * Finds the minimum value in an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The minimum number in the array.
 */
function findMin(arr) {
    return Math.min(...arr);
}

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The sum of the array elements.
 */
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0); // Accumulate the sum of all elements
}

/**
 * Filters out elements from an array based on a given condition.
 * @param {any[]} arr - The array to filter.
 * @param {function} conditionFunc - The condition function to test elements.
 * @returns {any[]} - The filtered array.
 */
function filterArray(arr, conditionFunc) {
    return arr.filter(conditionFunc);      // Apply condition to filter elements
}

// Mathematical Functions

/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number to find the factorial of.
 * @returns {number} - The factorial of n.
 */
function factorial(n) {
    if (n <= 1) return 1;                 // Base case: factorial of 0 or 1 is 1
    return n * factorial(n - 1);          // Recursive call
}

/**
 * Checks if a given number is prime.
 * @param {number} num - The number to check for primality.
 * @returns {boolean} - True if num is prime, false otherwise.
 */
function isPrime(num) {
    if (num <= 1) return false;           // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;  // If divisible by any number, not prime
    }
    return true;
}

/**
 * Generates the Fibonacci sequence up to a given number of terms.
 * @param {number} terms - The number of terms to generate.
 * @returns {number[]} - An array containing the Fibonacci sequence.
 */
function fibonacciSequence(terms) {
    const fib = [0, 1];                   // Starting values for Fibonacci sequence
    for (let i = 2; i < terms; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Add last two terms to get the next term
    }
    return fib.slice(0, terms);           // Return only the requested number of terms
}
