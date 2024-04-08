// link=>https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/

// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.


// Example 1:

// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0 

// Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// Output: 3



// can i say if i count number of students want  SQUARE(1) sandwich and CIRCLE (0) sandwich;
// and then i see in in sandiches stack if the we have ith as circle sandhich deacrese that student number 
// or if no students present to take that so all the squared students will be left
// and vice versa


/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function (students, sandwiches) {
  //zero = circular, one = squared
  let zeroes = 0, ones = 0;
  for (let i = 0; i < students.length; i++) {
    //counte dcircular and squared students
    if (students[i] == 0) zeroes++;
    else ones++;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    //if on ttop circular is present
    if (sandwiches[i] == 0) {
      //then check if there are students who are willing to take that sandwich
      //if not return the quared ones that is they will not be willing to take it and are left without sandwich
      if (zeroes == 0) return ones;
      //otherwise thay take it and sandwich is gone
      zeroes--;
    } else {
      //then check if there are students who are willing to take that sandwich
      //if not return the circular ones that is they will not be willing to take it and are left without sandwich
      if (ones == 0) {
        return zeroes;
      }
            //otherwise thay take it and sandwich is gone
      ones--;
    }
  }
  return 0;
};