import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Contect() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center'>
        <div className='flex my-20 w-[55rem] shadow-lg shadow-white'>
          <div className="left w-[25rem]">
            <div className='relative'>
              <img src="https://i2.wp.com/files.123freevectors.com/wp-content/original/29837-dark-red-background.jpg?w=600" alt="Contact" />
              <div className='absolute top-20 w-96 break-words text-white px-10'>
                <h1 className='text-4xl font-semibold'>Contact Us</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis suscipit ducimus autem vel illo consectetur aspernatur eum nam a!</p>
                <div className='mt-5 gap-4'>
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
            </div>
          </div>
          <div className="right w-[30rem] bg-gray-700 px-5 ">
            <form className='flex flex-col gap-4 mt-5'>
              <input type="text" placeholder='Name' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <input type="text" placeholder='Email' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <input type="text" placeholder='Phone' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <textarea rows="5" name="description" placeholder='Type Message' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
              <button className='mt-5 bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400 w-fit text-white'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
