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
        },
        {
            title: "Americas",
            url: '/region/america',
            subMenu: [
                {
                    title: "Caribbean",
                    url: '/sub-region/caribbean',
                },
                {
                    title: "Central America",
                    url: '/sub-region/central-america',
                },
                {
                    title: "North America",
                    url: '/sub-region/north-america',
                },
                {
                    title: "South America",
                    url: '/sub-region/south-america',
                },
            ]
        },
        {
            title: "Antarctica",
            url: '/region/antarctica',
            subMenu: null,
        },
        {
            title: "Asia",
            url: '/region/asia',
            subMenu: [
                {
                    title: "Central Asia",
                    url: '/sub-region/central-asia',
                },
                {
                    title: "East Asia",
                    url: '/sub-region/east-asia',
                },
                {
                    title: "North Asia",
                    url: '/sub-region/north-asia',
                },
                {
                    title: "South Asia",
                    url: '/sub-region/south-asia',
                },
                {
                    title: "South East Asia",
                    url: '/sub-region/south-east-asia',
                },
                {
                    title: "Western Asia",
                    url: '/sub-region/western-asia',
                },
            ]
        },
        {
            title: "Europe",
            url: '/region/europe',
            subMenu: null,
        },
        {
            title: "Oceania",
            url: '/region/oceania',
            subMenu: null,
        },
        {
            title: "PixExplorer",
            url: '/pix-explorer',
            subMenu: null,
        },
        {
            title: "Events",
            url: '/events',
            subMenu: null,
        },
    ];

    return (
        <>
            <div className='py-6 flex flex-wrap z-50 justify-center sm:relative md:text-sm md:font-medium'>
                {data.map((x, index) => (

                    <div className='px-5 group' key={index}>

                        <Link to={x.url} className='leading-10 pr-2 text-[#777E90] hover:text-[#afafaf] active:text-[#ffffff]'>
                            {x.title}
                        </Link>

                        {x.subMenu == null ? null : (<FontAwesomeIcon className='text-[#5a5c61] hover:text-black hover:cursor-pointer' icon={faChevronDown} />)}

                        {/* box-shadow: 0px 16px 24px 0 rgba(31, 47, 70, 0.2) */}
                        <div className={x.subMenu != null ? `bg-[#ffffff] shadow-gray-500/40 absolute rounded-md mt-2 origin-top-right hidden group-hover:block` : null}>
                            <div className='px-2 py-2'>

                                {x.subMenu == null ? null :
                                    x.subMenu.map((i, index) => (
                                        <Link to={i.url} className='block px-4 py-2 text-sm text-[#6a6b6e] hover:text-black' key={index}>
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