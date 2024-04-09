// link=>https://leetcode.com/problems/time-needed-to-buy-tickets/description/
//video link=>https://youtu.be/cJkHkwaR1u4


// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.

// Return the time taken for the person at position k (0-indexed) to finish buying tickets.

 

// Example 1:

// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation: 
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.


// if you could read above example we can say whenever in any case our tickets[k]===0, we will stop
// becasue we don't need to do further calulation
// so step 1: while(tickets[k]>0),not <= 0;

// now step 2: decreae every tickets[i] by 1 if it not already zero;
// but ehy this condition because if you can see anyone who has no power to but ticket will leave the Queue
// so you can't just go on and remove tickets[i]==0 element , you will lose track of tickets[k];





//brute 

const timeRequiredToBuy = function(tickets, k) {
  let time= 0;
  while(tickets[k]>0){
     for(let i=0;i<tickets.length;i++){
      if(tickets[k]==0) break;
      if(tickets[i]){
      tickets[i] = tickets[i]-1;
      time++;
      }
     }
  }
  return time;
};


// think more 

// do we really need to go so far, i mean internal loop is running for O(n) times and external for k times
// time complexity O(n*k);
// can we say if we keep tarack of how much time front of tickets[k] and back of tickets[k] person will take;

let arr = [2,3,2], k = 2
// tickets[k] = 2;

// so all the person before k will be able to but how many tikcets till tikets[k] beomes 0;
// tickets[0] will take 2 same as tickets[k] , lly tickets[1] will take 2, but is his value ==0, no
// we will calucalute time for i<=k, wiht min(tickets[i],tickets[k])

// tickets[0] = 2:
// min(2,2) = 2 took two seconds

// tickets[1]=3:
// min(3,2) = 2 took two seconds, we can't take three as his value,till that ime our tickets[k] will become 0


// now got for  i>k,

// now between two and for what time we should consider
// 4-1 = 3, 2-1= 1, should I take 3 seconds, obviously not because we won't need 4 any further if 2 beomes 0
// so  min(tickets[i],tickets[k]-1)




const timeToBuyOptimal = (tickets,k)=>{
  let time = 0;
  
  for(let i=0;i<tickets.length;i++){
    if(i<=k){
      time += Math.min(tickets[i],tickets[k]);
    }else{
      time += Math.min(tickets[i],tickets[k]-1);
      
    }
  }
  return time;
  
}

console.log(timeRequiredToBuy(arr,k))
arr = [2,3,2,4,6,1]
console.log(timeToBuyOptimal(arr,k))