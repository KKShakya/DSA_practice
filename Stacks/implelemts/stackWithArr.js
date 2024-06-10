class MyStack{
  constructor(){
    this.arr = new Array();
    this.top = -1;
  }
}

MyStack.prototype.push = function(x){
  this.top++;
   this.arr[this.top] = x;
}

MyStack.prototype.pop = function(){
 if(this.top==-1) return -1;
 let pop = this.arr[this.top];
 this.top--;
 return pop;
}


MyStack.prototype.size = function(){

 return this.arr.length;
}

MyStack.prototype.isEmpty = function(){

 return this.arr.length==0
}





const st = new MyStack();

st.push(2);
st.push(3);
st.pop();
st.push(4);
console.log(st,st.size(),st.isEmpty());


//functional 

function MyStack2(){
  this.arr = new Array();
  this.top = -1;
}


MyStack2.prototype.push = function(x){

   this.arr[this.top] = x;
}

MyStack2.prototype.pop = function(){
 if(this.top==-1) return -1;
 let pop = this.arr[this.top];
 this.top--;
 return pop;
}


MyStack2.prototype.size = function(){

 return this.arr.length;
}

MyStack2.prototype.isEmpty = function(){

 return this.arr.length==0
}




console.log("fucntional")
const st2 = new MyStack();

st2.push(2);
st2.push(3);
st2.pop();
st2.push(4);
console.log(st2,st2.size(),st2.isEmpty());

