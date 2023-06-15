"use client";

import React, { useState } from 'react'

const Contact = () => {
    const [sending, setSending] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <section className="bg-gray-200">
                <div className="container mx-auto py-16 md:py-32">
                    <div className="w-11/12 mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <p className="text-3xl md:text-5xl font-bold text-gray-600">
                                Contact Us
                            </p>
                            <p className="text-gray-600 text-xl md:text-3xl">
                                Leave us a message.
                            </p>
                        </div>
                        <div>
                            <form>
                                <div className="mb-4 align-middle">
                                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    className="font-bold text-2xl mb-6 text-black text-center px-10 py-3 rounded-md bg-[#FFBF9B] hover:bg-gray-400 transition duration-300"
                                    onClick={() => setSending(true)}
                                >
                                    Send Message
                                </button>
                            </form>

                            {sending && (
                                <p>Message Sent Successfully</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact