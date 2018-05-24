const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, "UIDUD98798HJFD", "HJDHKLAIOEIRH677");

bitcoin.createNewTransaction(100, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
bitcoin.createNewBlock(213, "12DUDSDS98HJFD", "KSHDJSHd565666");

bitcoin.createNewTransaction(50, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
bitcoin.createNewTransaction(300, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
bitcoin.createNewTransaction(2000, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
bitcoin.createNewBlock(4334, "09SDSDSUUIWEUU", "NMNMSD8787SDDSD")

console.log(bitcoin.chain[2]);