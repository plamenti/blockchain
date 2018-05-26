const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];
const rp = require('request-promise');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

 
app.get('/blockchain', function (req, res) {
    res.send(bitcoin);  
});

app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: `Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };

    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    bitcoin.createNewTransaction(12.5, "00", nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({
        note: "New block mined successfully",
        block: newBlock
    });
});

// Register a node to itself and broadcast it the rest nodes in the network
app.post('/register-and-broadcast-node', function(req, res){
    const newNodeUrl = req.body.newNodeUrl;
    if(bitcoin.networksNodes.indexOf(newNodeUrl) == -1){
        bitcoin.networksNodes.push(newNodeUrl);
    }
    
    const regNodesPromises = [];
    bitcoin.networksNodes.forEach(networkNodeUrl => {
        // hit the /register-node endpoint
        const requestOptions = {
            uri: networkNodeUrl + '/register-node',
            method: 'POST',
            body: {newNodeUrl: newNodeUrl},
            json: true
        };

        regNodesPromises.push(rp(requestOptions));
    });

    Promise.all(regNodesPromises)
    .then(data =>{
        const bulkRegisterOptions = {
            uri: networkNodeUrl + '/register-nodes-bulk',
            method: 'POST',
            body: {allNetworksNodes: [...bitcoin.networksNodes, bitcoin.currentNodeUrl]},
            json: true
        };

        return rp(bulkRegisterOptions);
    })
    .then(data => {
        re.json({note: 'New node registered with network successfully'});
    });
});

// Register a node with the network
app.post('/register-node', function(req, res){
    const newNodeUrl = req.body.newNodeUrl;

    if(bitcoin.networksNodes.indexOf(newNodeUrl) == -1
        && bitcoin.currentNodeUrl !== newNodeUrl){
        bitcoin.networksNodes.push(newNodeUrl);
    }

    res.json({note: 'New node registered successfully.'});
});

// Register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res){

});
 
app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
});