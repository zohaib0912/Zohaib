function checkPalindrome(string) {
    const strLowercase = string.toLowerCase();
    const arrayValues = strLowercase.split('');
    const reverseArrayValues = arrayValues.reverse(); 
    const reverseString = reverseArrayValues.join('');
    if (strLowercase === reverseString) {
        console.log('It is a palindrome');
    } else {
        console.log('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ');
checkPalindrome(string);
