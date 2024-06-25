// rules:

// Certainly! The Tower of Hanoi is a classic puzzle involving three rods and a number of disks of different sizes. The objective is to move all the disks from the first rod to the third rod, following these rules:

// 1. Only one disk can be moved at a time.
// 2. A disk can only be placed on top of a larger disk or on an empty rod.
// 4. Only the top disk of a rod can be moved.



// Recursive Case:
// 
// If there are n disks, the solution involves three steps:Move the top 𝑛−1 disks from the source rod to the auxiliary rod. 
// 
// This requires 𝑇(𝑛−1) moves.Move the largest disk (the 𝑛n-th disk) from the source rod to the destination rod. This 
// requires 1 move.Move the 𝑛−1n−1 disks from the auxiliary rod to the destination rod. This again requires 𝑇(𝑛−1)T(n−1) 
// moves.
// 
// Thus, the total number of moves 𝑇(𝑛) required to solve the puzzle with 𝑛n disks is:𝑇(𝑛)=𝑇(𝑛−1)+1+𝑇(𝑛−1)=2𝑇(𝑛−1)Induction ProofTo prove that 𝑇(𝑛)=2^𝑛−1 
// 
// using mathematical induction:Base Case:For 𝑛=1n=1, 𝑇(1)=1T(1)=1.The formula gives 21−1=12 1 −1=1, which matches.Inductive 
// Step:Assume that for 𝑛=k, 𝑇(𝑘)=2^𝑘−1 holds true.
// We need to show that 𝑇(𝑘+1)=2^𝑘+1−1.
// Using the recursive relation:𝑇(𝑘+1)=2𝑇(𝑘)+1
// Substitute the inductive hypothesis 𝑇(𝑘)=2^𝑘−1
// This completes the induction step, proving that 𝑇(𝑛)=2^𝑛−1 for all n.Intuitive ExplanationEach time you add a disk to the puzzle, the number of moves required doubles and you add one more move for the largest disk:
// For 1 disk: 11 move (2^1 −1)
// For 2 disks: 33 moves (2^2 −1)
// For 3 disks: 77 moves (2^3 −1)
// For 4 disks: 15 moves (2^4−1)
// Each additional disk effectively doubles the previous total number of moves and adds one more move. Hence, the total number of moves for n disks is 2^ n−1.


//  so what we can say is;
// Move the top 𝑛−1 disks from the source rod to the auxiliary rod.
// Move the 𝑛th disk from the source rod to the destination rod.
// Move the 𝑛−1 disks from the auxiliary rod to the destination rod.

//saying this we ahve A = origin, B= auxilary/helper, c = dest

// lets go for n =3;

// step1: move n-1 = 2, disks from A to B; B=> 1,2
// step2: move nth = 3 , disks from A TO C; c has => 3,
// step3: move n-1 = 2, ,disks frokm B TO C; C=> 1,2,3;

// internally for subproblem n = 2;
// step1: move n-1 = 1, disks from A to B; B=> 1
// step2: move nth = 2 , disks from A TO C; c has => 2,
// step3: move n-1 = 1, ,disks frokm B TO C; C=> 1,2;

// internally for subproblem n = 1;
// step1: move n-1 = 0, disks from A to B; B=> ""
// step2: move nth = 1 , disks from A TO C; c has => 1,
// step3: move n-1 = 0, ,disks frokm B TO C; C=> "";

//each problem has its role n=3, ahve faith that n=2 has moved 2 disks from A to B;
// lly, n=2 has faith on n=1 has moved 1 diska from A TO B;


const  towHanoi = (n,sour,aux,dest)=>{
 //base case
 if(n==1) {
  console.log(`move disk 1 from ${sour} to ${dest}`)
return //we can move one disk directly 
}
// Step 1: Move top n-1 disks from source to auxiliary
 towHanoi(n-1,sour,dest,aux); // middle one acts as a helper you can't directly move 2 disks to B;

 //  / Step 2: Move the nth disk from source to destination
 console.log(`move disk ${n} from ${sour} to ${dest}`)
 
 // Step 3: Move the n-1 disks from auxiliary to destination
 towHanoi(n-1,aux,sour,dest); // middle one acts as a helper you can't directly move 2 disks to C;
 

}

towHanoi(3,'A','B','C')



//iterative methos also

function moveDisk(fromRod, toRod) {
  console.log(`Move disk from ${fromRod} to ${toRod}`);
}

function iterativeTowerOfHanoi(n, source, auxiliary, destination) {
  let rods = {
      [source]: Array.from({ length: n }, (_, i) => n - i),
      [auxiliary]: [],
      [destination]: []
  };

  let totalMoves = Math.pow(2, n) - 1;

  if (n % 2 === 0) {
      [destination, auxiliary] = [auxiliary, destination];
  }

  for (let i = 1; i <= totalMoves; i++) {
      if (i % 3 === 1) {
          moveDiskBetween(rods, source, destination);
      } else if (i % 3 === 2) {
          moveDiskBetween(rods, source, auxiliary);
      } else if (i % 3 === 0) {
          moveDiskBetween(rods, auxiliary, destination);
      }
  }
}

function moveDiskBetween(rods, rod1, rod2) {
  if (rods[rod1].length === 0) {
      let disk = rods[rod2].pop();
      rods[rod1].push(disk);
      moveDisk(rod2, rod1);
  } else if (rods[rod2].length === 0) {
      let disk = rods[rod1].pop();
      rods[rod2].push(disk);
      moveDisk(rod1, rod2);
  } else if (rods[rod1][rods[rod1].length - 1] < rods[rod2][rods[rod2].length - 1]) {
      let disk = rods[rod1].pop();
      rods[rod2].push(disk);
      moveDisk(rod1, rod2);
  } else {
      let disk = rods[rod2].pop();
      rods[rod1].push(disk);
      moveDisk(rod2, rod1);
  }
}

// Example usage:
iterativeTowerOfHanoi(3, 'A', 'B', 'C');
