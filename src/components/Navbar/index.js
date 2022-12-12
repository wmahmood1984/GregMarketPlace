import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'





function Navbar() {
const data = [
    {
        title: "Africa",
        url: '/region/africa',
        subMenu: null,
        code: "00"
    },
    {
        title: "Americas",
        url: '/region/america',
        code: "01",
        subMenu: [
            {
                title: "Caribbean",
                url: '/sub-region/caribbean',
                code: "0101"
            },
            {
                title: "Central America",
                url: '/sub-region/central-america',
                code: "0102"
            },
            {
                title: "North America",
                url: '/sub-region/north-america',
                code: "0103"
            },
            {
                title: "South America",
                url: '/sub-region/south-america',
                code: "0104"
            },
        ]
    },
    {
        title: "Antarctica",
        url: '/region/antarctica',
        subMenu: null,
        code: "02"
    },
    {
        title: "Asia",
        url: '/region/asia',
        code: "03",
        subMenu: [
            {
                title: "Central Asia",
                url: '/sub-region/central-asia',
                code: "0301"
            },
            {
                title: "East Asia",
                url: '/sub-region/east-asia',
                code: "0302"
            },
            {
                title: "North Asia",
                url: '/sub-region/north-asia',
                code: "0303"
            },
            {
                title: "South Asia",
                url: '/sub-region/south-asia',
                code: "0304"
            },
            {
                title: "South East Asia",
                url: '/sub-region/south-east-asia',
                code: "0305"
            },
            {
                title: "Western Asia",
                url: '/sub-region/western-asia',
                code: "0305"
            },
        ]
    },
    {
        title: "Europe",
        url: '/region/europe',
        subMenu: null,
        code: "04"
    },
    {
        title: "Oceania",
        url: '/region/oceania',
        subMenu: null,
        code: "05"
    },
    {
        title: "PixExplorer",
        url: '/pix-explorer',
        subMenu: null,
        code: "06"
    },
    {
        title: "Events",
        url: '/events',
        subMenu: null,
        code: "07"
    },
];

    return (
        <>
            <div className='py-6 flex flex-wrap z-50 justify-center sm:relative md:text-sm md:font-medium'>
                {data.map((x, index) => (

                    <div className='px-5 group' key={index}>

                        <Link to={{pathname:x.url, state:x.code} }  className='leading-10 pr-2 text-[#777E90] hover:text-[#afafaf] active:text-[#ffffff]'>
                            {x.title}
                        </Link>

                        {x.subMenu == null ? null : (<FontAwesomeIcon className='text-[#5a5c61] hover:text-black hover:cursor-pointer' icon={faChevronDown} />)}

                        {/* box-shadow: 0px 16px 24px 0 rgba(31, 47, 70, 0.2) */}
                        <div className={x.subMenu != null ? `bg-[#ffffff] shadow-gray-500/40 absolute rounded-md mt-2 origin-top-right hidden group-hover:block` : null}>
                            <div className='px-2 py-2'>

                                {x.subMenu == null ? null :
                                    x.subMenu.map((i, index) => (
                                        <Link to={{pathname:i.url, state:i.code}} className='block px-4 py-2 text-sm text-[#6a6b6e] hover:text-black' key={index}>
                                            {i.title}
                                        </Link>
                                    ))
                                }

                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </>
    )
}

export default Navbar