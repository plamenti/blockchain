const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// Test chainIsValid
// var bc1 = {
// 	"chain": [{
// 			"index": 1,
// 			"timestamp": 1527410281080,
// 			"transactions": [],
// 			"nonce": 100,
// 			"hash": "0",
// 			"previousBlockHash": "0"
// 		},
// 		{
// 			"index": 2,
// 			"timestamp": 1527410365223,
// 			"transactions": [],
// 			"nonce": 18140,
// 			"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
// 			"previousBlockHash": "0"
// 		},
// 		{
// 			"index": 3,
// 			"timestamp": 1527410369167,
// 			"transactions": [{
// 				"amount": 12.5,
// 				"sender": "00",
// 				"recipient": "43ce2f80618911e8a86b61dd1ecbd060",
// 				"transactionId": "75fa9390618911e8a86b61dd1ecbd060"
// 			}],
// 			"nonce": 3826,
// 			"hash": "0000b7b1a676e6b56d79369f01876f98d3a2443926d51064218ddc7680fc0292",
// 			"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
// 		},
// 		{
// 			"index": 4,
// 			"timestamp": 1527410437158,
// 			"transactions": [{
// 					"amount": 12.5,
// 					"sender": "00",
// 					"recipient": "43ce2f80618911e8a86b61dd1ecbd060",
// 					"transactionId": "784ff540618911e8a86b61dd1ecbd060"
// 				},
// 				{
// 					"amount": 10,
// 					"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
// 					"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL",
// 					"transactionId": "915bb380618911e8a86b61dd1ecbd060"
// 				},
// 				{
// 					"amount": 20,
// 					"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
// 					"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL",
// 					"transactionId": "94489a40618911e8a86b61dd1ecbd060"
// 				},
// 				{
// 					"amount": 30,
// 					"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
// 					"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL",
// 					"transactionId": "9e8796a0618911e8a86b61dd1ecbd060"
// 				}
// 			],
// 			"nonce": 13142,
// 			"hash": "000076fee5c6902e5f25d67b0bf9306887f76c7949f69464ca301a4789a25307",
// 			"previousBlockHash": "0000b7b1a676e6b56d79369f01876f98d3a2443926d51064218ddc7680fc0292"
// 		},
// 		{
// 			"index": 5,
// 			"timestamp": 1527410470584,
// 			"transactions": [{
// 					"amount": 12.5,
// 					"sender": "00",
// 					"recipient": "43ce2f80618911e8a86b61dd1ecbd060",
// 					"transactionId": "a0d64190618911e8a86b61dd1ecbd060"
// 				},
// 				{
// 					"amount": 40,
// 					"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
// 					"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL",
// 					"transactionId": "aa037fd0618911e8a86b61dd1ecbd060"
// 				},
// 				{
// 					"amount": 50,
// 					"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
// 					"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL",
// 					"transactionId": "ac7b84b0618911e8a86b61dd1ecbd060"
// 				},
// 				{
// 					"amount": 60,
// 					"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
// 					"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL",
// 					"transactionId": "af1171d0618911e8a86b61dd1ecbd060"
// 				},
// 				{
// 					"amount": 70,
// 					"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
// 					"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL",
// 					"transactionId": "b141e660618911e8a86b61dd1ecbd060"
// 				}
// 			],
// 			"nonce": 3048,
// 			"hash": "0000d276cc198c572f4a3df2cb647e027d9f772dea15c3e00d6685b29053bd93",
// 			"previousBlockHash": "000076fee5c6902e5f25d67b0bf9306887f76c7949f69464ca301a4789a25307"
// 		},
// 		{
// 			"index": 6,
// 			"timestamp": 1527410480383,
// 			"transactions": [{
// 				"amount": 12.5,
// 				"sender": "00",
// 				"recipient": "43ce2f80618911e8a86b61dd1ecbd060",
// 				"transactionId": "b4c2a8b0618911e8a86b61dd1ecbd060"
// 			}],
// 			"nonce": 256950,
// 			"hash": "000006e10f4017bf433da6c3445e83e0f47179baea8a693dea6b967d8c322c75",
// 			"previousBlockHash": "0000d276cc198c572f4a3df2cb647e027d9f772dea15c3e00d6685b29053bd93"
// 		},
// 		{
// 			"index": 7,
// 			"timestamp": 1527410482670,
// 			"transactions": [{
// 				"amount": 12.5,
// 				"sender": "00",
// 				"recipient": "43ce2f80618911e8a86b61dd1ecbd060",
// 				"transactionId": "ba9a5350618911e8a86b61dd1ecbd060"
// 			}],
// 			"nonce": 39158,
// 			"hash": "0000f2d5d9dc95e871b9f0b8ff94f1a53cf95b4e3c488a3a435c0f89192f29e3",
// 			"previousBlockHash": "000006e10f4017bf433da6c3445e83e0f47179baea8a693dea6b967d8c322c75"
// 		}
// 	],
// 	"pendingTransactions": [{
// 		"amount": 12.5,
// 		"sender": "00",
// 		"recipient": "43ce2f80618911e8a86b61dd1ecbd060",
// 		"transactionId": "bbf6d610618911e8a86b61dd1ecbd060"
// 	}],
// 	"networkNodes": [],
// 	"currentNodeUrl": "http://localhost:3001"
// };

// console.log('Valid chain: ', bitcoin.chainIsValid(bc1.chain));

// Test Genesis block
// console.log(bitcoin);

// Test hashBlock
// Test proofOfWork
// const previousBlockHash = 'KJHDJHSKJHKHSJHDSJHDSHDKDHSD';
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: 'SJKDHSKHDLSHDKSJD',
//         recipient: 'DHSDSDJSDGHJSGDHSD'
//     },
//     {
//         amount: 30,
//         sender: '3455SJKDHSK43534543HDLSHDKSJD',
//         recipient: '45DHSDSDJSDGH4354JSGDHSD'
//     },
//     {
//         amount: 200,
//         sender: '90909SJKDHSKHDLSHDKSJD',
//         recipient: '8878688DHSDSDJSDGHJSGDHSD'
//     }
// ];

// Test hashBlock result
//const nonce = 100;
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// Test proofOfWork result
//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 16995));

// Test createNewBlock and createNewTransaction
// bitcoin.createNewBlock(2389, "UIDUD98798HJFD", "HJDHKLAIOEIRH677");

// bitcoin.createNewTransaction(100, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewBlock(213, "12DUDSDS98HJFD", "KSHDJSHd565666");

// bitcoin.createNewTransaction(50, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewTransaction(300, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewTransaction(2000, "ALEXHJKHHJSKDHKS787", "JENKJLJSDHDJHJS7879");
// bitcoin.createNewBlock(4334, "09SDSDSUUIWEUU", "NMNMSD8787SDDSD")

//console.log(bitcoin.chain[2]);