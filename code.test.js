const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Test both correctness and length preservation
const testParallelMergesort = jsc.forall("array nat", function(arr) {
    // Create deep copies to prevent modification of original
    const originalArray = JSON.parse(JSON.stringify(arr));
    const testArray = JSON.parse(JSON.stringify(arr));
    const expectedArray = JSON.parse(JSON.stringify(arr));
    
    // Get expected result using native sort
    const expectedResult = expectedArray.sort((a, b) => a - b);
    
    return mergesort(testArray).then(() => {
        // Test 1: Array length should remain the same
        const lengthPreserved = testArray.length === originalArray.length;
        
        // Test 2: Result should match native sort
        const matchesExpected = JSON.stringify(testArray) === JSON.stringify(expectedResult);
        
        // Test 3: Verify elements are in ascending order
        let isAscending = true;
        for(let i = 0; i < testArray.length - 1; i++) {
            if(testArray[i] > testArray[i + 1]) {
                isAscending = false;
                break;
            }
        }
        
        return lengthPreserved && matchesExpected && isAscending;
    });
});

// Run 100 tests by default.
jsc.check(testParallelMergesort);

