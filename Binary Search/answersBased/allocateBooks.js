// Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
// Allocate books in such a way that:

// Each student gets at least one book.
// Each book should be allocated to only one student.
// Book allocation should be in a contiguous manner.
// You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1


// var arr = [25, 46, 28, 49, 24];
// var n = 5;
// var m = 4;
// so conditions are
// first)
// stu 1 => 25 + 46,
// stu 2 => 28+49,
// stu 3 => 24,
// stu 4 => does not get anything    this cas eis not allowed

// second)
// stu 1 => 25 ,
// stu 2 => 25,
// stu 3 => 49,
// stu 4 => 28,  cannot  assign same book to another, this cas eis not allowed

// third)
// stu 1 => 25 ,
// stu 2 => 28,
// stu 3 => 46,
// stu 4 => 24+49,  not coniguous this cas eis not allowed


//***range***
// low=>
// if i start with 1 , no  because for at least to hold a book you need 24 pages = min(arr)
// if i start with min(arr) = 24, the other or any person will not be able to hold any other book
// because The max allowed pages is 24;
// so we satrt with max(arr) = 49, So others can hold 25,46,28,24, pages which is less than max_aloowed pages


// high=>
// if we have to allocate all books to one student than max a student can hold will be all books (sum of arr)



// *************    TC => O(sum-max+1)*O(n)   ***********
// brute
function countStudents(arr, pages) {
  var n = arr.length; // size of array
  var students = 1;
  var pagesStudent = 0;
  for (var i = 0; i < n; i++) {
      if (pagesStudent + arr[i] <= pages) {
          // add pages to current student
          pagesStudent += arr[i];
      } else {
          // add pages to next student
          students++;
          //and a student will be holding a book
          pagesStudent = arr[i];
      }
  }
  return students;
}

function findPages(arr, n, m) {
  // book allocation impossible
  if (m > n) return -1;

  var low = Math.max(...arr);
  var high = arr.reduce((a, b) => a + b, 0);

  for (var pages = low; pages <= high; pages++) {
      if (countStudents(arr, pages) === m) {
          return pages;
      }
  }
  return low;
}


// can we do binary search , yes 

// eleinimate right halaf 
// lo = 49, hi  = 172,
// mid = 110, max_allowed pages 
// stu 1 => 25+46+28 <=110
// stu 2 =>  49+24 <= 110,  we get 2 students but we need exactly 4 , SO

//  case 1 =>  decrease the holding power of each student and thus increases the no of students, give less pages so more student can have books

// case 2 => same if we exceed no of students increasrt the holding power of each student and thus decrease the no of students, give more pages so less student can have books



// ****************    TC => O(log(sum-max+1))*O(n) ***********

//optimal

function findPagesOptimal(arr, n, m) {
  // book allocation impossible
  if (m > n) return -1;

  var low = Math.max(...arr);
  var high = arr.reduce((a, b) => a + b, 0);
  while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      var students = countStudents(arr, mid);
      if (students > m) {
        //case 2
          low = mid + 1;
      } else {
        //case 1
          high = mid - 1;
      }
  }
  return low;
}


var arr = [25, 46, 28, 49, 24];
var n = 5;
var m = 4;
var ans = findPagesOptimal(arr, n, m);
console.log("The answer is: " + ans);