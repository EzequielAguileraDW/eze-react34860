import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import CartWidget from './CartWidget';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#00010A] text-gray-200'>
            <div>
                <img src={Logo} alt="zeque.pcfix" style={{ width: '70px', margin: '15px' }} />
            </div>

            {/* Menú */}
            <ul className='hidden md:flex text-[17px]'>
                <li className='hover:text-sky-300 duration-300'>Inicio</li>
                <li className='hover:text-sky-300 duration-300'>Tienda</li>
                <li className='hover:text-sky-300 duration-300'>Preguntas frecuentes</li>
                <li className='hover:text-sky-300 duration-300'>Contacto</li>
                <CartWidget />
            </ul>


            {/* Menú hamburguesa */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {/* <FaBars className='text-2xl'/> */}
                {!nav ? <FaBars className='text-2xl'/> : <FaTimes className='text-2xl'/>}
            </div>

            {/* Menú mobile */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#00010A] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'>Inicio</li>
                <li className='py-6 text-3xl'>Tienda</li>
                <li className='py-6 text-3xl'>Preguntas Frecuentes</li>
                <li className='py-6 text-3xl'>Contacto</li>
            </ul>
        </div>
    )
}

export default Navbar