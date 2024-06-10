class MyQueue{
  constructor(){
    this.arr = new Array();
    this.front = 0;
    this.rear =  0;
  }
}

MyQueue.prototype.enqueue = function(x){
  this.arr[this.rear] = x;
  this.rear++;
}

MyQueue.prototype.dequeue = function(){
 if(this.front==this.rear) return -1;
 let dequeue = this.arr[this.front];
 this.front++;
 return dequeue;
}


MyQueue.prototype.size = function(){

 return this.arr.length;
}

MyQueue.prototype.isEmpty = function(){

 return this.arr.length==0
}





const q = new MyQueue();

q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q,q.size(),q.isEmpty());


//functional 

function MyQueue2(){
  this.arr = new Array();
  this.front = 0;
  this.rear =  0;
}


MyQueue2.prototype.enqueue = function(x){

   this.arr[this.rear] = x;
   this.rear++;
}

MyQueue2.prototype.dequeue = function(){
 if(this.rear==this.front) return -1;
 let dequeue = this.arr[this.front];
 this.front++;
 return dequeue;
}


MyQueue2.prototype.size = function(){

 return this.arr.length;
}

MyQueue2.prototype.isEmpty = function(){

 return this.arr.length==0
}




console.log("fucntional")
const q2 = new MyQueue();

q2.enqueue(2);
q2.enqueue(3);
q2.enqueue(4);
console.log(q2,q2.size(),q2.isEmpty());

