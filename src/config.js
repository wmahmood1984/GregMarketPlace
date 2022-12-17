
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
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
			},
			{
				"internalType": "string",
				"name": "_desc",
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
			},
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			}
		],
		"name": "createAuction115",
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
			},
			{
				"internalType": "string",
				"name": "_desc",
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
			},
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			}
		],
		"name": "createSale1155",
		"outputs": [],
		"stateMutability": "nonpayable",
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
						"internalType": "string[2]",
						"name": "uri",
						"type": "string[2]"
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
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "onERC1155BatchReceived",
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
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "onERC1155Received",
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


export const combinedCountries = [
	{
		"country": "Algeria",
		"code": "000101"
	},
	{
		"country": "Angola",
		"code": "000102"
	},
	{
		"country": "Benin",
		"code": "000103"
	},
	{
		"country": "Botswana",
		"code": "000104"
	},
	{
		"country": "Burkina Faso",
		"code": "000105"
	},
	{
		"country": "Burundi",
		"code": "000106"
	},
	{
		"country": "Cabo Verde",
		"code": "000107"
	},
	{
		"country": "Cameroon",
		"code": "000108"
	},
	{
		"country": "Central African Republic",
		"code": "000109"
	},
	{
		"country": "Chad",
		"code": "000110"
	},
	{
		"country": "Comoros",
		"code": "000111"
	},
	{
		"country": "Côte d'Ivoire",
		"code": "000112"
	},
	{
		"country": "Democratic Republic of Congo",
		"code": "000113"
	},
	{
		"country": "Djibouti",
		"code": "000114"
	},
	{
		"country": "Egypt",
		"code": "000115"
	},
	{
		"country": "Equatorial Guinea",
		"code": "000116"
	},
	{
		"country": "Eritrea",
		"code": "000117"
	},
	{
		"country": "Eswatini",
		"code": "000118"
	},
	{
		"country": "Ethiopia",
		"code": "000119"
	},
	{
		"country": "Gabon",
		"code": "000120"
	},
	{
		"country": "Gambia",
		"code": "000121"
	},
	{
		"country": "Ghana",
		"code": "000122"
	},
	{
		"country": "Guinea",
		"code": "000123"
	},
	{
		"country": "Guinea-Bissau",
		"code": "000124"
	},
	{
		"country": "Kenya",
		"code": "000125"
	},
	{
		"country": "Lesotho",
		"code": "000126"
	},
	{
		"country": "Liberia",
		"code": "000127"
	},
	{
		"country": "Libya",
		"code": "000128"
	},
	{
		"country": "Madagascar",
		"code": "000129"
	},
	{
		"country": "Malawi",
		"code": "000130"
	},
	{
		"country": "Mali",
		"code": "000131"
	},
	{
		"country": "Mauritania",
		"code": "000132"
	},
	{
		"country": "Morocco",
		"code": "000133"
	},
	{
		"country": "Mozambique",
		"code": "000134"
	},
	{
		"country": "Namibia",
		"code": "000135"
	},
	{
		"country": "Niger",
		"code": "000136"
	},
	{
		"country": "Nigeria",
		"code": "000137"
	},
	{
		"country": "Republic Of Congo",
		"code": "000138"
	},
	{
		"country": "Rwanda",
		"code": "000139"
	},
	{
		"country": "Sao Tome and Principe",
		"code": "000140"
	},
	{
		"country": "Senegal",
		"code": "000141"
	},
	{
		"country": "Seychelles",
		"code": "000142"
	},
	{
		"country": "Sierra Leone",
		"code": "000143"
	},
	{
		"country": "Somalia",
		"code": "000144"
	},
	{
		"country": "South Africa",
		"code": "000145"
	},
	{
		"country": "South Sudan",
		"code": "000146"
	},
	{
		"country": "Sudan",
		"code": "000147"
	},
	{
		"country": "Tanzania",
		"code": "000148"
	},
	{
		"country": "Togo",
		"code": "000149"
	},
	{
		"country": "Tunisia",
		"code": "000150"
	},
	{
		"country": "Uganda",
		"code": "000151"
	},
	{
		"country": "Zambia",
		"code": "000152"
	},
	{
		"country": "Zimbabwe",
		"code": "000153"
	},
	{
		"country": "Anguilla",
		"code": "010001"
	},
	{
		"country": "Antigua And Barbuda",
		"code": "010002"
	},
	{
		"country": "Aruba",
		"code": "010003"
	},
	{
		"country": "Bahamas",
		"code": "010004"
	},
	{
		"country": "Barbados",
		"code": "010005"
	},
	{
		"country": "Bonaire",
		"code": "010006"
	},
	{
		"country": "British Virgin Islands",
		"code": "010007"
	},
	{
		"country": "Cayman Islands",
		"code": "010008"
	},
	{
		"country": "Cuba",
		"code": "010009"
	},
	{
		"country": "Curaçao",
		"code": "010010"
	},
	{
		"country": "Dominica",
		"code": "010011"
	},
	{
		"country": "Dominica Republic",
		"code": "010012"
	},
	{
		"country": "Grenada",
		"code": "010013"
	},
	{
		"country": "Guadeloupe",
		"code": "010014"
	},
	{
		"country": "Haiti",
		"code": "010015"
	},
	{
		"country": "Jamaica",
		"code": "010016"
	},
	{
		"country": "Martinique",
		"code": "010017"
	},
	{
		"country": "Montserrat",
		"code": "010018"
	},
	{
		"country": "Saba",
		"code": "010019"
	},
	{
		"country": "Saint Barthelemy",
		"code": "010020"
	},
	{
		"country": "Saint Eustatius",
		"code": "010021"
	},
	{
		"country": "Saint Kitts And Nevis",
		"code": "010022"
	},
	{
		"country": "Saint Lucia",
		"code": "010023"
	},
	{
		"country": "Saint Maarten",
		"code": "010024"
	},
	{
		"country": "Saint Martin",
		"code": "010025"
	},
	{
		"country": "Saint Vincent And The Grenadines",
		"code": "010026"
	},
	{
		"country": "Trinidad And Tobago",
		"code": "010027"
	},
	{
		"country": "Turks And Caicos",
		"code": "010028"
	},
	{
		"country": "Belize",
		"code": "010029"
	},
	{
		"country": "Costa Rica",
		"code": "010030"
	},
	{
		"country": "El Salvador",
		"code": "010031"
	},
	{
		"country": "Guatemala",
		"code": "010032"
	},
	{
		"country": "Honduras",
		"code": "010033"
	},
	{
		"country": "Mexico",
		"code": "010034"
	},
	{
		"country": "Nicaragua",
		"code": "010035"
	},
	{
		"country": "Panama",
		"code": "010036"
	},
	{
		"country": "Canada",
		"code": "010037"
	},
	{
		"country": "Hawaii",
		"code": "010038"
	},
	{
		"country": "Puerto Rico",
		"code": "010039"
	},
	{
		"country": "US Virgin Islands",
		"code": "010040"
	},
	{
		"country": "USA",
		"code": "010041"
	},
	{
		"country": "Argentina",
		"code": "010042"
	},
	{
		"country": "Bolivia",
		"code": "010043"
	},
	{
		"country": "Brazil",
		"code": "010044"
	},
	{
		"country": "Chile",
		"code": "010045"
	},
	{
		"country": "Colombia",
		"code": "010046"
	},
	{
		"country": "Ecuador",
		"code": "010047"
	},
	{
		"country": "French Guiana",
		"code": "010048"
	},
	{
		"country": "Guyana",
		"code": "010049"
	},
	{
		"country": "Paraguay",
		"code": "010050"
	},
	{
		"country": "Peru",
		"code": "010051"
	},
	{
		"country": "Suriname",
		"code": "010052"
	},
	{
		"country": "Uruguay",
		"code": "010053"
	},
	{
		"country": "Venezuela",
		"code": "010054"
	},
	{
		"country": "Anguilla",
		"code": "010101"
	},
	{
		"country": "Antigua And Barbuda",
		"code": "010102"
	},
	{
		"country": "Aruba",
		"code": "010103"
	},
	{
		"country": "Bahamas",
		"code": "010104"
	},
	{
		"country": "Barbados",
		"code": "010105"
	},
	{
		"country": "Bonaire",
		"code": "010106"
	},
	{
		"country": "British Virgin Islands",
		"code": "010107"
	},
	{
		"country": "Cayman Islands",
		"code": "010108"
	},
	{
		"country": "Cuba",
		"code": "010109"
	},
	{
		"country": "Curaçao",
		"code": "010110"
	},
	{
		"country": "Dominica",
		"code": "010111"
	},
	{
		"country": "Dominica Republic",
		"code": "010112"
	},
	{
		"country": "Grenada",
		"code": "010113"
	},
	{
		"country": "Guadeloupe",
		"code": "010114"
	},
	{
		"country": "Haiti",
		"code": "010115"
	},
	{
		"country": "Jamaica",
		"code": "010116"
	},
	{
		"country": "Martinique",
		"code": "010117"
	},
	{
		"country": "Montserrat",
		"code": "010118"
	},
	{
		"country": "Saba",
		"code": "010119"
	},
	{
		"country": "Saint Barthelemy",
		"code": "010120"
	},
	{
		"country": "Saint Eustatius",
		"code": "010121"
	},
	{
		"country": "Saint Kitts And Nevis",
		"code": "010122"
	},
	{
		"country": "Saint Lucia",
		"code": "010123"
	},
	{
		"country": "Saint Maarten",
		"code": "010124"
	},
	{
		"country": "Saint Martin",
		"code": "010125"
	},
	{
		"country": "Saint Vincent And The Grenadines",
		"code": "010126"
	},
	{
		"country": "Trinidad And Tobago",
		"code": "010127"
	},
	{
		"country": "Turks And Caicos",
		"code": "010128"
	},
	{
		"country": "Belize",
		"code": "010201"
	},
	{
		"country": "Costa Rica",
		"code": "010202"
	},
	{
		"country": "El Salvador",
		"code": "010203"
	},
	{
		"country": "Guatemala",
		"code": "010204"
	},
	{
		"country": "Honduras",
		"code": "010205"
	},
	{
		"country": "Mexico",
		"code": "010206"
	},
	{
		"country": "Nicaragua",
		"code": "010207"
	},
	{
		"country": "Panama",
		"code": "010208"
	},
	{
		"country": "Canada",
		"code": "010301"
	},
	{
		"country": "Hawaii",
		"code": "010302"
	},
	{
		"country": "Puerto Rico",
		"code": "010303"
	},
	{
		"country": "US Virgin Islands",
		"code": "010304"
	},
	{
		"country": "USA",
		"code": "010305"
	},
	{
		"country": "Argentina",
		"code": "010401"
	},
	{
		"country": "Bolivia",
		"code": "010402"
	},
	{
		"country": "Brazil",
		"code": "010403"
	},
	{
		"country": "Chile",
		"code": "010404"
	},
	{
		"country": "Colombia",
		"code": "010405"
	},
	{
		"country": "Ecuador",
		"code": "010406"
	},
	{
		"country": "French Guiana",
		"code": "010407"
	},
	{
		"country": "Guyana",
		"code": "010408"
	},
	{
		"country": "Paraguay",
		"code": "010409"
	},
	{
		"country": "Peru",
		"code": "010410"
	},
	{
		"country": "Suriname",
		"code": "010411"
	},
	{
		"country": "Uruguay",
		"code": "010412"
	},
	{
		"country": "Venezuela",
		"code": "010413"
	},
	{
		"country": "Antarctica",
		"code": "020101"
	},
	{
		"country": "Kazakhstan",
		"code": "030001"
	},
	{
		"country": "Kyrgyzstan",
		"code": "030002"
	},
	{
		"country": "Tajikistan",
		"code": "030003"
	},
	{
		"country": "Turkmenistan",
		"code": "030004"
	},
	{
		"country": "Uzbekistan",
		"code": "030005"
	},
	{
		"country": "China",
		"code": "030006"
	},
	{
		"country": "The Democratic People's Republic Of Korea (DPRK)",
		"code": "030007"
	},
	{
		"country": "Japan",
		"code": "030008"
	},
	{
		"country": "Mongolia",
		"code": "030009"
	},
	{
		"country": "Republic Of Korea",
		"code": "030010"
	},
	{
		"country": "Russia",
		"code": "030011"
	},
	{
		"country": "Afghanistan",
		"code": "030012"
	},
	{
		"country": "Bangladesh",
		"code": "030013"
	},
	{
		"country": "Bhutan",
		"code": "030014"
	},
	{
		"country": "India",
		"code": "030015"
	},
	{
		"country": "Maldives",
		"code": "030016"
	},
	{
		"country": "Mauritius",
		"code": "030017"
	},
	{
		"country": "Nepal",
		"code": "030018"
	},
	{
		"country": "Pakistan",
		"code": "030019"
	},
	{
		"country": "Sri Lanka",
		"code": "030020"
	},
	{
		"country": "Brunei",
		"code": "030021"
	},
	{
		"country": "Cambodia",
		"code": "030022"
	},
	{
		"country": "Indonesia",
		"code": "030023"
	},
	{
		"country": "Laos",
		"code": "030024"
	},
	{
		"country": "Malaysia",
		"code": "030025"
	},
	{
		"country": "Myanmar",
		"code": "030026"
	},
	{
		"country": "Philippines",
		"code": "030027"
	},
	{
		"country": "Singapore",
		"code": "030028"
	},
	{
		"country": "Thailand",
		"code": "030029"
	},
	{
		"country": "Timor-Leste",
		"code": "030030"
	},
	{
		"country": "Vietnam",
		"code": "030031"
	},
	{
		"country": "Armenia",
		"code": "030032"
	},
	{
		"country": "Bahrain",
		"code": "030033"
	},
	{
		"country": "Cyprus",
		"code": "030034"
	},
	{
		"country": "Georgia",
		"code": "030035"
	},
	{
		"country": "Iran",
		"code": "030036"
	},
	{
		"country": "Iraq",
		"code": "030037"
	},
	{
		"country": "Israel",
		"code": "030038"
	},
	{
		"country": "Jordan",
		"code": "030039"
	},
	{
		"country": "Kuwait",
		"code": "030040"
	},
	{
		"country": "Lebanon",
		"code": "030041"
	},
	{
		"country": "Oman",
		"code": "030042"
	},
	{
		"country": "Palestine",
		"code": "030043"
	},
	{
		"country": "Qatar",
		"code": "030044"
	},
	{
		"country": "Saudi Arabia",
		"code": "030045"
	},
	{
		"country": "Syria",
		"code": "030046"
	},
	{
		"country": "Turkey",
		"code": "030047"
	},
	{
		"country": "United Arab Emirates",
		"code": "030048"
	},
	{
		"country": "Yemen",
		"code": "030049"
	},
	{
		"country": "Kazakhstan",
		"code": "030101"
	},
	{
		"country": "Kyrgyzstan",
		"code": "030102"
	},
	{
		"country": "Tajikistan",
		"code": "030103"
	},
	{
		"country": "Turkmenistan",
		"code": "030104"
	},
	{
		"country": "Uzbekistan",
		"code": "030105"
	},
	{
		"country": "China",
		"code": "030201"
	},
	{
		"country": "The Democratic People's Republic Of Korea (DPRK)",
		"code": "030202"
	},
	{
		"country": "Japan",
		"code": "030203"
	},
	{
		"country": "Mongolia",
		"code": "030204"
	},
	{
		"country": "Republic Of Korea",
		"code": "030205"
	},
	{
		"country": "Russia",
		"code": "030301"
	},
	{
		"country": "Afghanistan",
		"code": "030401"
	},
	{
		"country": "Bangladesh",
		"code": "030402"
	},
	{
		"country": "Bhutan",
		"code": "030403"
	},
	{
		"country": "India",
		"code": "030404"
	},
	{
		"country": "Maldives",
		"code": "030405"
	},
	{
		"country": "Mauritius",
		"code": "030406"
	},
	{
		"country": "Nepal",
		"code": "030407"
	},
	{
		"country": "Pakistan",
		"code": "030408"
	},
	{
		"country": "Sri Lanka",
		"code": "030409"
	},
	{
		"country": "Brunei",
		"code": "030501"
	},
	{
		"country": "Cambodia",
		"code": "030502"
	},
	{
		"country": "Indonesia",
		"code": "030503"
	},
	{
		"country": "Laos",
		"code": "030504"
	},
	{
		"country": "Malaysia",
		"code": "030505"
	},
	{
		"country": "Myanmar",
		"code": "030506"
	},
	{
		"country": "Philippines",
		"code": "030507"
	},
	{
		"country": "Singapore",
		"code": "030508"
	},
	{
		"country": "Thailand",
		"code": "030509"
	},
	{
		"country": "Timor-Leste",
		"code": "030510"
	},
	{
		"country": "Vietnam",
		"code": "030511"
	},
	{
		"country": "Armenia",
		"code": "030501"
	},
	{
		"country": "BAHRAIN",
		"code": "030502"
	},
	{
		"country": "Cyprus",
		"code": "030503"
	},
	{
		"country": "Georgia",
		"code": "030504"
	},
	{
		"country": "Iran",
		"code": "030505"
	},
	{
		"country": "Iraq",
		"code": "030506"
	},
	{
		"country": "Israel",
		"code": "030507"
	},
	{
		"country": "Jordan",
		"code": "030508"
	},
	{
		"country": "Kuwait",
		"code": "030509"
	},
	{
		"country": "Lebanon",
		"code": "030510"
	},
	{
		"country": "Oman",
		"code": "030511"
	},
	{
		"country": "Palestine",
		"code": "030512"
	},
	{
		"country": "Qatar",
		"code": "030513"
	},
	{
		"country": "Saudi Arabia",
		"code": "030514"
	},
	{
		"country": "Syria",
		"code": "030515"
	},
	{
		"country": "Turkey",
		"code": "030516"
	},
	{
		"country": "United Arab Emirates",
		"code": "030517"
	},
	{
		"country": "Yemen",
		"code": "030518"
	},
	{
		"country": "Albania",
		"code": "040001"
	},
	{
		"country": "Andorra",
		"code": "040002"
	},
	{
		"country": "Austria",
		"code": "040003"
	},
	{
		"country": "Belarus",
		"code": "040004"
	},
	{
		"country": "Belgium",
		"code": "040005"
	},
	{
		"country": "Bosnia and Herzegovina",
		"code": "040006"
	},
	{
		"country": "Bulgaria",
		"code": "040007"
	},
	{
		"country": "Croatia",
		"code": "040008"
	},
	{
		"country": "Czech Republic",
		"code": "040009"
	},
	{
		"country": "Denmark",
		"code": "040010"
	},
	{
		"country": "Estonia",
		"code": "040011"
	},
	{
		"country": "Finland",
		"code": "040012"
	},
	{
		"country": "France",
		"code": "040013"
	},
	{
		"country": "Germany",
		"code": "040014"
	},
	{
		"country": "Greece",
		"code": "040015"
	},
	{
		"country": "Hungary",
		"code": "040016"
	},
	{
		"country": "Iceland",
		"code": "040017"
	},
	{
		"country": "IRELAND",
		"code": "040018"
	},
	{
		"country": "Italy",
		"code": "040019"
	},
	{
		"country": "Latvia",
		"code": "040020"
	},
	{
		"country": "Liechtenstein",
		"code": "040021"
	},
	{
		"country": "Lithuania",
		"code": "040022"
	},
	{
		"country": "Luxembourg",
		"code": "040023"
	},
	{
		"country": "Macedonia",
		"code": "040024"
	},
	{
		"country": "Malta",
		"code": "040025"
	},
	{
		"country": "Moldova",
		"code": "040026"
	},
	{
		"country": "Monaco",
		"code": "040027"
	},
	{
		"country": "Montenegro",
		"code": "040028"
	},
	{
		"country": "Netherlands",
		"code": "040029"
	},
	{
		"country": "Norway",
		"code": "040030"
	},
	{
		"country": "Poland",
		"code": "040031"
	},
	{
		"country": "Portugal",
		"code": "040032"
	},
	{
		"country": "Romania",
		"code": "040033"
	},
	{
		"country": "San Marino",
		"code": "040034"
	},
	{
		"country": "Serbia",
		"code": "040035"
	},
	{
		"country": "Slovakia",
		"code": "040036"
	},
	{
		"country": "Slovenia",
		"code": "040037"
	},
	{
		"country": "Spain",
		"code": "040038"
	},
	{
		"country": "Sweden",
		"code": "040039"
	},
	{
		"country": "Switzerland",
		"code": "040040"
	},
	{
		"country": "Ukraine",
		"code": "040041"
	},
	{
		"country": "United Kingdom",
		"code": "040042"
	},
	{
		"country": "American Samoa",
		"code": "050001"
	},
	{
		"country": "Australia",
		"code": "050002"
	},
	{
		"country": "Cook Islands",
		"code": "050003"
	},
	{
		"country": "Fiji",
		"code": "050004"
	},
	{
		"country": "French Polynesia",
		"code": "050005"
	},
	{
		"country": "Guam",
		"code": "050006"
	},
	{
		"country": "Kiribati",
		"code": "050007"
	},
	{
		"country": "Marshall Islands",
		"code": "050008"
	},
	{
		"country": "Micronesia",
		"code": "050009"
	},
	{
		"country": "Nauru",
		"code": "050010"
	},
	{
		"country": "New Caledonia",
		"code": "050011"
	},
	{
		"country": "New Zealand",
		"code": "050012"
	},
	{
		"country": "Niue",
		"code": "050013"
	},
	{
		"country": "Norfolk Island",
		"code": "050014"
	},
	{
		"country": "Northern Mariana Islands",
		"code": "050015"
	},
	{
		"country": "Palau",
		"code": "050016"
	},
	{
		"country": "Papua New Guinea",
		"code": "050017"
	},
	{
		"country": "Samoa",
		"code": "050018"
	},
	{
		"country": "Solomon Islands",
		"code": "050019"
	},
	{
		"country": "Tonga",
		"code": "050020"
	},
	{
		"country": "Tuvalu",
		"code": "050021"
	},
	{
		"country": "Vanuatu",
		"code": "050022"
	},
	{
		"country": "Wallis and Futuna",
		"code": "050023"
	}
]


export const MarketAdd = "0x20Ecd87E5577A5A581ed452cD2DB1b8DbBf6C202"


const dummyERC721 = "0xf4C91AB5B5c40ba93540c0703954fC148C49f293"

export const ERC20 = "0x2fC5021C7745C38d7Bf783ED3b1961bA150fae36"


export const ERC1155Abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
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
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MINTER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
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
			},
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "MintW",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PAUSER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			}
		],
		"name": "adduri",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
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
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseUri",
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
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value",
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "burnBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getRoleMember",
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
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleMemberCount",
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
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "mint",
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "mintBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
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
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
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
		"inputs": [],
		"name": "unpause",
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
			}
		],
		"name": "uri",
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

export const ERC1155Add = "0x120e6272508225e0a99ffA17F760f9129a2ff38d"

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



