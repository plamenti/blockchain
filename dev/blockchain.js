const sha256 = require('sha256');
const uuid = require('uuid/v1');
const currentNodeUrl = process.argv[3];

function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
    this.networkNodes = [];
    this.currentNodeUrl = currentNodeUrl;

    // This is the genesis block that is created always after the initial creation of the Blockchain
    this.createNewBlock(100, '0', '0');
}

/**
 * Creating new block is mining new block!
 *  The block inside in the chain. All needed data will be stored inside this block.
 * 
 * The nonce parameter comes from a Proof-of-work. It's just a number and just proofs that the block is created.
 * The hash is basically the data of the new block, but it's hashed with some algorithm (e.g. sha256).
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
 * @returns The created transaction
 */
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
        transactionId: uuid().split('-').join('')
    };

    return newTransaction;
}

/**
 * Add transaction to pending transactions
 * 
 * @param {*} transactionObj 
 * 
 * @returns The number of the block that this transaction will be added to
 */
Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj){
    this.pendingTransactions.push(transactionObj);

    return this.getLastBlock['index'] + 1;
}

/**
 * Takes block from the blockchain and hash that block into fixed length string sha256
 * 
 * @param {*} previousBlockHash 
 * @param {*} currentBlockData 
 * @param {*} nonce 
 * 
 * @returns sha256 hashed block generated from the data in the block
 */
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);

    return hash;
}

/**
 * Very Important method!
 * Takes currentBlockData and tries to generate a specific hash
 * Will repeatedly hash previousBlockHash and currentBlockData and nonce util it get an acceptable hash generated 
 * that starts for example with 0000 - e.g. 0000ASASTATTDATEHBBDA637DBBBSHHNNSJJJSJDJS72733
 * 
 * @param {*} previousBlockHash 
 * @param {*} currentBlockData 
 * 
 * @returns The nonce value that creates the correct hash
 */
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while(hash.substring(0,4) != '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }

    return nonce;
}

Blockchain.prototype.chainIsValid = function(blockchain){
let validChain = true;

    // Start loop from position 1 since at position 0 is genesis block.
    // Genesis block will be validated separately
    for(var i = 1; i < blockchain.length; i++){
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i-1];
        const currentBlockData = {
            transactions: currentBlock['transactions'],
            index: currentBlock['index']
        };

        const blockHash = this.hashBlock(prevBlock['hash'], currentBlockData, currentBlock['nonce']);
        if(blockHash.substring(0,4) !== '0000'){
            validChain = false;
        }

        if(currentBlock['previousBlockHash'] !== prevBlock['hash']){
            validChain = false;
        }
    }

    // Check genesis block since it is special case
    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transactions'].length ===0;
    if(!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions){
        validChain = false;
    }

    return validChain;
};

Blockchain.prototype.getBlock = function(blockHash){
    let correctBlock = null;

    this.chain.forEach(block => {
        if(block.hash === blockHash){
            correctBlock = block;
        }
    });

    return correctBlock;
}

Blockchain.prototype.getTransaction = function(transactionId){
    let correctTransaction = null;
    let correctBlock = null;

    this.chain.forEach(block =>{
        block.transactions.forEach(transaction => {
            if(transaction.transactionId === transactionId){
                correctTransaction = transaction;
                correctBlock = block;
            };
        });
    });

    return {
        transaction: correctTransaction,
        block: correctBlock
    };
}

Blockchain.prototype.getAddressData = function(address){
    const addressTransactions = [];

    this.chain.forEach( block => {
        block.transactions.forEach (transaction => {
            if(transaction.sender === address || transaction.recipient === address){
                addressTransactions.push(transaction);
            };
        });
    });

    let balance = 0;

    addressTransactions.forEach( transaction => {
        if(transaction.recipient === address){
            balance += transaction.amount;
        } else if( transaction.sender === address){
            balance -= transaction.amount;
        };
    });

    return {
        addressTransactions: addressTransactions,
        addressBalance = balance
    };
};

module.exports = Blockchain;