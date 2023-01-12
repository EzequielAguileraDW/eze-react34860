import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const navigate = useNavigate()

    return (
        <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#00010A] text-gray-200'>
            <div>
                <img onClick={() => navigate('/')} src={Logo} alt="zeque.pcfix" style={{ width: '70px', margin: '15px' }}/>
            </div>

            {/* Menú */}
            <ul className='hidden md:flex text-[17px] gap-7'>
                <NavLink to={`/categoria/mantenimiento`} className='hover:text-sky-300 duration-300'>Mantenimiento</NavLink>
                <NavLink to={`/categoria/armado`} className='hover:text-sky-300 duration-300'>Armado</NavLink>
                <NavLink to={`/categoria/componentes`} className='hover:text-sky-300 duration-300'>Componentes</NavLink>
                <NavLink to={`/categoria/sistema`} className='hover:text-sky-300 duration-300'>Sistema Operativo</NavLink>
                <CartWidget />
            </ul>


            {/* Menú hamburguesa */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
            </div>

            {/* Menú mobile */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#00010A] flex flex-col justify-center items-center origin-left transition duration-300'}>
                <li className='py-6 text-2xl'>Inicio</li>
                <li className='py-6 text-2xl'>Tienda</li>
                <li className='py-6 text-2xl'>Preguntas frecuentes</li>
                <li className='py-6 text-2xl'>Contacto</li>
            </ul>
        </div>
    )
}

export default Navbar;