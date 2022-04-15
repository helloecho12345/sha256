// imported the crypto-js JavaScript library and used its crypto-js/sha256 module to calculate the hash of each block. Since the module returns a number object, I used the toString() method to convert it into a string.
const SHA256 = require('crypto-js/sha256');
class CryptoBlock{
    constructor(index, timestamp, data, precedingHash=" "){
     this.index = index;   // index is a unique number that tracks the position of every block in the entire blockchain.
     this.timestamp = timestamp;   // timestamp	keeps a record of the time of occurrence of each completed transaction.
     this.data = data;   // data provides data about the completed transactions, such as the sender details, recipient’s details, and quantity transacted.
     this.precedingHash = precedingHash;   // precedingHash points to the hash of the preceding block in the blockchain, something important in maintaining the blockchain’s integrity.
     this.hash = this.computeHash();     
    }
    // computeHash method to calculate the hash of the block based on its properties, as given in the data above
    computeHash(){
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }   
}


class CryptoBlockchain{
  constructor(){
      this.blockchain = [this.startGenesisBlock()];     
  }
  startGenesisBlock(){
      return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
  }
  obtainLatestBlock(){
      return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock){
      newBlock.precedingHash = this.obtainLatestBlock().hash;
      newBlock.hash = newBlock.computeHash();        
      this.blockchain.push(newBlock);
  }
}


