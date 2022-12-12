
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
			},
			{
				"internalType": "uint256",
				"name": "_tvl",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "changeRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "changeServiceFee",
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
			},
			{
				"internalType": "uint256[]",
				"name": "_category_album_collectible",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_album",
				"type": "string"
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
			},
			{
				"internalType": "uint256[]",
				"name": "_category_album_collectible",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_album",
				"type": "string"
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
			},
			{
				"internalType": "uint256[][]",
				"name": "_categories",
				"type": "uint256[][]"
			},
			{
				"internalType": "string[]",
				"name": "_album",
				"type": "string[]"
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
			},
			{
				"internalType": "uint256[]",
				"name": "_category_album_collectible",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_album",
				"type": "string"
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
		"stateMutability": "nonpayable",
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
			},
			{
				"internalType": "address",
				"name": "royaltyHolder",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "album",
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
			},
			{
				"internalType": "address",
				"name": "royaltyHolder",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "album",
				"type": "string"
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
					},
					{
						"internalType": "address",
						"name": "royaltyHolder",
						"type": "address"
					},
					{
						"internalType": "uint256[]",
						"name": "category_album_collectible",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "album",
						"type": "string"
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
		"name": "OriginalAuctioneer",
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
		"inputs": [],
		"name": "royaltyFee",
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

export const IERC20 = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
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
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
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
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
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
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
		"name": "totalSupply",
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
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const Cdata = [
	{
		title: "Africa",
		url: '/region/africa',
		code: "00",
		subMenu: [
			{
				title: "Algeria",
				url: '/sub-region/algeria',
				code: "0001"
			},
			{
				title: "Angola",
				url: '/sub-region/angola',
				code: "0002"
			},
			{
				title: "Benin",
				url: '/sub-region/benin',
				code: "0003"
			},
			{
				title: "Botswana",
				url: '/sub-region/botswana',
				code: "0004"
			},
			{
				title: "Burkina Faso",
				url: '/sub-region/burkina-faso',
				code: "0005"
			},
			{
				title: "Barundi",
				url: '/sub-region/barundi',
				code: "0006"
			},                {
				title: "Caba Verde",
				url: '/sub-region/caba-verde',
				code: "0007"
			},                {
				title: "Cameroon",
				url: '/sub-region/cameroon',
				code: "0008"
			},                {
				title: "Central African Republic",
				url: '/sub-region/central-african-republic',
				code: "0009"
			},                {
				title: "Chad",
				url: '/sub-region/chad',
				code: "0010"
			},                {
				title: "Comoros",
				url: '/sub-region/comoros',
				code: "0011"
			},                {
				title: "Cote d'Ivoire",
				url: '/sub-region/cote-d-ivoire',
				code: "0012"
			},                {
				title: "Democratic Republic of Congo",
				url: '/sub-region/democratic-republic-of-congo',
				code: "0013"
			},                {
				title: "Djibouti",
				url: '/sub-region/djibouti',
				code: "0014"
			},                {
				title: "Egypt",
				url: '/sub-region/egypt',
				code: "0015"
			},                {
				title: "Equatorial Guinea",
				url: '/sub-region/equatorial-guinea',
				code: "0016"
			},                {
				title: "Eritrea",
				url: '/sub-region/eritrea',
				code: "0017"
			},                {
				title: "Eswatini",
				url: '/sub-region/eswatini',
				code: "0018"
			},                {
				title: "Ethiopia",
				url: '/sub-region/ethiopia',
				code: "0019"
			},                {
				title: "Gabon",
				url: '/sub-region/gabon',
				code: "0020"
			},                {
				title: "Gambia",
				url: '/sub-region/gambia',
				code: "0021"
			},                {
				title: "Ghana",
				url: '/sub-region/ghana',
				code: "0022"
			},                {
				title: "Guinea",
				url: '/sub-region/guinea',
				code: "0023"
			},                {
				title: "Guinea Bissau",
				url: '/sub-region/guinea-bissau',
				code: "0024"
			},                {
				title: "Kenya",
				url: '/sub-region/kenya',
				code: "0025"
			},                {
				title: "Lesotho",
				url: '/sub-region/lesotho',
				code: "0026"
			},                {
				title: "Liberia",
				url: '/sub-region/liberia',
				code: "0027"
			},                {
				title: "Libya",
				url: '/sub-region/libya',
				code: "0028"
			},                {
				title: "Madagascar",
				url: '/sub-region/madagascar',
				code: "0029"
			},                {
				title: "Malawi",
				url: '/sub-region/malawi',
				code: "0030"
			},                {
				title: "Mali",
				url: '/sub-region/mali',
				code: "0031"
			},                {
				title: "Mauritania",
				url: '/sub-region/mauritania',
				code: "0032"
			},                {
				title: "Morocco",
				url: '/sub-region/morocco',
				code: "0033"
			},                {
				title: "Mozambique",
				url: '/sub-region/mozambique',
				code: "0034"
			},                {
				title: "Namibia",
				url: '/sub-region/namibia',
				code: "0034"
			},                {
				title: "Niger",
				url: '/sub-region/niger',
				code: "0035"
			},                {
				title: "Nigeria",
				url: '/sub-region/nigeria',
				code: "0036"
			},                {
				title: "Republic of the Congo",
				url: '/sub-region/republic-of-the-congo',
				code: "0037"
			},                {
				title: "Rwanda",
				url: '/sub-region/rwanda',
				code: "0038"
			},                {
				title: "Sau Tome",
				url: '/sub-region/sau-tome',
				code: "0039"
			},                {
				title: "Senegal",
				url: '/sub-region/senegal',
				code: "0040"
			},                {
				title: "Seychelles",
				url: '/sub-region/seychelles',
				code: "0041"
			},                {
				title: "Sierra leone",
				url: '/sub-region/sierra-leone',
				code: "0042"
			},                {
				title: "Somalia",
				url: '/sub-region/somalia',
				code: "0043"
			},                {
				title: "South Africa",
				url: '/sub-region/south-africa',
				code: "0044"
			},                {
				title: "South Sudan",
				url: '/sub-region/south-sudan',
				code: "0045"
			},                {
				title: "Sudan",
				url: '/sub-region/sudan',
				code: "0047"
			},                {
				title: "Tanzania",
				url: '/sub-region/tanzania',
				code: "0048"
			},                {
				title: "Tunisia",
				url: '/sub-region/tunisia',
				code: "0049"
			},                {
				title: "Uganda"   ,
				url: '/sub-region/uganda',
				code: "0050"
			},                {
				title: "Zambia",
				url: '/sub-region/zambia',
				code: "0051"
			},                {
				title: "Zimbabwe",
				url: '/sub-region/zimbabwe',
				code: "0052"
			},

		],
	},
	{
		title: "Americas",
		url: '/region/america',
		code: "01",
		subMenu: [
			{
				title: "Caribbean",
				url: '/sub-region/caribbean',
				code: "0101",
				subMenu: [
					{
						title: "Anguilla",
						url: '/sub-region/anguilla',
						code: "010101",
					},
					{
						title: "Antigua and Barbuda",
						url: '/sub-region/antigua-and-barbuda',
						code: "010102",
					},
					{
						title: "Aruba",
						url: '/sub-region/aruba',
						code: "010103",
					},
					{
						title: "Bahamas",
						url: '/sub-region/bahamas',
						code: "010104",
					},
					{
						title: "Barbados",
						url: '/sub-region/barbados',
						code: "010105",
					},
					{
						title: "Bonaire",
						url: '/sub-region/bonaire',
						code: "010106",
					},
					{
						title: "British Virgin Island",
						url: '/sub-region/british-virgin-island',
						code: "010107",
					},
					{
						title: "Cayman Island",
						url: '/sub-region/cayman-island',
						code: "010108",
					},
					{
						title: "Cuba",
						url: '/sub-region/cuba',
						code: "010109",
					},
					{
						title: "Curacao",
						url: '/sub-region/curacao',
						code: "010110",
					},
					{
						title: "Dominica",
						url: '/sub-region/dominica',
						code: "010111",
					},
					{
						title: "Dominica Republic",
						url: '/sub-region/dominica-republic',
						code: "010112",
					},
					{
						title: "Grenada",
						url: '/sub-region/grenada',
						code: "010113",
					},
					{
						title: "Guadoloupe",
						url: '/sub-region/guadoloupe',
						code: "010114",
					},
					{
						title: "Haiti",
						url: '/sub-region/haiti',
						code: "010115",
					},
					{
						title: "Jamaica",
						url: '/sub-region/jamaica',
						code: "010116",
					},
					{
						title: "Martinique",
						url: '/sub-region/martinique',
						code: "010117",
					},
					{
						title: "Montserrat",
						url: '/sub-region/montserrat',
						code: "010118",
					},
					{
						title: "Saba",
						url: '/sub-region/saba',
						code: "010119",
					},
					{
						title: "Saint Barthelemy",
						url: '/sub-region/saint-barthelemy',
						code: "010120",
					},
					{
						title: "Saint Eustatius",
						url: '/sub-region/saint-eustatius',
						code: "010121",
					},
					{
						title: "Saint Kitts and Nevis",
						url: '/sub-region/saint-kitts-and-nevis',
						code: "010122",
					},
					{
						title: "Saint Lucia",
						url: '/sub-region/saint-lucia',
						code: "010123",
					},
					{
						title: "Saint Maarten",
						url: '/sub-region/saint-maarten',
						code: "010124",
					},
					{
						title: "Saint Martin",
						url: '/sub-region/saint-martin',
						code: "010125",
					},
					{
						title: "Saint Vincent And Gernadines",
						url: '/sub-region/saint-vincent-and-gernadines',
						code: "010126",
					},
					{
						title: "Trinidad and Tobago",
						url: '/sub-region/trinidad-and-tobago',
						code: "010127",
					},

				]
			},
			{
				title: "Central America",
				url: '/sub-region/central-america',
				code: "0102",
				subMenu: [
					{
						title: "Belize",
						url: '/sub-region/belize',
						code: "010201",
					},
					{
						title: "Costa Rica",
						url: '/sub-region/costa-rica',
						code: "010202",
					},
					{
						title: "El Salvador",
						url: '/sub-region/el-salvador',
						code: "010203",
					},
					{
						title: "Guatemala",
						url: '/sub-region/guatemala',
						code: "010204",
					},
					{
						title: "Honduras",
						url: '/sub-region/honduras',
						code: "010205",
					},
					{
						title: "Mexico",
						url: '/sub-region/mexico',
						code: "010206",
					},
					{
						title: "Nicaragua",
						url: '/sub-region/nicaragua',
						code: "010207",
					},
					{
						title: "Panama",
						url: '/sub-region/panama',
						code: "010208",
					},
				]
			},
			{
				title: "North America",
				url: '/sub-region/north-america',
				code: "0103",
				subMenu: [
					{
						title: "Canada",
						url: '/sub-region/canada',
						code: "010301",
					},
					{
						title: "Hawai",
						url: '/sub-region/hawai',
						code: "010302",
					},
					{
						title: "Puerto Rico",
						url: '/sub-region/puerto-rico',
						code: "010303",
					},
					{
						title: "USA",
						url: '/sub-region/usa',
						code: "010304",
					},
					{
						title: "US Virgin Island",
						url: '/sub-region/us-virgin-island',
						code: "010305",
					}
				]
			},
			{
				title: "SouthAmerica",
				url: '/sub-region/southamerica',
				code: "0104",
				subMenu: [
					{
						title: "Argentina",
						url: '/sub-region/argentina',
						code: "010401",
					},
					{
						title: "Bolivia",
						url: '/sub-region/bolivia',
						code: "010402",
					},
					{
						title: "Brazil",
						url: '/sub-region/brazil',
						code: "010403",
					},
					{
						title: "Chile",
						url: '/sub-region/chile',
						code: "010404",
					},
					{
						title: "Columbia",
						url: '/sub-region/columbia',
						code: "010405",
					},
					{
						title: "Ecuador",
						url: '/sub-region/ecuador',
						code: "010406",
					},
					{
						title: "French Guiana",
						url: '/sub-region/french-guiana',
						code: "010407",
					},
					{
						title: "Guyana",
						url: '/sub-region/guyana',
						code: "010408",
					},
					{
						title: "Paraguay",
						url: '/sub-region/paraguay',
						code: "010409",
					},
					{
						title: "Peru",
						url: '/sub-region/peru',
						code: "010410",
					},
					{
						title: "Suriname",
						url: '/sub-region/suriname',
						code: "010411",
					},
					{
						title: "Uruguay",
						url: '/sub-region/uruguay',
						code: "010412",
					},
					{
						title: "Venezuala",
						url: '/sub-region/venezuala',
						code: "010413",
					},
				]
			},
		]
	},
	{
		title: "Antarctica",
		url: '/region/antarctica',
		code: "02",
		subMenu: undefined

	},
	{
		title: "Asia",
		url: '/region/asia',
		code: "03",
		subMenu: [
			{
				title: "Central Asia",
				url: '/sub-region/central-asia',
				code: "0301",
				subMenu: [
					{
						title: "Kazakhstan",
						url: '/sub-region/kazakhstan',
						code: "030101",
					},
					{
						title: "Kyrgyzstan",
						url: '/sub-region/Kyrgyzstan',
						code: "030102",
					},
					{
						title: "Tajikistan",
						url: '/sub-region/tajikistan',
						code: "030103",
					},
					{
						title: "Turkeministin",
						url: '/sub-region/turkemnistin',
						code: "030104",
					},
					{
						title: "Uzbekistan",
						url: '/sub-region/uzbekistan',
						code: "030105",
					},

				]
			},
			{
				title: "East Asia",
				url: '/sub-region/east-asia',
				code: "0302",
				subMenu: [
					{
						title: "China",
						url: '/sub-region/china',
						code: "030201",
					},
					{
						title: "Democratic Republic of Korea",
						url: '/sub-region/democratic-republic-of-korea',
						code: "030202",
					},
					{
						title: "Japan",
						url: '/sub-region/japan',
						code: "030203",
					},
					{
						title: "Mangolia",
						url: '/sub-region/mangolia',
						code: "030204",
					},
					{
						title: "Republic of Korea",
						url: '/sub-region/republic-of-korea',
						code: "030205",
					},

				]
			},
			{
				title: "North Asia",
				url: '/sub-region/north-asia',
				code: "0303",
				subMenu: [
					{
						title: "Russia",
						url: '/sub-region/russia',
						code: "030301",
					},

				]
			},
			{
				title: "South Asia",
				url: '/sub-region/south-asia',
				code: "0304",
				subMenu: [
					{
						title: "Afghanistan",
						url: '/sub-region/afghanistan',
						code: "030401",
					},
					{
						title: "Bangladesh",
						url: '/sub-region/bangladesh',
						code: "030402",
					},
					{
						title: "Bhutan",
						url: '/sub-region/bhutan',
						code: "030403",
					},
					{
						title: "India",
						url: '/sub-region/india',
						code: "030404",
					},
					{
						title: "Maldives",
						url: '/sub-region/maldives',
						code: "030405",
					},
					{
						title: "Mauritius",
						url: '/sub-region/mauritius',
						code: "030406",
					},
					{
						title: "Nepal",
						url: '/sub-region/nepal',
						code: "030407",
					},
					{
						title: "Pakistan",
						url: '/sub-region/pakistan',
						code: "030408",
					},
					{
						title: "Sri Landa",
						url: '/sub-region/sri-lanka',
						code: "030409",
					},
				]
			},
			{
				title: "South East Asia",
				url: '/sub-region/south-east-asia',
				code: "0305",
				subMenu: [
					{
						title: "Brunei",
						url: '/sub-region/brunei',
						code: "030501",
					},
					{
						title: "Cambodia",
						url: '/sub-region/cambodia',
						code: "030502",
					},
					{
						title: "Indonesia",
						url: '/sub-region/indonesia',
						code: "030503",
					},
					{
						title: "Laos",
						url: '/sub-region/laos',
						code: "030504",
					},
					{
						title: "Malaysia",
						url: '/sub-region/malaysia',
						code: "030505",
					},
					{
						title: "Myanmar",
						url: '/sub-region/myanmar',
						code: "030506",
					},
					{
						title: "Phillipines",
						url: '/sub-region/phillipines',
						code: "030507",
					},
					{
						title: "Singapore",
						url: '/sub-region/singapore',
						code: "030508",
					},
					{
						title: "Thailand",
						url: '/sub-region/thailand',
						code: "030509",
					},
					{
						title: "Vietnam",
						url: '/sub-region/vietnam',
						code: "030510",
					},
					{
						title: "Timor-Leste",
						url: '/sub-region/timor-leste',
						code: "030511",
					},
				]
			},
			{
				title: "Western Asia",
				url: '/sub-region/western-asia',
				code: "0306",
				subMenu: [
					{
						title: "Armenia",
						url: '/sub-region/armenia',
						code: "030601",
					},
					{
						title: "Azerbaijan",
						url: '/sub-region/azerbaijan',
						code: "030602",
					},
					{
						title: "Bahrain",
						url: '/sub-region/bahrain',
						code: "030603",
					},
					{
						title: "Cyprus",
						url: '/sub-region/cyprus',
						code: "030604",
					},
					{
						title: "Georgia",
						url: '/sub-region/georgia',
						code: "030605",
					},
					{
						title: "Iran",
						url: '/sub-region/Iran',
						code: "030606",
					},
					{
						title: "Iraq",
						url: '/sub-region/iraq',
						code: "030607",
					},
					{
						title: "Israel",
						url: '/sub-region/israel',
						code: "030608",
					},
					{
						title: "Jordan",
						url: '/sub-region/jordan',
						code: "030609",
					},
					{
						title: "Kuwait",
						url: '/sub-region/kuwait',
						code: "030610",
					},
					{
						title: "Lebanon",
						url: '/sub-region/lebanon',
						code: "030611",
					},
					{
						title: "Oman",
						url: '/sub-region/oman',
						code: "030612",
					},
					{
						title: "Palestine",
						url: '/sub-region/palenstine',
						code: "030613",
					},
					{
						title: "Qatar",
						url: '/sub-region/qatar',
						code: "030614",
					},
					{
						title: "Saudi Arabia",
						url: '/sub-region/saudi-arabia',
						code: "030615",
					},
					{
						title: "Syria",
						url: '/sub-region/syria',
						code: "030616",
					},
					{
						title: "Turkey",
						url: '/sub-region/turkey',
						code: "030617",
					},
					{
						title: "United Arab Emirates",
						url: '/sub-region/united-arab-emirates',
						code: "030618",
					},
					{
						title: "Yemen",
						url: '/sub-region/yemen',
						code: "030619",
					},
					
				]
			},
		]
	},
	{
		title: "Europe",
		url: '/region/europe',
		code: "04",
		subMenu: [
			{
				title: "Albania",
				url: '/sub-region/albania',
				code: "0401",
			},
			{
				title: "Andora",
				url: '/sub-region/andora',
				code: "0402",
			},
			{
				title: "Austria",
				url: '/sub-region/austria',
				code: "0403",
			},
			{
				title: "Belarus",
				url: '/sub-region/belarus',
				code: "0404",
			},
			{
				title: "Belgium",
				url: '/sub-region/belgium',
				code: "0405",
			},
			{
				title: "Bosnia and Herzegovina",
				url: '/sub-region/bosnia-and-herzegovina',
				code: "0406",
			},
			{
				title: "Bulgaria",
				url: '/sub-region/bulgaria',
				code: "0407",
			},
			{
				title: "Crotia",
				url: '/sub-region/crotia',
				code: "0408",
			},
			{
				title: "Czech Republic",
				url: '/sub-region/czech-republic',
				code: "0409",
			},
			{
				title: "Denmark",
				url: '/sub-region/denmark',
				code: "0410",
			},
			{
				title: "Estonia",
				url: '/sub-region/estonia',
				code: "0411",
			},
			{
				title: "Finland",
				url: '/sub-region/finland',
				code: "0412",
			},
			{
				title: "France",
				url: '/sub-region/france',
				code: "04013",
			},
			{
				title: "Germany",
				url: '/sub-region/germany',
				code: "0414",
			},
			{
				title: "Greece",
				url: '/sub-region/greece',
				code: "0415",
			},
			{
				title: "Hungary",
				url: '/sub-region/hungary',
				code: "0416",
			},
			{
				title: "Iceland",
				url: '/sub-region/iceland',
				code: "0417",
			},
			{
				title: "Ireland",
				url: '/sub-region/ireland',
				code: "0418",
			},
			{
				title: "Italy",
				url: '/sub-region/italy',
				code: "0419",
			},
			{
				title: "Latvia",
				url: '/sub-region/latvia',
				code: "0420",
			},
			{
				title: "Liechtenstein",
				url: '/sub-region/liechtenstein',
				code: "0421",
			},
			{
				title: "Lithuania",
				url: '/sub-region/lithuania',
				code: "0422",
			},
			{
				title: "Luxembourg",
				url: '/sub-region/luxembourg',
				code: "0423",
			},
			{
				title: "Macedonia",
				url: '/sub-region/macedonia',
				code: "0424",
			},
			{
				title: "Malta",
				url: '/sub-region/malta',
				code: "0425",
			},
			{
				title: "Moldova",
				url: '/sub-region/moldova',
				code: "0426",
			},
			{
				title: "Monaco",
				url: '/sub-region/monaco',
				code: "0427",
			},
			{
				title: "Montenegro",
				url: '/sub-region/montenegro',
				code: "0428",
			},
			{
				title: "Netherlands",
				url: '/sub-region/Netherlands',
				code: "0429",
			},
			{
				title: "Norway",
				url: '/sub-region/norway',
				code: "0430",
			},
			{
				title: "Poland",
				url: '/sub-region/poland',
				code: "0431",
			},
			{
				title: "Portugal",
				url: '/sub-region/portugal',
				code: "0432",
			},
			{
				title: "Romania",
				url: '/sub-region/romania',
				code: "0433",
			},
			{
				title: "San Marino",
				url: '/sub-region/san-marino',
				code: "0434",
			},
			{
				title: "Serbia",
				url: '/sub-region/serbia',
				code: "0435",
			},
			{
				title: "Slovakia",
				url: '/sub-region/slovakia',
				code: "0436",
			},
			{
				title: "Slovenia",
				url: '/sub-region/slovenia',
				code: "0437",
			},
			{
				title: "Spain",
				url: '/sub-region/spain',
				code: "0438",
			},
			{
				title: "Sweden",
				url: '/sub-region/sweden',
				code: "0439",
			},
			{
				title: "Switzerland",
				url: '/sub-region/switzerland',
				code: "0440",
			},
			{
				title: "Ukraine",
				url: '/sub-region/ukraine',
				code: "0441",
			},
			{
				title: "United Kingdom",
				url: '/sub-region/united-kingdom',
				code: "0442",
			},
		],
	},
	{
		title: "Oceania",
		url: '/region/oceania',
		code: "05",
		subMenu: [
			{
				title: "American Samoa ",
				url: '/sub-region/american-samoa ',
				code: "0501",
			},
			{
				title: "Australia",
				url: '/sub-region/australia',
				code: "0502",
			},
			{
				title: "Cook Islands",
				url: '/sub-region/cook-islands',
				code: "0503",
			},
			{
				title: "Fiji",
				url: '/sub-region/fiji',
				code: "0504",
			},
			{
				title: "French Polynesia",
				url: '/sub-region/french-polynesia',
				code: "0505",
			},
			{
				title: "Guam",
				url: '/sub-region/guam',
				code: "0506",
			},
			{
				title: "Kiribati",
				url: '/sub-region/kiribati',
				code: "0507",
			},
			{
				title: "Marshall Islands ",
				url: '/sub-region/marshall-islands ',
				code: "0508",
			},
			{
				title: "Micronesia ",
				url: '/sub-region/micronesia ',
				code: "0509",
			},
			{
				title: "Nauru",
				url: '/sub-region/nauru',
				code: "0510",
			},
			{
				title: "New Caledonia",
				url: '/sub-region/newc-aledonia',
				code: "0511",
			},
			{
				title: "New Zealand ",
				url: '/sub-region/new-zealand ',
				code: "0512",
			},
			{
				title: "Niue",
				url: '/sub-region/niue',
				code: "0513",
			},
			{
				title: "Norfolk Island",
				url: '/sub-region/norfolk-island',
				code: "0514",
			},
			{
				title: "Palau",
				url: '/sub-region/palau',
				code: "0515",
			},
			{
				title: "Papua New Guinea",
				url: '/sub-region/papua-new-guinea',
				code: "0516",
			},
			{
				title: "Samoa ",
				url: '/sub-region/samao',
				code: "0517",
			},
			{
				title: "Solomon Islands ",
				url: '/sub-region/solomon-islands ',
				code: "0518",
			},
			{
				title: "Togo",
				url: '/sub-region/togo',
				code: "0519",
			},
			{
				title: "Tonga",
				url: '/sub-region/tonga',
				code: "0520",
			},
			{
				title: "Tuvalu",
				url: '/sub-region/tuvalu',
				code: "0521",
			},
			{
				title: "Vanuatu",
				url: '/sub-region/vanuatu',
				code: "0522",
			},
			{
				title: "Wallis and Futuna ",
				url: '/sub-region/walli-and-futuna',
				code: "0523",
			},
		],
	}
];

export const network = "97"
export const networkhex = `0x61`


export const MarketAdd = "0x85b1A36894f31364348FD1a57eD7bD24437c59D6"


const dummyERC721 = "0xf4C91AB5B5c40ba93540c0703954fC148C49f293"

export const ERC20 = "0xe99227298F536e8CB341A8a6c0d2e0121a5E0F6c"

// const value=
//   {"types":["address[]","uint256[]","uint256[]","uint256[]","address[]"]
// 	,"values":
// 	[
// ["0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3","0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554","0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0","0xe9771623d36478b4291Dd265d5e9df18cC4b1f30","0x30b3fB3296c939671C617359f687898cd59F9461","0x861D80F7be7759A8f282Ea82779ddBb3E3843feA","0x0262Ea616F7cb2B33E325F5cB5DBB296d42095e3"]
// [144, 145, 146, 147, 148, 149, 150, 151,152, 153, 154, 155, 156, 157, 158, 159,	160, 161, 162, 163, 164, 165, 166, 167,	168, 169, 170, 171, 172, 173, 174, 175,	176, 177, 178, 179, 180, 181, 182, 183,	184, 185, 186, 187, 188, 189, 190, 191  ]
// [1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387,1670932387]
// [100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000,100000000000000]
// ["0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293","0xf4C91AB5B5c40ba93540c0703954fC148C49f293"]
// [[0,1],[1,0],[2,0],[3,0],[4,0],[5,1],[6,0],[7,0],[8,0],[9,0],[10,1],[11,0],[12,0],[13,0],[0,0],[1,1],[2,0],[3,0],[4,0],[5,0],[6,1],[7,0],[8,0],[9,0],[10,0],[11,1],[12,0],[13,0],[0,0],[1,0],[2,1],[3,0],[4,0],[5,0],[6,0],[7,1],[8,0],[9,0],[10,0],[11,0],[12,1],[13,0],[0,0],[1,0],[2,0],[3,1],[4,0],[5,0]]
// ['030508', '050400', '000707', '010006','010006', '020601', '030604', '040702',	'040408', '070405', '060402', '030001',	'050201', '050104', '020302', '040300',	'020503', '060304', '030502', '080702',	'080200', '070007', '020404', '060008',	'000602', '020504', '030800', '050005',	'010705', '040708', '020106', '020505',	'070307', '060500', '010605', '020500',	'070206', '050101', '050103', '020002',	'080601', '070603', '080104', '000503',	'000002', '030205', '050206', '030207']
// 	]
// }



