import Link from 'next/link'
import React from 'react'
import {HiOutlineShoppingCart} from "react-icons/hi"
function Cart() {
    return (
        <div className='w-full h-full bg-white'>
            <div className='flex justify-center items-center flex-col p-[150px]'>
                <HiOutlineShoppingCart className='w-[130px] h-[130px] text-slate-200'></HiOutlineShoppingCart>
                <h1 className='text-3xl font-bold pt-[20px]'>Your Shopping Cart is Empty</h1>
                <p className='p-3'>Please <Link href='' className='font-semibold underline underline-offset-2'>SIGN IN</Link> to view your saved cart</p>
            </div>
            <div className='mx-[80px] my-[50px] flex flex-col'>
                <h1 className='text-2xl font-bold'>FREQENTLY BOUGHT ITEMS</h1>
            </div>
        </div>
    )
}

export default Cart