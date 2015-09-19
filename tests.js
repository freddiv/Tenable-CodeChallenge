
$( document ).ready(function() {
    $( "#maxDiff" ).click(function( event ) {
    	  event.preventDefault();
    	  var arrVal = $('input#maxDiffVals').val(),
    	  a;
    	  
    	 // check input for a comma to determine list format for parsing into an array
    	  if (arrVal.indexOf(',') > -1){	  
    		a = arrVal.split(',');  
    	  }
    	  else{
    		  a = arrVal.split(' ');    
    	  }
    	  difference = maxDiff(a);
    	  $('div#maxDiffOut').find('p').append("maxDifference returned " + difference);
    	  
    	});
    
});

function getSmallest(numbers) {
	var numberArray = numbers.split(','),
	    index,
	    len,
	    minNum;
	    for (index = 0, len = numberArray.length; index < len; ++index ){
	      var parsedNum = parseInt(numberArray[index]);
			if(index === 0){
				minNum = parsedNum;
			}
			else if(minNum > parsedNum){
				minNum = parsedNum;
			}  
	    }
	    return minNum;
	}

function capitalize(string) {
	 var stringArr = string.split(""),
	     vowels = ["a","e","i","o","u","y"],
	     newString = "",
	     index,
	     len;
	     for (index = 0, len = stringArr.length; index < len; ++index ){
		      var item = stringArr[index],
	              converted;
		   
				if(vowels.indexOf(item) >-1){
					converted = item.toUpperCase();
	                newString += converted;
				}
				else {
					newString += item;
				}  
		    }
	     
		    return newString;
	}

/*
 * Complete the function below.
 * this function works in every case were an array of integers is passed in to it on my local server (not using node and using form input)
 * I have no access to the test cases that are failing or even the error or output so I cannot debug effectively
 * see code at https://github.com/freddiv/Tenable-CodeChallenge for a custom implementation 
 * custom implementation works whether it is numeric or string values
 * it also handles errors such as an alpha value being passed in the array 
 * and the first value in the input string not correctly indicating the array length
 * input can be space or comma delimited
 */

function maxDiff(a) {
	 var arrInput = a || [8,3,7,3,8,20,33,1,8], //default when a null value is passed
	 	 arr = numericArray(arrInput), // parse the submitted value array into an array of integers
	 	 lineOut = "",
	 	 returnVal = -1, // default the return value
	 	 inputLen = arr[0], //extract the first value in the input to get the length of the array to be parsed
	 	 newArr = arr.slice(1), // remove the first value because it is not part of the array to be parsed
	 	 maxNumber = Math.max.apply(null, arr), // get the maxNumber value
	 	 finalArrLen = newArr.indexOf(maxNumber), // get the array index of the maxNumber
	 	 finalArray = newArr.slice(0,finalArrLen), // get an array of all values prior to the maxNumber index
	 	 minNumber = parseInt(Math.min.apply(null, finalArray)), // get the lowest value in the array created in line above
	 	 numDiff = (maxNumber - minNumber); // subtract the low from the high value for the max difference
	 		
	 lineOut += "input length is " + inputLen + "<br />";
	 lineOut += "maxNumber is " + maxNumber + "<br />";
	 lineOut += "maxNumber was found at array[" + (parseInt(finalArrLen)) + "] <br />";
	 lineOut += "the length of array values found before the maxNumber is " + finalArray.length + " <br />";
	 lineOut += "the minNumber found in that array is " + minNumber + " <br />";
	 
	 if(!isNaN(numDiff) && inputLen === newArr.length ) {
		  console.log('returnVal',returnVal);
		  lineOut += "the value passed for the length of the array matches the parsed array length and difference between min and max values is  " + numDiff + " <br />";
		 returnVal = numDiff;
	 }
	 else if(!isNaN(numDiff) && inputLen != newArr.length ) {
		  console.log('returnVal',returnVal);
		  lineOut += "the value passed for the length of the array does not match the parsed array length but the process could still determine a difference value of " + numDiff + " <br />";
		 returnVal = numDiff;
	 }
	 else if(isNaN(numDiff) && inputLen != newArr.length ){
		  lineOut += "the value passed for the length of the array does not match the parsed array length and the process could not determine a difference value <br />";
			
	 }	 
	 else {
		 lineOut += "the process could not determine a numeric difference value <br />";
	 }
	 $('div#maxDiffOut').find('p').html('').append(lineOut);
	 
		    return returnVal;
	}

function getMaxOfArray(numArray) {
	console.log(numArray);
	  return Math.max.apply(null, numArray);
	}

function getMinOfArray(numArray) {
	  return Math.min.apply(null, numArray);
	}

function numericArray(numArray) {
	var arr = numArray,
		returnArray = [],
		index,
	    len;
	
	    for (index = 0, len = arr.length; index < len; ++index ){
	      var parsedNum = parseInt(arr[index].trim());
	      if(!isNaN(parsedNum) )     returnArray.push(parsedNum); // handle non numeric value in array
			}  
	
	  return returnArray;
	}
(function(){
	var a = 100;
	outputStr = "";
	( function(){
		if(!a) {
			var a = 300;
		}
		else{
			a+= 50;
		}	
		outputStr += a + '<br />';

	} )();
	outputStr += a + '<br />';
	$('div#hoist').find('p').html('').append(outputStr);
} )();

function updateState(object){
	state = "Virginia";
	object.city = "Alexandria";
	
	return state;
}
var newState = "Alaska",
ouputStr = "",
obj = {
		city:'Columbia',
		state: 'Maryland',
		counter: 1
};


newState = updateState(obj);

ouputStr += obj.city + '<br />';
ouputStr += obj.state + '<br />';
ouputStr += newState + '<br />';

$('div#object').find('p').html('').append(ouputStr);


