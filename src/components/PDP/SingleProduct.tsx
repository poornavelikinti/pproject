"use client"
import React, { useEffect, useState } from 'react'
import { products } from '../products/ProductsData';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar'
import 'swiper/css'

function SingleProduct({ id }) {
    const params = useParams()
    console.log(params);
    const { category, subCategory } = params

    return (
        <div>
            <div className="flex flex-col p-5 bg-[#59634c] items-center justify-center w-auto text-white font-bold">
                <p className='text-sm lg:text-lg'>EXTRA 10% OFF ON ABOVE 2000RS ORDERS</p>
                <p className="text-xs lg:text-sm font-normal">Discount auto-applied to orders checkout</p>
            </div>
            <div className='lg:m-[40px] m-[20px] px-[10px]'>
                {
                    products.filter(item => item.id == subCategory).map(product => (
                        <div className='relative'>
                            {
                                product.pricetag ? (
                                    <h1 className='absolute lg:m-5 p-2 z-10 text-white h-[30 px] lg:h-[40px] w-[60px] lg:rounded-md text-center bg-red-600'>
                                        <p className=' text-sm font-semibold lg:font-bold lg:text-lg left-[50px] lg:top-[283px] lg:left-[80px]'>{product.pricetag}</p></h1>) : null
                            }

                            <div className='flex flex-col lg:flex-row'>
                                <div className="hidden lg:grid grid-cols-2 w-3/5">
                                    {
                                        product.image.map((item, index) => (
                                            <img key={index} src={item} alt="" className='border border-white p-3 lg:w-[500px] lg:h-[500px] flex items-start ' />
                                        ))
                                    }
                                </div>
                                <div className='lg:hidden block'>
                                    <Swiper
                                        scrollbar={{
                                            hide: true,
                                        }}

                                        modules={[Scrollbar, Pagination]}
                                        className="mySwiper"
                                    >

                                        {
                                            product.image.map((item, index) => (
                                                <SwiperSlide className='flex justify-center items-center text-center'>
                                                    <img key={index} src={item} alt="" className='object-fit block w-[350px] h-[350px]' />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                                <div className='lg:w-2/5 py-6'>
                                    <div className='flex flex-col'>
                                        <h1 className='lg:font-bold font-semibold lg:text-4xl text-2xl'>{product.title}</h1>
                                        <div className='flex flex-row lg:flex-col'>
                                            <h1 className='my-5 lg:font-bold text-red-600 text-xl font-semibold lg:text-3xl'>${product.Dprice}</h1>
                                            <h1 className='lg:font-bold lg:text-2xl line-through lg:my-0 my-5 mx-5 lg:mx-0 font-semibold text-xl'>${product.price}</h1>
                                            <p className='py-5 my-1 lg:my-0 text-slate-500 text-sm lg:text-lg font-thin'>Prices include GST</p>
                                        </div>
                                        <h1 className='font-bold text-2xl'>Color</h1>
                                        <p className='lg:p-1 py-1 font-thin lg:font-normal text-sm lg:text-lg'>PUMA Brown-PUMA Black</p>
                                        <div className='lg:h-[80px] h-[60px]'>

                                        </div>
                                        <div className='border border-x-black lg:m-3'></div>
                                    </div>
                                    <div className='mt-5 lg:mt-0'>
                                        <h1 className='lg:m-2 text-red-600 lg:font-bold lg:text-lg font-semibold'>Extra 5% off on Prepaid Orders.</h1>
                                        <p className='font-bold text-end hidden lg:block'>IN STOCK</p>
                                        <div className='flex items-center lg:m-2 my-4'>
                                            <button className='lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border lg:border-slate-400 lg:mx-1 bg-white'>
                                                <Link href='' className='font-thin lg:font-normal'>UK 3</Link>
                                            </button>
                                            <button className='lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border lg:border-slate-400 mx-1 bg-white'>
                                                <Link href='' className='font-thin lg:font-normal'>UK 4</Link>
                                            </button>
                                            <button className='lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border lg:border-slate-400 lg:mx-1 bg-white'>
                                                <Link href='' className='font-thin lg:font-normal'>UK 5</Link>
                                            </button>
                                            <button className='lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border lg:border-slate-400 mx-1 bg-white'>
                                                <Link href='' className='font-thin lg:font-normal'>UK 6</Link>
                                            </button>
                                            <button className='lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border lg:border-slate-400 lg:mx-1 bg-white'>
                                                <Link href='' className='font-thin lg:font-normal'>UK 7</Link>
                                            </button>
                                        </div>
                                        <Link href='' className='underline lg:py-6 p-3 lg:font-bold font-semibold'>SIZE GUIDE</Link>
                                        <div className='border border-slate-100 border-x-4 lg:m-3 my-3 lg:my-0'></div>
                                    </div>
                                    <div className='flex items-start'>
                                        <button className='lg:m-2'>
                                            <select className='lg:w-[120px] lg:h-[70px] h-[50px] p-3 text-lg border text-center bg-slate-200 flex'>
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
                                            <button className='lg:h-[70px] lg:w-[470px] h-[50px] border border-black bg-black text-white ms-4 lg:ms-0 w-[220px] lg:m-2 lg:font-bold font-semibold lg:text-xl text-lg'>ADD TO CART</button>
                                            <button className='lg:h-[70px] lg:w-[470px] h-[50px] border border-slate-400 text-black lg:m-2 ms-4 lg:ms-0 w-[220px] my-4 lg:my-0 lg:font-bold lg:text-xl flex justify-center items-center font-semibold'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                <h1 className='lg:px-3 px-1'>
                                                ADD TO WISHLIST</h1>
                                                </button>
                                        </div>
                                    </div>
                                    <div className='flex lg:m-2 my-2 lg:my-0 lg:p-5 py-5 lg:py-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                        <h1 className='lg:ms-2 font-bold text-slate-500 text-sm lg:text-lg px-2 lg:px-0 '>Free returns on all qualifying orders.</h1>
                                    </div>
                                    <div className='border border-slate-300 border-x-1 lg:m-3'></div>
                                    <div className='lg:m-2'>
                                        <h1 className='lg:p-2 py-3 lg:py-0 lg:text-lg text-md font-light text-black'>Please enter PIN code to check delivery time</h1>
                                        <h1 className='lg:p-2 font-semibold text-left lg:text-md text-xs'>PIN CODE</h1>
                                        <div className='lg:p-2 flex flex-col justify-end items-end lg:flex-row'>
                                            <input type='text' maxLength="5" placeholder='PIN Code' className='me-2 lg:w-[440px] lg:h-[60px] w-full my-2 lg:my-0 p-4'></input>
                                            <button className='text-white bg-black font-bold text-lg lg:text-center ms-1 w-[120px] lg:w-[140px] lg:h-[60px] h-[50px]'>CHECK</button>
                                        </div>
                                    </div>
                                    <div className='border border-slate-300 border-x-1 m-3'></div>
                                    <div className='m-2'>
                                        <h1 className='py-4 font-semibold lg:text-xl text-l'>Description</h1>
                                        <p className='lg:text-lg text-md font-thin lg:font-light'>Take your training to the next level with the {product.title}.The latest version has strategically placed rubber zones for
                                            <ul className='m-4 lg:text-lg font-thin list-disc'>
                                                <li>Style:</li>
                                                <li>Color:</li>
                                            </ul>
                                        </p>
                                        <Link href='' className='font-bold text-sm lg:text-lg py-8 underline'>READ MORE</Link>
                                        <div className='text-black'>
                                            <h1 className='font-semibold lg:text-2xl text-lg py-5 mt-3'>Shipping and Returns</h1>
                                            <p className='lg:text-lg font-light'>Free return for all qualifying orders within <span className='font-bold'>14 days of your order delivery date</span>. Visit our <Link href='' className='underline'>Return Policy</Link> for more information.</p>
                                            <p className='mt-5 lg:mt-0 lg:text-lg font-light'>For any queries, please contact Customer Service at 080-35353535 or via <Link href='' className='underline'>customercareindia@puma.com</Link></p>
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