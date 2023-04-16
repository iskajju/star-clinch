import React from 'react'
import CheckoutHeader from './checkoutComponents/CheckoutHeader'
import { Form } from './checkoutComponents/Form'

const Checkout = () => {
  return (
    <>
    <CheckoutHeader />
    <div className=' md:max-w-[720px] lg:max-w-[1140px] m-auto overflow-x-hidden ' >
      <Form />
     
    </div>
    </>
  )
}

export default Checkout
