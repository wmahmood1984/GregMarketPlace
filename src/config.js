
import faunadb from 'faunadb'

export const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNADB_KEY })
export const q = faunadb.query


export const TokenAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_data",
				"type": "string"
			}
		],
		"name": "Mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "counterStruct",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "counter",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getNFTUserWise",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "counter",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "data",
						"type": "string"
					}
				],
				"internalType": "struct ERC721.NFTStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "counter",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const TokenAdd = "0x87abD078e4d05d2D0179B41Bb14fE49f41910E91"


export const MarketAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			}
		],
		"name": "auctionCancel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			}
		],
		"name": "auctionFinalize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			}
		],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "cancelAuctionAndSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_closingTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_reservePrice",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			}
		],
		"name": "createAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_closingTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_reservePrice",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			}
		],
		"name": "createAuction2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_users",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenId",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_closingTime",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_reservePrice",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "_erc721",
				"type": "address[]"
			}
		],
		"name": "createAuctionBulk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_reservePrice",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			}
		],
		"name": "createSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			}
		],
		"name": "purchase",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "AuctionArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "tokenAdd",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "auctionEnd",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "open",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "reserve",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "soldTo",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "soldFor",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "UpForSale",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "AuctionArrayIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "AuctionArrayIndexNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "tokenAdd",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "auctionEnd",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "open",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "reserve",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "soldTo",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "soldFor",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "UpForSale",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bidfee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_erc721",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "checkAuctionSale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "commissionRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "tokenAdd",
						"type": "address"
					},
					{
						"internalType": "address payable",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "auctionEnd",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "highestBidder",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "highestBid",
						"type": "uint256[]"
					},
					{
						"internalType": "bool",
						"name": "open",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "reserve",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "soldTo",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "soldFor",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "UpForSale",
						"type": "bool"
					}
				],
				"internalType": "struct marketPlace.Auction[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sellBidPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


export const MarketAdd = "0x82a75ae85b87425779f4305B6165d187ea66185b"


const dummyERC721 = "0xf4C91AB5B5c40ba93540c0703954fC148C49f293"



const value=
  {"types":["address[]","uint256[]","uint256[]","uint256[]","address[]"]
	,"values":
	[
		["0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3"]
		,["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53"],
		[1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179],
		[100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000],
		["0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56","0x53381cD85646833F97D190E9538fFC2E99c6BE56"]
	]
}



// ["0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3"]
// [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]
// [1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179,1670609179]
// [100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000]
// ["0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293"]