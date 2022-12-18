import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Hero from '../../Home/Hero';
import HotBid from "../../../components/HotBid";
import Slider from 'react-slick';
import Hero4 from '../../Home/Hero/Hero4';
import Hot4 from '../../../components/HotBid/Hot4';

function Country() {
    let location = useLocation();
    let { country } = useParams();
    const { countryData } = location.state;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    };

//    console.log("sate",location.state)

    return (
        <>
            <div>
                <div>
                    <h1 className='capitalize text-center py-3 text-3xl font-semibold md:text-4xl md:py-2'>{country}</h1>
                </div>

                <div className='py-5'>
                    <Slider {...settings}>
                        <img src={countryData.image1} className="h-auto md:h-[45rem]" />
                        <img src={countryData.image2} className="h-auto md:h-[45rem]" />
                        <img src={countryData.image3} className="h-auto md:h-[45rem]" />
                        {
                            countryData.image4 != null ? <img src={countryData.image4} className="h-auto md:h-[45rem]" /> : null
                        }
                        {
                            countryData.image5 != null ? <img src={countryData.image5} className="h-auto md:h-[45rem]" /> : null
                        }
                        {
                            countryData.image6 != null ? <img src={countryData.image6} className="h-auto md:h-[45rem]" /> : null
                        }
                    </Slider>
                </div>

                <div className='pt-20 px-10 md:pt-32 md:px-20'>
                    <div className='pb-12 md:pb-24'>
                        <h1 className='text-center text-3xl font-semibold md:text-4xl'>Enter Metaverse</h1>
                    </div>

                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className='md:px-3'>
                            <img className='rounded-3xl' src={'/images/metaverse/' + country + '.jpg'} alt='Image Not Found' />
                        </div>
                        <div className='mt-7 md:mt-1 md:px-3'>
                            <p className='text-justify' dangerouslySetInnerHTML={{ __html: countryData.description }}></p>
                        </div>
                    </div>
                </div>

                <Hero4 title="Featured" link={false} subtitle={""} meta={0} code={countryData.code} />

                <Hot4 classSection="section" title={"Travel Offers"} code={countryData.code}/>

                <Hot4 classSection="section" title={"Travel Collectables"} code={countryData.code}/>
            </div></>
    )
}

export default Country