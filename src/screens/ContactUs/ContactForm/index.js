import React from 'react'

function ContactForm({
    className,
    onSubmit,
    placeholder,
    value,
    setValue,
    type,
    name,
}) {
    return (
        <>
            <form>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                    <input type="text" id='name' placeholder="Your Name" name='name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                    <input type="email" id='email' placeholder="Your Email" name='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your Topic</label>
                    <input type="text" id='topic' placeholder="Your Topic" name='topic' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                    <textarea id='message' placeholder="Type your message here" name='message' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></textarea>
                </div>
                <br />
                <button type="submit" class="text-white bg-[#3772FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}

export default ContactForm