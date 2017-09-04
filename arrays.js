
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var myArray = array
  myArray = [element, ...myArray]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = array
  array.unshift(element)
  return array
}


function addElementToEndOfArray(array, element) {
  var array = array
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var myArray = array
  myArray.push(element)
  return myArray
}

function accessElementInArray(array, index) {

}
