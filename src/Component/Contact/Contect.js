import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Contect() {
  return (
    <div className='flex flex-col justify-between h-screen '>
      <div className='mb-auto'>
        <Navbar />
      </div>
      <div className='flex justify-center mb-auto'>
        <div className='flex my-20 h-fit w-fit shadow-lg shadow-gray-600 lg:flex-row flex-col md:flex-row'>
          <div className="leftcontact text-white h-96 flex flex-col justify-center items-center p-10 text-center w-96 ">
            <h1 className='text-4xl font-semibold'>Contact Us</h1>
            <p className='mt-5 break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis suscipit ducimus autem vel illo consectetur aspernatur eum nam a!</p>
            <div className='mt-5'>
              <div><i class="fa-solid fa-phone mr-3"></i>+91 9874561235</div>
              <div><i class="fa-solid fa-envelope mr-3"></i>nitin@gmail.com</div>
              <div><i class="fa-solid fa-location-dot mr-3"></i>Kashipur Nanital</div>
            </div>
            <div className='flex justify-between mt-10 w-44'>
              <i className="fa-brands fa-facebook-square fa-2xl hover:text-gray-400 cursor-pointer"></i>
              <i className="fa-brands fa-instagram-square fa-2xl hover:text-gray-400 cursor-pointer"></i>
              <i className="fa-brands fa-twitter-square fa-2xl hover:text-gray-400 cursor-pointer"></i>
              <i className="fa-brands fa-linkedin fa-2xl hover:text-gray-400 cursor-pointer"></i>
            </div>
          </div>
          <div className="right bg-slate-700 flex flex-col justify-center items-center p-10 h-96">
            <form className='flex flex-col gap-4 w-72'>
              <input type="text" placeholder='Name' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <input type="text" placeholder='Email' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <input type="text" placeholder='Phone' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <textarea rows="5" name="description" placeholder='Type Message' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <button className=' bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400 w-fit text-white'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
