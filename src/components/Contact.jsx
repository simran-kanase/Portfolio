import { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";

import { FaUser, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
      AOS.init();
    }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d0cnbfc', 'template_gkcxaqp', form.current, {
        publicKey: 'NyQ3FNr7GCRrSdYjP',
      })
      .then(
        () => {
          setPopupMessage('Success! Your message has been sent.');
        },
        (error) => {
          setPopupMessage(`Failed... ${error.text}`);
        },
      );
  };

  return (
    <div>
      <section className="h-screen bg-[rgb(245,245,220)]">
      <h1 className='px-12 text-3xl font-bold text-center text-[rgb(11,42,51)]'
      data-aos="fade-down"
  data-aos-duration="1200"
      ><span className='border-b-2 border-[rgb(11,42,51)]' >Contact Me</span></h1>
        <div className='flex items-center justify-center mt-10 ' >
          {/* Left Div */}
        <div className="flex-1 bg-[#FFA500] flex items-center mx-10 justify-center h-[66vh]">
          <div className="text-center text-white ">
            <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
            <p className="text-lg">Email: kanasesimran8@gmail.com</p>
            <p className="text-lg">Mobile: +91 8668286061</p>

            
          <div className="flex gap-4 mt-4 text-center">
            <a
              href="https://github.com/simran-kanase"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-24 text-2xl transition hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/simran-kanase-0a6b35289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
          </div>
          </div>
        </div>

        {/* Right Div (Contact Form with Moving Border) */}
        <div className="flex-1 p-[3px] rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-border">
          <div className="bg-white rounded-lg px-[25px] pt-[25px] pb-[30px] shadow-lg text-[#333]">
            <h2 className="text-4xl text-center">Feedback</h2>

            <form ref={form} onSubmit={sendEmail}>
              {/* Full Name and Email (same line) */}
              <div className="flex mt-5 space-x-4">
                {/* Full Name */}
                <div className="flex-1">
                  <div className="flex items-center border-2 border-[#ddd] rounded-md">
                    <input
                      type="text"
                      className="w-full h-[50px] bg-transparent outline-none p-4 text-[#333]"
                      placeholder="Enter your name"
                      name="from_name"
                      required
                    />
                    <FaUser className="text-[#333] mr-4" />
                  </div>
                </div>

                {/* Email */}
                <div className="flex-1">
                  <div className="flex items-center border-2 border-[#ddd] rounded-md">
                    <input
                      type="email"
                      className="w-full h-[50px] bg-transparent outline-none p-4 text-[#333]"
                      placeholder="Enter your Email"
                      name="from_email"
                      required
                    />
                    <FaEnvelope className="text-[#333] mr-4" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mt-5 input-box">
                <textarea
                  className="w-[100%] h-[150px] bg-transparent border-2 border-[#ddd] outline-none rounded-md p-4 text-[#333] mt-2 resize-none"
                  placeholder="Enter your message"
                  required
                  name="message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-7">
                <button className="bg-[#FFC857] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#FFA500] transition-all">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </section>

      {/* Pop-up message */}
      {popupMessage && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 bg-white rounded-md shadow-lg">
            <p className="text-lg">{popupMessage}</p>
            <button
              className="mt-4 px-6 py-2 bg-[#FFC857] text-white rounded-md hover:bg-[#FFA500]"
              onClick={() => setPopupMessage('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact


