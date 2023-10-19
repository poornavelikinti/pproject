"use client"
import React, { useEffect, useState } from 'react'
import { products } from '../products/ProductsData';
import { useParams } from 'next/navigation';
import Link from 'next/link';

function SingleProduct({ id }) {
    const params = useParams()
    console.log(params);
    const { category, subCategory } = params

    return (
        <div>
        <div className="flex flex-col p-5 bg-[#59634c] items-center justify-center w-auto text-white font-bold">
                <p>EXTRA 10% OFF ON ABOVE 2000RS ORDERS</p>
                <p className="text-sm font-normal">Discount auto-applied to orders checkout</p>
            </div>
        <div className='mt-5'>
            {
                products.filter(item => item.id == subCategory).map(product => (
                    <div className='relative'>
                        <h1 className='absolute m-5 p-2 text-white h-[40px] w-[60px] rounded-md text-center bg-red-600'>{product.pricetag}</h1>
                        <div className='flex'>
                            <div className="grid grid-cols-2 w-3/5">
                                {
                                    product.image.map((item, index) => (
                                        <img key={index} src={item} alt="" className='w-[300px] h-[400px] border border-white p-3 lg:w-[500px] lg:h-[500px] flex items-start ' />
                                    ))
                                }
                            </div>
                            <div className='w-2/5 p-6'>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-4xl'>{product.title}</h1>
                                    <h1 className='my-5 font-bold text-red-600 text-3xl'>${product.Dprice}</h1>
                                    <h1 className='font-bold text-2xl line-through'>${product.price}</h1>
                                    <p className='py-5 text-slate-500 text-lg'>Prices include GST</p>
                                    <h1 className='font-bold text-2xl'>Color</h1>
                                    <p className='p-1'>Puma brown-Puma black</p>
                                    <div className='h-[80px]'></div>
                                    <div className='border border-x-black m-3'></div>
                                </div>
                                <div>
                                    <h1 className='m-2 text-red-600 font-bold text-lg'>Extra 5% off on Prepaid Orders</h1>
                                    <p className='font-bold  text-end'>IN STOCK</p>
                                    <div className='flex items-center m-2'>
                                        <button className='w-[80px] h-[80px] border border-slate-400 mx-1 bg-white'>
                                            <Link href='' className=''>UK 3</Link>
                                        </button>
                                        <button className='w-[80px] h-[80px] border border-slate-400 mx-1 bg-white'>
                                            <Link href='' className=''>UK 3</Link>
                                        </button>
                                        <button className='w-[80px] h-[80px] border border-slate-400 mx-1 bg-white'>
                                            <Link href='' className=''>UK 3</Link>
                                        </button>
                                        <button className='w-[80px] h-[80px] border border-slate-400 mx-1 bg-white'>
                                            <Link href='' className=''>UK 3</Link>
                                        </button>
                                        <button className='w-[80px] h-[80px] border border-slate-400 mx-1 bg-white'>
                                            <Link href='' className=''>UK 3</Link>
                                        </button>
                                        <button className='w-[80px] h-[80px] border border-slate-400 mx-1 bg-white'>
                                            <Link href='' className=''>UK 3</Link>
                                        </button>
                                    </div>
                                    <Link href='' className='underline p-6 font-bold'>SIZE GUIDE</Link>
                                    <div className='border border-slate-600 border-x-4 m-3'></div>
                                </div>
                                <div className='flex items-start'>
                                    <button className=' m-2'>
                                        <select className='w-[120px] h-[70px] p-3 text-lg border text-center bg-slate-300 flex'>
                                            <option disabled>QTY</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </button>
                                    <div className='flex flex-col'>
                                        <button className='h-[70px] w-[470px] border border-black bg-black text-white m-2 font-bold text-xl'>ADD TO CART</button>
                                        <button className='h-[70px] w-[470px] border border-black text-black m-2 font-bold text-xl'>ADD TO WISHLIST</button>
                                    </div>
                                </div>
                                <div className='flex m-2 p-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    <h1 className='ms-2 font-bold text-slate-500 text-lg'>Free returns on all qualifying orders.</h1>
                                </div>
                                <div className='border border-slate-300 border-x-1 m-3'></div>
                                <div className='m-2'>
                                    <h1 className='p-2 text-lg font-light'>Please enter PIN code to check delivery time</h1>
                                    <h1 className='p-2 font-semibold text-left text-md'>PIN CODE</h1>
                                    <div className='p-2'>
                                        <input type='text' maxLength="5" placeholder='PIN Code' className='me-2 w-[440px] h-[60px] p-4'></input>
                                        <button className='text-white bg-black font-bold text-lg text-center ms-1 w-[140px] h-[60px]'>CHECK</button>
                                    </div>
                                </div>
                                <div className='border border-slate-300 border-x-1 m-3'></div>
                                <div className='m-2'>
                                    <h1 className='py-4 font-semibold text-xl'>Description</h1>
                                    <p className='text-lg font-light'>Take your training to the next level with the {product.title}.The latest version has strategically placed rubber zones for
                                    <ul className='m-4 text-lg list-disc'>
                                    <li>Style:</li>
                                    <li>Color:</li>
                                    </ul>
                                    </p>
                                    <Link href='' className='font-bold text-lg py-8 underline'>ReadMore</Link>
                                    <div>
                                        <h1 className='font-semibold text-2xl py-5 mt-3'>Shipping and Returns</h1>
                                        <p className='text-lg font-light'>Free return for all qualifying orders within <span className='font-bold'>14 days of your order delivery date</span>. Visit our <Link href='' className='underline'>Return Policy</Link> for more information.</p>
                                        <p className='text-lg font-light'>For any queries, please contact Customer Service at 080-35353535 or via <Link href='' className='underline'>customercareindia@puma.com</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default SingleProduct;