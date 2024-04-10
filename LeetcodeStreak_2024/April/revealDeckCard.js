// link=>https://leetcode.com/problems/reveal-cards-in-increasing-order/description/?envType=daily-question&envId=2024-04-10

// You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].

// You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.

// You will do the following steps repeatedly until all cards are revealed:

// Take the top card of the deck, reveal it, and take it out of the deck.
// If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
// If there are still unrevealed cards, go back to step 1. Otherwise, stop.
// Return an ordering of the deck that would reveal the cards in increasing order.

// Note that the first entry in the answer is considered to be the top of the deck.


// now if we can say that If somehow i get the smallest first => sort it.
// but can i get always increasing because top is revealed than another top is thrown to bottom of deck.

// ex=>  2,3,5,7,11,13,17; sorted
// lets try to move
// [2] => 5,7,11,13,17,3:  top revealed and second top to bottom
//[2,5]=>11,13,17,3,7
//[2,5,11] => 17,3,7,13
//[2,5,11,17] => 7,13,3
//[2,5,11,17,7] => 3,13 broke the increasing order:   so we need something special to maintain this

// if all is sorted and i move alternate positions or according to the queue indexex 0 to n;
//let's see

// que = [0,1,2,3,4,5,6]; 0 to n

// now keep track of ith index of deck;

// deck = [2,3,5,7,11,13,17], result = [],que= [0,1,2,3,4,5,6];
// put que[0] the index in result as deck[i];
// deck[i] = 2, que[0] = 0, result[0] = deck[i];
// and move next top que[1] to bottom;

//perform a dry run on this and you will get this


const deckRevealedIncreasing = function(deck) {
  // sort the deck
  deck.sort((a,b)=>a-b);

  let que = Array.from({length:deck.length}, (_, i) => i);
  // console.log(que);
  let result = [];

  let i=0;
  while(i<deck.length){
      //reveal card top
      let k = que.shift();
      result[k] = deck[i];
      i++;
    
      if (que.length > 0) {
          // Bottom sending card, second top
          let bottom = que.shift();
          que.push(bottom);
      }
  }
return result;

};


