
function mergesort(array) {
    return new Promise(function(resolve) {
        arrayLength = array.length;
        operations = [];
        
        for (let subarraySize = 1; subarraySize < arrayLength; subarraySize *= 2) {
            operations.push(function(callback) {
                mergeTasks = [];
                
                for (let leftStart = 0; leftStart < arrayLength - 1; leftStart += subarraySize * 2) {
                    const leftEnd = Math.min(leftStart + subarraySize - 1, arrayLength - 1);
                    const rightEnd = Math.min(leftStart + (2 * subarraySize) - 1, arrayLength - 1);
                    
                    function mergeTask(innerCallback) {
                        mergeSubarrays(array, leftStart, leftEnd, rightEnd);
                        innerCallback();
                    }
                    
                    mergeTasks.push(mergeTask);
                }
                
                async.parallel(mergeTasks, function() {
                    callback();
                });
            });
        }
        
        async.series(operations, function() {
            resolve(array);
        });
    });
}

function mergeSubarrays(array, leftStart, leftEnd, rightEnd) {
    leftIndex = leftStart;
    rightIndex = leftEnd + 1;

    while (leftIndex < rightIndex && rightIndex <= rightEnd) {
        if (array[leftIndex] <= array[rightIndex]) {
            leftIndex++;
        } else {
            value = array[rightIndex];
            index = rightIndex;

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

     
