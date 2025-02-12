import React from "react";
import contact from "../../assets/website/contact.png"

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 dark:bg-black dark:text-white py-12 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-6"> 
    <div className="container mx-auto "> 
        {/* Header */}
        <div className="pb-8 text-center space-y-3">
            <h1 
                data-aos="fade-up" 
                className="text-3xl font-semibold text-primary dark:text-primary"
            >
                Get in Touch
            </h1>
            <p 
                data-aos="fade-up" 
                className="text-gray-600 dark:text-gray-400 text-sm"
            >
                Have a question or want to work together? Reach out to us.
            </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 sm:gap-12 sm:place-items-center">
            {/* Left Side - Image */}
            <div 
                className="w-full lg:w-2/5 hidden lg:block" 
                data-aos="fade-right" 
                data-aos-delay="200"
            >
                <img 
                    src={contact} 
                    alt="Contact Us" 
                    className="rounded-lg shadow-lg w-full" 
                />
            </div>

            {/* Right Side - Form */}
            <div 
                className="w-full lg:w-3/5 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg mx-auto max-w-[1300px]" 
                data-aos="fade-left" 
                data-aos-delay="400"
            >
                <form className="space-y-4" action="" method="POST">
                    {/* Name Input */}
                    <div>
                        <label 
                            htmlFor="name" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Your Name" 
                            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary" 
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Your Email" 
                            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary" 
                        />
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label 
                            htmlFor="message" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Message
                        </label>
                        <textarea 
                            id="message" 
                            rows="6" 
                            placeholder="Your Message" 
                            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary resize-none" 
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button 
                            type="submit" 
                            className="px-6 py-2 bg-primary text-white font-medium rounded-md shadow-md hover:bg-red-700 focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

  );
};

export default Contact;