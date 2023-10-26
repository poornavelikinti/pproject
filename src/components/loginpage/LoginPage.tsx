"use client";
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

function LoginPage() {

    return (
        <>
            <div className="flex flex-col p-5 bg-[#092444] items-center justify-center w-auto text-white font-bold">
                <p className='text-xs font-bold'>EXTRA 10% OFF ON ABOVE 2000RS ORDERS</p>
                <p className="text-xs font-normal mt-2">Discount auto-applied to orders checkout</p>
            </div>
            <h1 className='m-5 lg:text-5xl text-3xl font-bold lg:my-[40px] lg:ms-[320px]'>My account</h1>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='m-3 text-2xl font-semibold'>Login/Register</h1>
                <div className='border border-b-1 border-black  lg:w-[500px] w-[340px]' ></div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='flex flex-col justify-start items-start my-6 lg:w-[500px] w-[340px]'>
                        <label className='text-xs flex justify-start items-start  font-bold text-left pb-2'>PHONE<span className='m-0 text-red-600'>*</span></label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-2 p-3 me-2 flex items-center text-gray-900">+91</span>
                            <input type="text" className='bg-gray-50 hover:shadow-[10px 0px 10px 0px] border h-[60px] lg:w-[500px] w-[340px] rounded-sm border-gray-300 text-gray-900 pl-8 ms-1'></input>
                        </div>
                        <button className='h-[40px] lg:w-[500px] w-[340px] bg-slate-400 ms-1 font-bold text-slate-700 rounded-sm mt-[20px]'>GET OTP</button>
                    </div>
                    <h1 className='text-left ms-6'>An OTP will be sent to your mobile number for verification</h1>
                    <div className='flex flex-col lg:flex-row lg:mt-[30px] lg:mb-[50px] lg:justify-between lg:items-center lg:text-center justify-start items-start text-start mb-[30px]'>
                        <Link href='' className='border-b-2 border-slate-500 text-xs font-bold m-3 lg:mx-3 hover:border-black'>LOGIN WITH EMAIL AND PASSWORD</Link>
                        <Link href='' className='border-b-2 border-slate-500 text-xs font-bold m-3 lg:mx-3 hover:border-black'>LOGIN WITH PHONE  AND PASSWORD</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginPage;   