'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Getform API endpoint
    const formEndpoint = 'https://getform.io/f/azyynevb' // Replace with your unique Getform endpoint

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // Show success message
        alert('Message sent successfully!')

        // Reset form
        setFormData({
          email: '',
          subject: '',
          message: ''
        })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
    <>
      <Navbar />
      <section className='bg-white dark:bg-gray-900 py-8 lg:py-16 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: 'url(/contact/bg.jpg)' }}
        ></div>
        <div className='relative z-10 px-4 mx-auto max-w-screen-md bg-bgColor bg-opacity-85 dark:bg-bgColor dark:bg-opacity-80 p-8 rounded-lg'>
          <h2 className='mb-6 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white'>
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className='space-y-8'
            action='https://getform.io/'
            method='POST'
          >
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline block w-full p-2.5 dark:bg-cardColor dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Enter Your Email'
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline dark:bg-cardColor dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={6}
                style={{ resize: 'none' }}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline dark:bg-cardColor dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Leave a comment...'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amdOrange dark:hover:bg-amdOrange dark:focus:ring-blue-800 transition duration-200 ease-in-out'
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
