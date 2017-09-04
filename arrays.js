var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var myArray = [1]
  myArray = [element, ...myArray]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1]
  array.unshift("food")
  return array
}



function addElementToEndOfArray(array, element) {
  var array = [1]
  array.push('foo')
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var myArray = [1]
  myArray.push('foo')
  return myArray
}
