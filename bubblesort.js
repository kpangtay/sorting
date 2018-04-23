function bubbleSort(array){
  //take single and multiple items
  console.log(array);
  if (!array.length){
    return [];
  }else{
    for (let i = 0; i < array.length-1; i++){
      for(let j = 0; j < array.length-1-i; j++){
        if(compare(array[j], array[j+1]) === true){
          let first = array[j];
          array[j] = array[j+1];
          array[j+1] = first;
        }
      }
    }
  }
  console.log(array);
  return array;
}
// bubbleSort.swap = function(array){
//   return array;
// }
function compare(a, b){
  if (a < b){
    return false;
  }else{
    return true;
  }
}
