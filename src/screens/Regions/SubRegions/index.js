import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
import Hero from '../../Home/Hero';
import HotBid from "../../../components/HotBid";
import Slider from 'react-slick';

function SubRegion() {
    let { subRegion } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const fetchData = async () => {
        const controller = new AbortController();
        const signal = controller.signal;

        const response = await axios.get(`/continents/${subRegion}.json`, { signal });
        let resData = await response.data;

        setData(resData);
        setLoading(false)
    };


    useEffect(() => {
        fetchData();
    }, [subRegion]);

    return (
        <div>
            {loading == true ? (<LoadingBar color='#f11946' progress={50} />) :
                (<div>
                    <div>
                        <h1 className='capitalize text-center py-3 text-3xl font-semibold md:text-4xl md:py-2'>{data.region}</h1>
                    </div>

                    <div className='py-5'>
                        <Slider {...settings}>
                            <img src={data.image1} className="h-auto md:h-[45rem]" />
                            <img src={data.image2} className="h-auto md:h-[45rem]" />
                            <img src={data.image3} className="h-auto md:h-[45rem]" />
                            {
                                data.image4 != null ? <img src={data.image4} className="h-auto md:h-[45rem]" /> : null
                            }
                            {
                                data.image5 != null ? <img src={data.image5} className="h-auto md:h-[45rem]" /> : null
                            }
                            {
                                data.image6 != null ? <img src={data.image6} className="h-auto md:h-[45rem]" /> : null
                            }
                        </Slider>
                    </div>

                    <div className='pt-32 px-20'>
                        <div className='pb-24 md:pb-24'>
                            <h1 className='text-center text-3xl font-semibold md:text-4xl'>Countries</h1>
                        </div>

                        <div className='flex flex-wrap justify-around'>
                            {
                                data.countries.map((country) => {
                                    return (
                                        <Link key={country.country} to={{ pathname: "/country/" + country.country, state: { countryData: country } }}>
                                            <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
                                                <img className="w-[28rem] h-auto md:h-48" src={country.image2} alt="Sunset in the mountains" />
                                                <div className="px-6 py-4 text-center">
                                                    <div className="capitalize font-bold text-xl mb-2">{country.country}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })
                            }

                        </div>
                    </div>

                    <Hero title="Featured" link={false} subtitle={""} />

                    <HotBid classSection="section" title={"Travel Offers"} />

                    <HotBid classSection="section" title={"Travel Collectables"} />
                </div>)
            }
        </div>
    )
}

export default SubRegion