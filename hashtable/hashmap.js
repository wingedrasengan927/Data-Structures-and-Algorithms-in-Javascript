// Reference: andrei neagoie's course on udemy

/*
----- HASH FUNCTION -----
1. A hash function takes in an input and outputs a random pattern
   e.g, "hello" --> 411o34n235uh8495hew234
2. Generally, the random pattern is formed in such a way that is a reference to address in the memory 
2. A hash function is one way, meaning you cannot trace back the input given the output
3. the output will remain the same for a particular input (idempotent)
4. we need the hash function to be really fast

------ COLLISION ------
1. If two or more Inputs output the same hash, collision occurs
2. we cannot avoid collisions with hash table with limited memory and more data
3. When we have a collision, the inputs with the same hash are stored as a linked list
4. this increases the lookup complexity to O(n)
*/

class HashTable{
   constructor(size){
      this.data = new Array(size);
   }

   _hash(key) { // hash function, generates a pattern given an input
      let hash = 0;
      for (let i=0; i<key.length; i++) {
         hash = (hash + key.charCodeAt(i) * i) % this.data.length; // note that the hash is always less than 
      }
      return hash;
   }

   set(key, value) {
      const hash = this._hash(key);
      if (!this.data[hash]) {
         this.data[hash] = [];
      }
      this.data[hash].push([key, value]);
      return this.data;
   }

   get(key) {
      const hash = this._hash(key);
      const currentBucket = this.data[hash]
      if (currentBucket) {
         return currentBucket.filter(pair => {
            return pair[0] == key;
         })[0][1];
      }
      return undefined;
   }

   keys() { // O(n) n = memoryspace
      const allKeys = [];
      for (let i=0; i<this.data.length; i++) {
         if (this.data[i]) {
            allKeys.push(...this.data[i].map(pair => pair[0]));
         }
      }
      return allKeys;
   }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 2341);
myHashTable.set("qrapes", 23454);
myHashTable.set("wrapes", 2356);
myHashTable.set("mangoes", 1244);
console.log(myHashTable.get("wrapes"))
console.log(myHashTable.keys())