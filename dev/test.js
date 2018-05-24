const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// Test hashBlock
const previousBlockHash = 'KJHDJHSKJHKHSJHDSJHDSHDKDHSD';
const currentBlockData = [
    {
        amount: 10,
        sender: 'SJKDHSKHDLSHDKSJD',
        recipient: 'DHSDSDJSDGHJSGDHSD'
    },
    {
        amount: 30,
        sender: '3455SJKDHSK43534543HDLSHDKSJD',
        recipient: '45DHSDSDJSDGH4354JSGDHSD'
    },
    {
        amount: 200,
        sender: '90909SJKDHSKHDLSHDKSJD',
        recipient: '8878688DHSDSDJSDGHJSGDHSD'
    }
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// Test createNewBlock and createNewTransaction
// bitcoin.createNewBlock(2389, "UIDUD98798HJFD", "HJDHKLAIOEIRH677");

// bitcoin.createNewTransaction(100, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewBlock(213, "12DUDSDS98HJFD", "KSHDJSHd565666");

// bitcoin.createNewTransaction(50, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewTransaction(300, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewTransaction(2000, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewBlock(4334, "09SDSDSUUIWEUU", "NMNMSD8787SDDSD")

//console.log(bitcoin.chain[2]);