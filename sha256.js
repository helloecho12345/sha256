const SHA256 = require('crypto-js/sha256');
class CryptoBlock{
    constructor(index, timestamp, data, precedingHash=" "){
     this.index = index;   // index is a unique number that tracks the position of every block in the entire blockchain.
     this.timestamp = timestamp;   // timestamp	keeps a record of the time of occurrence of each completed transaction.
     this.data = data;   // data provides data about the completed transactions, such as the sender details, recipient’s details, and quantity transacted.
     this.precedingHash = precedingHash;   // precedingHash points to the hash of the preceding block in the blockchain, something important in maintaining the blockchain’s integrity.
     this.hash = this.computeHash();     
    }
    computeHash(){
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }   
}


