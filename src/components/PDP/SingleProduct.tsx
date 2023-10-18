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
        <div className='mt-5'>
            {
                products.filter(item => item.id == subCategory).map(product => (
                    <div className='relative'>
                        <h1 className='absolute m-5 p-2 text-white h-[40px] w-[60px] rounded-md text-center bg-red-600'>{product.pricetag}</h1>
                        <div className='flex'>
                            <div className="grid grid-cols-2 gap-3 w-3/5">
                                {
                                    product.image.map((item, index) => (
                                        <img key={index} src={item} alt="" className='w-[300px] h-[300px] border border-white p-3 lg:w-[500px] lg:h-[500px]' />
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
                                <div className='flex'>
                                    <button className=' m-2'>
                                        <select className='w-[120px] h-[70px] p-3 text-lg border border-black flex justify-start'>
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
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SingleProduct;