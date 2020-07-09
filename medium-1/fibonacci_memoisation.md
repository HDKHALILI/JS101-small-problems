**Disclaimer:** I'm not bashing the official solution. I will only use it to explain where we can utilize our cache better and make things easier to understand. With recursion it is crucial to understand how often we actually invoke our function. This can be a real performance killer (however, it isn't this time).

**TL;DR:** The official solution doesn't implement the algorithm shown in the picture. It invokes roughly twice as often as necessary. We can do better by testing previous calculations for nth-1 instead of nth. See code below.

**Investigate the problem:** Have a closer look at the picture and proposed solution above. We have to make sure that we are actually recalling previous computations before we invoke our function recursively again.

Remember that we are counting down from nth to 1. You would be tempted to test your cache (or memoization object) for a value of nth. Don't. We are trying to calculate the number for nth - you should look up nth - 1 or maybe nth - 2. You know, actual previous numbers.

**Understand the problem:** For the sake of simplicity, let's take the 7th Fibonacci number from the picture above. Ideally you should only need 5 invocations because you know the result to nth=1 and nth=2 (both 1). So we only need to compute from nth=7 down to nth=3. Look at the picture above: you only have to calculate the white boxes. It's even less, since you already know the outcome of fib(1) and fib(2) and can prefill your cache.

However, the proposed solution needs 11 invocations because we are looking up nth that doesn't exist and put two function calls on the call stack on line 8 each time we can't look up a value. Example: the first invocation for nth=7 will put fib(6) and fib(5) on the call stack. The picture correctly identifies the right invocation of fib(5) as unnecessary (green box), yet we invoke it anyways.

**Solve the problem:** With a cache, you shouldn't need to compute a Fibonacci number for nth - 2 at all. This is the most important part to understand: The moment you've calculated the value for nth-1, you must have calculated nth-2 elsewhere first.

Look at line 8 of the official solution: fibonacci(nth - 1) + fibonacci(nth - 2). The first function call will go all the way down to nth = 2 where it finally hits line 3 and 4: if (nth <= 2) return 1. Only now does the second function call for nth - 2 for the last invocation on the call stack get executed. By that time your cache is filled with all the results but we have lined up an additional unnecessary function call for every layer of recursion.

It also helps to initialize the cache with the values for nth = 1 and nth = 2. Otherwise you would only invoke your function again, just to find out it's 1.

Assuming that the nth parameter will always be a positive integer, we don't even have to test for nth <= 2. If you want to do error handling, keep it, otherwise delete it. Note that you must have initialized your cache with the values for nth = 1 and nth = 2 before you delete it.

Let's put this together. We only have four things to do:

  1. Look up nth - 1 in your cache
  2. If it doesn't exist, recursion!
  3. Add the result of nth-1 plus nth-2 to your cache as nth
  4. Return the result

```javascript
  const cache = { 1: 1, 2: 1 };
  let invocations = 0; // Just to count how often we invoke our function

  function fibonacci(nth) {
    invocations += 1; // Count your invocation
    let nth1 = cache[nth - 1]; // Step 1
    if (!nth1) nth1 = fibonacci(nth - 1); // Step 2

    return (cache[nth] = nth1 + cache[nth - 2]); // Step 3 & 4
  }

  console.log(fibonacci(7), invocations); // 13 in 5 invocations
```

**Ok, but does it matter?** You could say that twice the invocations isn't too bad. And indeed the official solution needs always twice + 1 invocations (e.g. nth=70 needs 137 invocations instead of 68). So it grows 2n+1 which isn't bad at all! But remember that invoking functions is costly. It won't kill performance this time, but some day you'll have to implement something like this on a tiny serverless Lambda function that has only a few milliseconds of computation time. Then it will matter.