// link => https://www.codingninjas.com/studio/problems/ninja-and-the-second-order-elements_6581960?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTab=1

// Brute froce would be apply for loop for Each variable finidng
// optimal of it would be find largest and smallest in one and than two for llops for second ones


//best approach
const getSecondOrderElements = (n, a)=> {
      // Write your code here.

       let largest = -Infinity;
       let smallest = Infinity;
       let secLargest = -Infinity;
       let secSmallest = Infinity;

      for(let i=0;i<a.length;i++)
      {
        //if bigger thasn largest update largest 
        //at the same time update secLArgset as largest is going to change 
        // from previous largest to current largest
        //so previous largest is probable secLargest 
          if(a[i]>largest){
              secLargest = largest;
              largest = a[i];
          }

           else if(a[i]>secLargest && secLargest<largest){
              secLargest = a[i];
          }

          
      }
    

 

  for(let i=0;i<a.length;i++)
      {
          if(a[i]<smallest){
              secSmallest = smallest;
              smallest = a[i];
          }

           else if(a[i]<secSmallest && secSmallest>smallest){
              secSmallest = a[i];
          }
          
      }

    
      
      console.log( [secLargest,secSmallest]);

  }


  getSecondOrderElements(5,[1,2,3,4,5])