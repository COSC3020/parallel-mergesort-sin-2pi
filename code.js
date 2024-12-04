function mergesort(array) {
    const arrayLength = array.length;
    

    for (let subarraySize = 1; subarraySize < arrayLength; subarraySize *= 2) {
      for (let leftStart = 0; leftStart < arrayLength - 1; leftStart += subarraySize * 2) {
        const leftEnd = Math.min(leftStart + subarraySize - 1, arrayLength - 1);
        const rightEnd = Math.min(leftStart + (2 * subarraySize) - 1, arrayLength - 1);
        
        mergeSubarrays(array, leftStart, leftEnd, rightEnd);
      }
    }
    
    return array;
  }
  
  function mergeSubarrays(array, leftStart, leftEnd, rightEnd) {
    let leftIndex = leftStart;
    let rightIndex = leftEnd + 1;

    while (leftIndex < rightIndex && rightIndex <= rightEnd) {
        if (array[leftIndex] <= array[rightIndex]) {
            leftIndex++;
        } else {
            value = array[rightIndex];
            let index = rightIndex;

            while (index > leftIndex) {
                array[index] = array[index - 1];
                index--;
            }
            array[leftIndex] = value;

            leftIndex++;
            rightIndex++;
        }
    }
}
