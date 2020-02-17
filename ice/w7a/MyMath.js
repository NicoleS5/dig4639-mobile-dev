function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
  result = a + b
  } 
  return result; 
}

function AddList (array) {
  let result = undefined;
  if(Array.isArray(array) && array.length > 0) {
    result = 0;
    for(var i = 0; i < array.length; i++) {
      if(typeof array[i] != "number") {
        result = undefined;
        break;
      }
      result = result + array[i];
    }
  }
  return result;
}

function DivideBy () {
}

function ContainsString () {
}

function ReSortedNumbers () {
}

function Adder () {
}


export { Sum, AddList, DivideBy, ContainsString, ReSortedNumbers, Adder };