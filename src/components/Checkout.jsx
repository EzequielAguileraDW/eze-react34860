import React from 'react'
import { useEffect } from 'react'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {

    useEffect(() => {
        document.title = 'Checkout'
    }, [])
    
    return (
        <div className='text-center py-[115px] bg-[#000211] h-[650px]'>
            <CheckoutForm />
        </div>
    )


}




export default Checkout