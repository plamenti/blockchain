function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
}

/**
 * Creating new block is mining new block!
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
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

/**
 * @returns The last bloc in the chain
 */
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length -1];
}

/**
 * Create new transaction and return 
 * 
 * @param {*} amount 
 * @param {*} sender 
 * @param {*} recipient 
 * 
 * @returns The number of the block that this transaction will be added to
 */
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

module.exports = Blockchain;