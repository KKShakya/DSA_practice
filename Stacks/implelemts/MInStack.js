// liunk=>https://leetcode.com/problems/min-stack/description/


var MinStack = function() {
  this.items = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.items.push({
      val,
      min: this.items.length==0?val:Math.min(val,this.getMin())
  });
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
 
  return this.items.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.items[this.items.length-1].val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
 return this.items[this.items.length-1].min
};
