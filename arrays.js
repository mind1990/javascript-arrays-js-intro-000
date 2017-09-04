var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var myArray = [1]
  myArray = [element, ...myArray]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1]
  array.unshift("foo")
  return array
}


function addElementToEndOfArray(array, element) {
  var array = [1]
  array.push('foo')
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var myArray = array
  myArray.push(element)
  return myArray
}

function accessElementInArray(array, index) {

}
