import React from 'react'
import logo from '../Images/Logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const active = (isActive) => {
        return (
            isActive ? 'text-white' : 'text-gray-400 hover:text-gray-500'
        )
    }
    return (
        <div className='content bg-slate-700 overflow-hidden justify-center px-3 lg:px-44 sticky top-0 z-50 shadow-sm shadow-white'>
            <div className="innercontent flex h-14 justify-between items-center">
                <img src={logo} alt="NitEdu" className=' h-full sm:w-32 w-16'/>
                <div className="features flex  justify-between sm:gap-5 gap-3 text-white sm:text-xl font-normal font-mono text-base sm:ml-0 ml-3">
                    <NavLink to="/Home" className={({ isActive }) => active(isActive)}>Home</NavLink>
                    <NavLink to="/About" className={({ isActive }) => active(isActive)}>About</NavLink>
                    <NavLink to="/Courses" className={({ isActive }) => active(isActive)}>Courses</NavLink>
                    <NavLink to="/Contact" className={({ isActive }) => active(isActive)}>Contact</NavLink>
                    <NavLink to="/LoginSinup" className={({ isActive }) => active(isActive)}><i className="fa-solid fa-user" title='Login/Sinup'></i></NavLink>
                </div>
            </div>
        </div>
    )
}