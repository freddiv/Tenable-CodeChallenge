
$( document ).ready(function() {
    console.log( "ready!" );
    $( "#maxDiff" ).click(function( event ) {
    	  event.preventDefault();
    	  var arrVal = $('input#maxDiffVals').val(),
    	  a;
    	  
    	  console.log(arrVal.indexOf(',')); 
    	  if (arrVal.indexOf(',') > -1){
    		  
    		a = arrVal.split(',');  
    	  }
    	  else{
    		  a = arrVal.split(' ');    
    	  }
    	  difference = maxDiff(a);
    	  console.log(arrVal);
    	  console.log(a);
    	  console.log(difference);
    	});
    
});

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
	 		
	 console.log('arr', arr);
	 console.log('inputLen', inputLen);
	 lineOut += "input length is " + inputLen + "<br />";
	 lineOut += "maxNumber is " + maxNumber + "<br />";
	 lineOut += "maxNumber was found at array[" + (parseInt(finalArrLen)) + "] <br />";
	 lineOut += "the length of array values found before the maxNumber is " + finalArray.length + " <br />";
	 lineOut += "the minNumber found in that array is " + minNumber + " <br />";
	 
	 console.log('newArr', newArr);
	 console.log('maxNumber', maxNumber);
	 console.log('minNumber', minNumber);
	 console.log('finalArrLen', finalArrLen);
	 console.log('finalArray', finalArray);
	 console.log('numDiff', numDiff);
	 console.log(numDiff == NaN);
	 console.log('returnVal',returnVal);
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