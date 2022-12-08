import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

function ContactUs() {
    return (
        <div className='my-40'>
            <div className='px-10 lg:px-64' >
                <div className='max-w-lg'>
                    <h1 className='text-5xl font-semibold mb-5'>Contact Us</h1>
                    <p className='text-[#e6e8ec] text-base'>
                        If you have a question, please try searching the <Link className='text-[#3772ff]' to="/faq">FAQ</Link> first.
                    </p>
                    <br />
                    <br />
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactUs