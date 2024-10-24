'use client'
import React from 'react'
import axios from 'axios'; 
import { useState } from 'react'
import { Pacifico } from 'next/font/google';
import Image from 'next/image';


const pacifico = Pacifico({
    subsets: ['latin'],
    weight: ['400'], 
  });

const Contact = () => {
    const [submittedClass, setSubmittedClass] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure the name and value from the input event
        setFormData({
          ...formData, // Spread the existing state
          [name]: value, // Update the value of the specific field
        });
      };

    async function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(formData);

        // make a POST request to the Resend server with the form data (See the details of the post request in index.js)
        try {
            const response = await axios.post('/api/send', formData);
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
        // alert('Thank you! Your message has been sent!')
        setSubmittedClass("submit-button"); 

        // clear the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        
    }

  


    return (
        <div className="2xl:px-64 lg:px-32 lg:py-32 md:px-16 px-8 py-12 mx-auto bg-primary flex justify-center items-center">
            <div className="">

                <div className="bg-secondary/10 xl:p-10 p-4 rounded-lg shadow-2xl shadow-black">
                    <form className="my-4 space-y-4" onSubmit={handleSubmit}>
                        <h1 className={`lg:text-7xl text-4xl font-semibold ${pacifico.className} lg:my-6 my-2 mx-auto text-transparent w-fit bg-clip-text bg-gradient-to-r brightness-125 from-accent to-tertiary`}>Contact me</h1>

                        <label htmlFor="name" className="inline-block text-sm font-medium text-secondary">Your Name</label>
                        <input type='text' placeholder='Name' required
                            className="w-full rounded-lg lg:py-3 py-2 px-4 text-secondary text-sm outline-tertiary hover:outline-dashed hover:outline-2 focus:outline-dashed focus:outline-2 bg-primary ring-tertiary focus:ring-tertiary" 
                            name='name'
                            value={formData.name} // specify the value of the input helps make the input controlled by component's state rather than letting the DOM manage it => good for handling Form Reset and Updates
                            onChange={handleInputChange} // function called on onChange will have an event object as an argument
                        />

                        <label htmlFor="email" className="inline-block text-sm font-medium text-secondary">Your Email Address</label>
                        <input type='email' placeholder='Email' 
                            className="w-full rounded-lg lg:py-3 py-2 px-4 text-secondary text-sm outline-tertiary hover:outline-dashed hover:outline-2 focus:outline-dashed focus:outline-2 bg-primary ring-tertiary focus:ring-tertiary" 
                            name='email'
                            value = {formData.email}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="subject" className="inline-block text-sm font-medium text-secondary">Email Subject</label>
                        <input type='text' placeholder='Subject' required
                            className="w-full rounded-lg lg:py-3 py-2 px-4 text-secondary text-sm outline-tertiary hover:outline-dashed hover:outline-2 focus:outline-dashed focus:outline-2 bg-primary ring-tertiary focus:ring-tertiary" 
                            name='subject'
                            value={formData.subject}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="message" className="inline-block text-sm font-medium text-secondary">Message</label>
                        <textarea placeholder='Message' rows="6" required
                            className="w-full rounded-lg px-4 text-secondary text-sm lg:py-3 py-2 outline-tertiary hover:outline-dashed hover:outline-2 focus:outline-dashed focus:outline-2 bg-primary ring-tertiary focus:ring-tertiary"
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>

                        <button type='submit' className={` ${submittedClass} relative text-primary bg-tertiary hover:bg-accent tracking-wide rounded-lg text-md px-4 py-3 flex items-center justify-center w-full !mt-6 focus:mx-auto`}>
                            <span className='submit-text flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="mr-2 fill-primary" viewBox="0 0 548.244 548.244">
                                    <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                                </svg>
                                Submit
                            </span>
                            <Image src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" alt="send icon" height="40" width="40" className='submitted-checkmark ' />
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact