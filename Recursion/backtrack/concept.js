// Backtracking is a general algorithm for finding solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.

function backtrack(arguments) {
  if (condition === true) { // Condition when we should stop our exploration.
      result.push(current);
      return;
  }
  for (let i = num; i <= last; i++) {
      current.push(i); // Explore candidate.
      backtrack(arguments);
      current.pop();   // Abandon candidate.
  }
}

// One thing to remember before we can jump to some backtracking problems:

// Permutation: can be thought of number of ways to order some input.
// Example: permutations of ABCD, taken 3 at a time (24 variants): ABC, ACB, BAC, BCA, ...

// Combnation: can be thought as the number of ways of selecting from some input.
// Example: combination of ABCD, taken 3 at a time (4 variants): ABC, ABD, ACD, and BCD.

// Subset: can be thought as a selection of objects form the original set.
// Example: subset of ABCD: 'A', 'B', 'C', 'D,' 'A,B' , 'A,C', 'A,D', 'B,C', 'B,D', 'C,D', 'A,B,C', ...

// From now let's start to apply this algorithm to solve some backtracking problems.

// Permutations:
// this set of problems related to generating (subset of) all possible permutations. Let's have a look at fist problem: 

// Permutations
// In this problem we should return ALL the possible permutations from DISTINCT integer array.

function permute(nums) {
  let res = [];
  let cur = [];
  let used = new Set();
  function backtrack() {
      if (cur.length === nums.length) { // (1)
          res.push([...cur]);
          return;
      }
      for (let i = 0; i < nums.length; i++) {
          if (!used.has(nums[i])) {  // (2)
              cur.push(nums[i]);
              used.add(nums[i]);
              backtrack();
              cur.pop();          // (3)
              used.delete(nums[i]);
          }
      }
  }
  backtrack();
  return res;
}

// Or we can implement backtrack() without using set<>.


function permute2(nums) {
  let res = [];
  function backtrack(ind) {
      if (ind === nums.length) {
          res.push([...nums]);
          return;
      }
      for (let i = ind; i < nums.length; i++) { // (2)
          [nums[i], nums[ind]] = [nums[ind], nums[i]];
          backtrack(ind + 1);
          [nums[i], nums[ind]] = [nums[ind], nums[i]]; // (3)
      }
  }
  backtrack(0);
  return res;
}

// You might notice that we change the original template for a bit:

// We stop our exploration if the current array size is equal to the input array size, and we add current array to our result set.
// As input array consist of district elements we can use set to track if this element has used before.
// Backtrack: when we explore element we should remove it from vector and  set.
// Note: we can also use swap(), but it is easier to show the pattern using set.
// Another variation of the problem is Permutations II.
// The only difference between first problem is that we MAY have DUPLICATES in the input array.


function backtrack(nums, cur, res, hmap) {
  if (cur.length === nums.length) { // (1)
      res.push([...cur]);
      return;
  }
  for (let [num, freq] of hmap.entries()) { // (2)
      if (freq === 0) continue;     // (3)
      hmap.set(num, freq - 1);
      cur.push(num);
      backtrack(nums, cur, res, hmap);
      cur.pop();              // (4)
      hmap.set(num, freq);
  }
}

// Iterate over the original list, but check if the previous element is the same as current. 
// We need to make this check because using the same element will give us the same result as last iteration.

function backtrack2(nums, temp, res, freq) {
  if (temp.length === nums.length) {
      res.push([...temp]);
      return;
  }
  for (let i = 0; i < nums.length; i++) {
      if (freq[nums[i]] === 0 || (i !== 0 && nums[i] === nums[i - 1])) continue;
      temp.push(nums[i]);
      freq[nums[i]]--;
      backtrack2(nums, temp, res, freq);
      freq[nums[i]]++;
      temp.pop();
  }
}


// Let's check this algorithm and compare to the first problem:

// Same as in the frist solution.
// Instead of iteration through the original array, we are iterating using unordered_map. This unordered_map was build to have element frequencies.
// If element frequency is not equal to zero we can use it as potential candidate and we should decrease the frequency, so it won't used again and again.
// Backtrack: remove candidate from the current set of candidates (std::vector) and increase candidate frequency.
// Note: we can solve this problem by sorting the input array and change if check in point number 3. We will have a look at this approach in different problem.
// Combinations: we are given two integers n and k, return ALL possible combinations of k numbers out of the range [1, n]. If you want to solve this problem before jumping to the solution, here is the link: Combinations



// Or we can allocate temp vector in advance and fill the position.


function combine2(n, k) {
  let res = [];
  let temp = new Array(k);

  function backtrack(ind, prev) {
      if (ind >= k) {
          res.push([...temp]);
          return;
      }
      for (let p = prev + 1; p <= n; p++) {
          temp[ind] = p;
          backtrack(ind + 1, p);
      }
  }

  backtrack(0, 0);
  return res;
}



// Let's check what is the difference compared to earlier examples:

