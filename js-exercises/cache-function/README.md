# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
- Aggresive user hitting requesting a result repeteadly, but the cost of computing the required value is very high or does not chanve often.
- In recursions, memoization helps us in decreasing the number of function/logic executions.

### **What *extra* test cases can you add to the test file?**
- For more than one arguments in the callback
- For No arguments in the callback
- The cached function should execute as expected for undesired parameters

*Add relevant test-cases in the test file*