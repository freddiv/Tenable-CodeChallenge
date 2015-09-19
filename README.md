# Supporting code for Tenable coding challenge
## tests.js
Code in tests.js was written to support verifying answers in multiple choice questions and to be used in actual code challenges

### maxDiff()
This function is a customized version of themaxDifference function in question 6 of the code challenge

It takes form input of a comma or space delimited list. It converts the array items to integers when possiple if the parseInt function returns NaN on the array item that item is removed from the array.

If the first item in the array is not equal to the length of the remaining items in the array this is shown in the output.
 

## maxDiff.js
This is the original code that I submitted for question 6

I could not get all test cases to succeed and the fact that I had no access to the values being passed in or the details for the failed test cases I was not able to effectively debug.

Similiarly, no output was displayed to show what the function was returning 

## Running the code
Download the repository into a directory on a web server's root.
navigate to the directory and load index.html example: http://localhost/tenable/index.html
follow the on screen directions to run the maxDiff function.