// Almost the same as in the previous solutions, the key difference is that we need to put current set of elements to the result set when the size will be equal to k.
// The second difference is that starting point of iteration will be passed as an argument to each backtrack() call. Or we can pass previous value as in the backtrack2() and start with prev + 1.
// Backtrack: remove element from the current set of elements. The same as in first example.
// Let's next check another example: Combination Sum II. This time instead of using hash table we will sort th elements before invoking dfs() for the first time.
// We are given a collection of candidates and a target number, find ALL UNIQUE combinations in candidates where the candidate numbers sum to target.

function dfs(ind, cur, res, cnd, target) {
  if (target === 0) { // (1)
      res.push([...cur]);
      return;
  }
  for (let i = ind; i < cnd.length; i++) { // (2)
      if (i > ind && cnd[i] === cnd[i - 1]) continue; // (3)
      if (target - cnd[i] >= 0) {
          cur.push(cnd[i]);
          dfs(i + 1, cur, res, cnd, target - cnd[i]);
          cur.pop(); // (4)
      }
  }
}

// Let's check for is the difference between others examples:

// Here we don't need to check the current array size. If target result is equal to 0 then it means that we find a valid combination and can add it to the current result set.
// Almost the same as in earlier example, but we will be iterating untill we reach the end of the candidates.
// Remember that we sort candidates array. One trick here i > ind is needed because we are only allowed to use each number in candidates once. Because of the > and not >= we are allowing ourselves to use the element even if it is the same as previous.
// Backtrack: the same as in earlier examples.
// Subsets: we are given an integer array of unique elements, return all possible subsets (the power set). If you want to solve this problem before check the solution, here is the link: Subsets


function dfs(ind, nums, cur, res) {
  res.push([...cur]); // (1)
  for (let i = ind; i < nums.length; i++) { // (2)
      cur.push(nums[i]);
      dfs(i + 1, nums, cur, res);
      cur.pop(); // (3)
  }
}

// Let's check the steps again:

// Now we are adding element to the result unconditionally. This is because we need to generate the subsets of integer array.
// The same as in previous examples: we are using new element on each dfs() call.
// Backtrack: the same as in previous example.
// The implementation will be a bit different if the input array has duplicates Subsets II , but we already know how to handle them using sorting:


function dfs(ind, cur, res, nums) {
  res.push([...cur]);
  for (let i = ind; i < nums.length; i++) {
      if (i > ind && nums[i] === nums[i - 1]) continue;
      cur.push(nums[i]);
      dfs(i + 1, cur, res, nums);
      cur.pop();
  }
}



// For the last problem in this article let's check more complex / interesting problem that can be solved using backtracking: Word Squares. We are given an array of unique strings words, we need to return all the word squares you can build from words. Note: result word square should be symmetrical across its diagonal.

function wordSquares(words) {
  let res = [];
  let cur = [];
  let hmap = new Map();

  words.forEach(w => {
      for (let i = 0; i < w.length; i++) {
          let prefix = w.substr(0, i);
          if (!hmap.has(prefix)) hmap.set(prefix, []);
          hmap.get(prefix).push(w);
      }
  });

  function dfs(ind) {
      if (ind === words[0].length) { // (2)
          res.push([...cur]);
          return;
      }
      let prefix = '';
      for (let i = 0; i < ind; i++) {
          prefix += cur[i][ind]; // (3)
      }
      if (hmap.has(prefix)) {
          for (let w of hmap.get(prefix)) { // (4)
              cur.push(w);
              dfs(ind + 1);
              cur.pop(); // (5)
          }
      }
  }

  words.forEach(word => {
      cur = [word];
      dfs(1);
  });

  return res;
}



// The dfs() algorithm here is almost the same, but let's check the key points:

// Prerequisite: we will use unordered_map to generate prefixes for each word before the first call of dfs().
// If our current vector of strings has the same size as original list of words, then we should add it to our result set and stop exploring.
// One extra step compared to all others examples is that we are generating the prefix that is needed for the next word to satisfy the problem requirement.
// Iterating through the possible candidates that starts with the given prefix.
// Backtrack: the same as for others problems.
// Links to the problems above + some more problems to practice:

// Permutations: https://leetcode.com/problems/permutations/
// Permutations II: https://leetcode.com/problems/permutations-ii/
// Combinations: https://leetcode.com/problems/combinations/
// Combination Sum: https://leetcode.com/problems/combination-sum/
// Combination Sum II: https://leetcode.com/problems/combination-sum-ii/submissions/
// Combination Sum III: https://leetcode.com/problems/combination-sum-iii/
// Subsets: https://leetcode.com/problems/subsets/submissions/
// Subsets II: https://leetcode.com/problems/subsets-ii/submissions/
// Palindrome Partitioning: https://leetcode.com/problems/palindrome-partitioning/submissions/
// Generate parenthesis: https://leetcode.com/problems/generate-parentheses/
// Letter Combinations: https://leetcode.com/problems/letter-combinations-of-a-phone-number/solution/
// Word search: https://leetcode.com/problems/word-search/
// N-Queens: https://leetcode.com/problems/n-queens/
// Sudoku solver: https://leetcode.com/problems/sudoku-solver/
// Word Squares: https://leetcode.com/problems/word-squares/