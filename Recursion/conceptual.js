// What is reucrsion?
//  a function calling itself or function recur=sively calling itself
// it is used when You want to solve a big problem and that can be divided into smalller sub Problems
 // yous hould build faith in subproblems that will complete their work and bring the snaser;


// HOw call stack works in recursion; 
//

// lets say you want to print decreasing and increasing nature of a number n = 5;
nas = 5,4,3,2,1,1,2,3,4,5;

const pid  = (n)=>{
   
  ///base case
 console.log(n) //print call it line 1
   pid(n-1)   //left call it line 2
console.log(n) //print call it line 3

}
// faith : pid(5) has faiht that pid(4) will print 4,3,2,1,1,2,3,4;
// pid(4): has faith pid(3) will print 3,2,1,1,2,3 => pid(2)= 2,1,1,2 => pid(1)= 1,1;
//eventually you will have your answer;

//call satck
// function called pid(5) first line prints n = 5;
// seond line makes a call pid(4), again its first line prints n =4;

// function called pid(3) first line prints n = 3;
// function called pid(2) first line prints n = 2;
// function called pid(1) first line prints n = 1;


//********** */ base case**********

// function called pid(0) , now the base hits which say if n==0 return 1;

//now calls will return to heir previous funstions
// first return got 1 , third line prints n =1;
// seond return got 2 , third line prints n =2;
// third return got 3 , third line prints n =3;
// fourth return got 4 , third line prints n =4;
// fifth return got 5 , third line prints n =5;


//returns are nothing but the fucntion calls pid that has been lying inside the stack due to line 2;

// you printed 5,4,3,2,1,1,2,3,4,5

//this is how recursion internally works




