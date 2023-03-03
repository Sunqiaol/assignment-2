/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let result = [];
  for(let i = 0;i<this.length;i++){
    result.push(callbackFn(this[i],i,this));
  }

  return result;
  // Place your code here.
};


Array.prototype.myFilter = function(callbackFn) {
  let result = [];
  let size = this.length
  for(let i =0;i<size;i++){
    if(i >= this.length){
      continue;
    }
    if(callbackFn(this[i],i,this)){
      result.push(this[i]);
    }
  }
  return result;
  // Place your code here.
};


Array.prototype.mySome = function(callbackFn) {
  for(let i =0;i<this.length;i++){
    if(callbackFn(this[i],i,this)){
      return true;
    }
  }
  return false;
  // Place your code here.
};


// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  let size = this.length;
  for(let i =0;i<size;i++){
    if(i >= this.length){
      continue;
    }
    if(!callbackFn(this[i],i,this)){
      return false;
    }
  }
  return true;
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let accumulator  = this[0];
  size = this.length;
  for(let i = 1;i<size;i++){
    accumulator  = callbackFn(accumulator ,this[i],i,this)
  }
  return accumulator ;
  
  // Place your code here.
};





// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i =0;i<this.length;i++){
    if(this[i] === searchElement){
      return true;
    }
  }
  return false;
  // Place your code here.
};



// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  size = this.length
  for(let i =0 ;i < size;i++){
    if(this[i] === undefined){
      return -1
    }
    if(i>=size){
      continue;
    }
    if(this[i] == searchElement){
      return i;
    }
  }
  return -1;
  // Place your code here.
};




// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  size = this.length
  result = -1
  for(let i =0 ;i < size;i++){
    if(this[i] === undefined){
      return -1
    }
    if(i>=size){
      continue;
    }
    if(this[i] == searchElement){
      result = i;
    }
  }
  return result;
  // Place your code here.
};



// KEYS //
Object.myKeys = function(object) {
  var keys = [];
  for(var key in object){
    if(typeof object[key] !== 'function'){
      keys.push(key);
    }
  }
  return keys
};





// VALUES //
Object.myValues = function(object) {
  var value = [];
  for(var key in object){
    if(typeof object[key] !== 'function'){
      value.push(object[key]);
    }
  }
  return value
  // Place your code here.
};

