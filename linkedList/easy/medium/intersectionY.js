// link=>

//brute1

// traverse first and store all values;
// traverse second and if you find the same value there isa  intersection;
// space acquired

function getIntersectionNode(headA, headB) {
  const map = new Map();
  
  let currentA = headA;
  
  // Traverse the first list and store each node in the map
  while (currentA !== null) {
    map.set(currentA, true);
    currentA = currentA.next;
  }
  
  let currentB = headB;
  
  // Traverse the second list and check for intersection
  while (currentB !== null) {
    if (map.has(currentB)) {
      return currentB;  // Intersection found
    }
    currentB = currentB.next;
  }
  
  return null;  // No intersection
}



// brute 2;
// 1. find length of both LL le t n2>n1;
// 2. travers n2-n1 step forward for bigger one, so taht ditance or length it kept equal
// 3. travesre both while t1!=t2 and if they meet return t1||t2;


// optimized;

// traveserse simulataneously withouting knowing length;
// but one can end before another one then do onething align opposite LL pointer to head of another;

// why? because as t1 raches null, it stars pointg to t2, now gaain t2 and t1 step forward one step
// t2 beomes null and point sto head1, yheya gaian travel, and eventually their distance becomes eual
// that is they align for the same node.

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pointerA = headA;
  let pointerB = headB;

  // Traverse both lists
  while (pointerA !== pointerB) {
      // Move to the next node or switch to the other list's head
      pointerA = pointerA ? pointerA.next : headB;
      pointerB = pointerB ? pointerB.next : headA;
  }

  // Either both pointers meet at the intersection node, or both are null (no intersection)
  return pointerA;
}