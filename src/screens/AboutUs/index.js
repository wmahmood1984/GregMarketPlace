import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <div className='my-40'>
            <div className='px-10 lg:px-64' >
                <div className='max-w-lg'>
                    <h1 className='text-5xl font-semibold mb-5'>About Us</h1>
                    <p className='text-[#e6e8ec] text-base'>
                        Travel Coin is a place to buy, sell, & trade travel related NFTs.
                        If you have a question, please try searching the <Link className='text-[#3772ff]' to="/faq">FAQ</Link> first.
                    </p>
                    <br />
                    <h1 className='text-5xl font-semibold mb-5'>How it works</h1>
                    <p className='text-[#e6e8ec] text-base'>
                        NFTs stands for Non-Fungible Token which means it's unique. Having an NFT in your cardano wallet proves
                        you are the owner of that NFT.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default AboutUs