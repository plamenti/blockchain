function Blockchain(){
    this.chain = [];
    this.newTransactions = [];
}

/**
 *  The block inside in the chain. All needed data will be stored inside this block.
 * 
 * The nonce parameter comes from a Proof-of-work. It's just a number and just proofs that the block is created.
 * The hash is basically the data of teh new block, but it's hashed with some algorithm (e.g. sha256).
 *      All transactions will be compressed in a single string
 * Previous block hash is hashed into hash too.
 * Then the created new Block is pushed in the chain.
 * 
 * After hashing the data pendingTransactions array is cleared.
 * 
 * @param {*} nonce 
 * @param {*} previousBlockHash 
 * @param {*} hash 
 * 
 * @returns newBlock
 */
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}