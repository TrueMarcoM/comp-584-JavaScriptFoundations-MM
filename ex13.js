let originalData = [1, 2, 3, 4];

let  clonedData = originalData.slice();

console.log(clonedData);

//Slice performs a shallow copy of the array.
//You should be aware that if the array contains objects, only references are copied.
//Primitives (non arrays) are copied by value.