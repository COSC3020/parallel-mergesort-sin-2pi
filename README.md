# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

## Answer

The span of this parallel mergesort implementation is $\Theta(n^2 log n)$.

The algorithm has $log n$ levels, subarraySize doubles each time.

At each level each merge operation takes $\Theta(n^2)$ time in worst case due to the shifting in mergeSubarrays

mergeSubarrays() outer loop runs from leftIndex to rightIndex, covering all elements in the array which is $\Theta(n)$ elements. 

If the elements are not in order the inner while activates, it has to shift elements to properly seat the value being held by rightIndex, which can cover $\Theta(n)$ elements on each iteration.

Therefore, the we traverse $log n$ levels, with each level taking $n^2$ time

Giving us $\Theta(n^2 log n)$ span.

Although the time complexity is the same as the non-parallel version, it would speed things up in practice. We are still doing the same amount of work, just in parallel.

## Sources

https://www.youtube.com/watch?v=li7FzDHYZpc

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

Used ChatGPT to create the test code, using the iterative & in-place mergesort test code as a base.

I also ran the test code from this approved parallel mergesort repo to confirm that it is working: https://github.com/COSC3020/parallel-mergesort-KobeLimon21/blob/main/code.test.js

My mergesort assignment: https://github.com/COSC3020/mergesort-sin-2pi
