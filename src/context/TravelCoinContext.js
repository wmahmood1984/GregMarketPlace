// import { useWeb3React } from "@web3-react/core";
// import { createContext, useState, useEffect } from "react";
// import { useMoralis } from "react-moralis";
// import { Contract } from '@ethersproject/contracts';
// import { MarketAbi, MarketAdd } from "../config";


// export const TravelCoinContext = createContext();

// export const getContract = (library, account,chainId) => {
// 	const signer = library?.getSigner(account).connectUnchecked();
// 	var contract = new Contract(MarketAdd,MarketAbi, signer);
// 	return contract;
// };




// export const TravelCoinProvider = ({ children }) => {
//     const [displayName, setDisplayName] = useState('')
//     const [bio, setBio] = useState('')
//     const [website, setWebsite] = useState('')
//     const [twitter, setTwitter] = useState('')
//     const { account,library,chainId } = useWeb3React();
//     const myContract = getContract(library, account,chainId);
//     const [currentDisplayName, setCurrentDisplayName] = useState('')
//     const [currentBio, setCurrentBio] = useState('')
//     const [currentWebsite, setCurrentWebsite] = useState('')
//     const [currenttwitter, setCurrentTwitter] = useState('')
//     const [currentAccount, setCurrentAccount] = useState('')
//     const [formattedAccount, setFormattedAccount] = useState('')

//     // const {
//     //     authenticate,
//     //     isAuthenticated,
//     //     enableWeb3,
//     //     Moralis,
//     //     account,
//     //     isWeb3Enabled,
//     //     logout,
//     // } = useMoralis();

//     // useEffect(async () => {
//     //     console.log(assetsData)
//     //     await enableWeb3()
//     //     await getAssets()
//     //     await getOwnedAssets()
//     // }, [accountData, assetsData, assetsDataIsLoading, accountDataIsLoading])

//     const isAuthenticated = account;

//     useEffect(async () => {
//         if (isAuthenticated) {
//             const name = await account?.get('displayName')
//             setCurrentDisplayName(name)
//             const bioo = await account?.get('bio')
//             setCurrentBio(bioo)
//             const websitte = await account?.get('website')
//             setCurrentWebsite(websitte)
//             const twitterr = await account?.get('twitter')
//             setCurrentTwitter(twitterr)


//             const account = await account?.get('authData')["moralisEth"]["id"]
//             setCurrentAccount(account)
//             const formatAccount = account.slice(0, 5) + '...' + account.slice(-5)
//             setFormattedAccount(formatAccount)
//         } else {
//             setCurrentAccount('')
//             setFormattedAccount('')
//         }
//     }, [
//         isAuthenticated,
//       //  authenticate,
//         currentAccount,
//         formattedAccount,
//         currentDisplayName,
//         currentBio,
//         currentWebsite,
//         currenttwitter,
//         account,
//         setCurrentAccount,
//         setFormattedAccount,
//         setCurrentDisplayName,
//         setCurrentBio,
//         setCurrentTwitter,
//         setCurrentWebsite,
//     ])

//     const connectWallet = async () => {
//         if (!isAuthenticated) {
//          //   await authenticate({ signingMessage: "Signing in to Virtual Travel" });
//         }
//     }

//     const handleSetaccountDetails = () => {
//         if (account) {
//             if (displayName) {
//                 account.set('displayName', displayName)
//                 account.save()
//                 setDisplayName('')
//             }
//             if (bio) {
//                 account.set('bio', bio)
//                 account.save()
//                 setBio('')
//             }
//             if (website) {
//                 account.set('website', website)
//                 account.save()
//                 setWebsite('')
//             }
//             if (twitter) {
//                 account.set('twitter', twitter)
//                 account.save()
//                 setTwitter('')
//             }
//         } else {
//             console.log('No account')
//         }
//     }

//     // const getBalance = async () => {
//     //     try {
//     //         if (!isAuthenticated || !currentAccount) return
//     //         const options = {
//     //             contractAddress: amazonCoinAddress,
//     //             functionName: 'balanceOf',
//     //             abi: amazonAbi,
//     //             params: {
//     //                 account: currentAccount,
//     //             },
//     //         }

//     //         if (isWeb3Enabled) {
//     //             const response = await Moralis.executeFunction(options)
//     //             console.log(response.toString())
//     //             setBalance(response.toString())
//     //         }
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     // }


//     return (
//         <TravelCoinContext.Provider value={{
//             isAuthenticated,
//             connectWallet,
//         //    logout,
//             handleSetaccountDetails,
//             displayName,
//             setDisplayName,
//             bio,
//             setBio,
//             website,
//             setWebsite,
//             twitter,
//             setTwitter,
//             currentAccount,
//             currentDisplayName,
//             currentBio,
//             currentWebsite,
//             currenttwitter,
//             formattedAccount,
//         }} >
//             {children}
//         </TravelCoinContext.Provider>
//     )
// }