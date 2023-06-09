import React from 'react'
import CheckoutHeader from './checkoutComponents/CheckoutHeader'
import { Form } from './checkoutComponents/Form'
import Brand from './checkoutComponents/Brand'
import Bottom from './checkoutComponents/Bottom'

const Checkout = () => {
  return (
    <>
    <CheckoutHeader />
    <div className=' md:max-w-[720px] lg:max-w-[1140px] m-auto overflow-x-hidden ' >
      <Form />
      <Brand />
    </div>
    <Bottom />
    
    </>
  )
}

export default Checkout
