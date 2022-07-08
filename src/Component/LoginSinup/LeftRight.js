import React from 'react'

import { useState } from 'react'

export default function LeftRight() {
    const [change, setchange] = useState(true)
    return (
        <div className='flex my-20 h-fit w-fit shadow-lg shadow-gray-600 lg:flex-row flex-col md:flex-row'>
            <div className='leftlogin text-white h-72 flex justify-center items-center p-10 text-center'>
                {
                    change ?
                        <div>
                            <h1 className='text-4xl font-semibold'>User SignUp</h1>
                            <p className='mt-2 break-words text-xl'>Don't have Account SignUp here.</p>
                            <button className='mt-2 bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400 w-fit text-white rounded' onClick={() => setchange(false)}>SignUp</button>
                        </div>
                        :
                        <div>
                            <h1 className='text-4xl font-semibold'>User Login</h1>
                            <p className='mt-2 break-words text-xl'>Already have Account Login here.</p>
                            <button className='mt-2 bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400 w-fit text-white rounded' onClick={() => setchange(true)}>Login</button>
                        </div>
                }
            </div>
            <div className="right bg-slate-700 flex flex-col justify-center items-center p-10 h-72">
                {
                    change ?
                        <form className='flex flex-col gap-4 w-72'>
                            <input type="email" placeholder='Email' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
                            <input type="password" placeholder='Password' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
                            <div className='flex justify-between text-white'>
                                <div className='hover:text-gray-400'>
                                    <input type="checkbox" id="remember" name="remember" value="Bike" />
                                    <label for="remember"> Remember Me</label>
                                </div>
                                <h1 className='cursor-pointer underline-offset-4 underline hover:text-gray-400'>Forget Password</h1>
                            </div>
                            <button className='rounded bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400 w-fit text-white'>Login</button>
                        </form>
                        :
                        <form className='flex flex-col gap-4 w-72'>
                            <input type="email" placeholder='Email' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
                            <input type="text" placeholder='Password' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
                            <input type="password" placeholder='Confirm Password' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
                            <button className=' bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400 w-fit text-white rounded'>SignUp</button>
                        </form>
                }
            </div>
        </div>

    )
}
