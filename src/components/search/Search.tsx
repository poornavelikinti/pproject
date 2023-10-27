import React, { useState } from 'react'
import { Transition } from '@headlessui/react';
import { IoMdClose } from "react-icons/io";
import {BiChevronLeft} from "react-icons/bi"


function Search() {
    let [closebtn, setclosebtn] = useState(true);
    const [Searchbar, setSearchbar] = useState(false)

    const CloseClick = () => {
        setSearchbar(false);
        setclosebtn(!closebtn);
    };
    return (
        <Transition
        appear={true}
        show={true}
        enter="transition-opacity ease-in translate-y-full duration-2000 delay-2000"
        enterFrom="opacity-0 delay-2000"
        enterTo="opacity-100 translate-y-0 delay-2000"
        leave="transition-opacity ease-out duration-1500 delay-2000"
        leaveFrom="opacity-100 delay-2000"
        leaveTo="opacity-0 translate-y-full delay-2000"
        >
        <div className='h-screen bg-white relative'>
            <div className='m-0 bg-gray-200'>
            <form>
                <div className='flex lg:py-8 p-5 lg:mx-[90px] items-center'>
                    <button onClick={CloseClick}>
                <BiChevronLeft className='w-8 h-8 text-black'></BiChevronLeft>
                </button>
                    <div className="relative w-full">
                        <input type="search" id="default-search" placeholder='SEARCH PUMA.COM' className="block w-full lg:p-4 p-3 pl-5 text-lg text-gray-900  bg-white " />
                        <button type="submit" className="text-white absolute right-3 bottom-3 rounded-full p-2 hover:bg-slate-300 hover:rounded-full ">
                            <svg className="lg:w-5 lg:h-5 w-4 h-4 text-black lg:me-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
                    <button className='hidden lg:block mx-5 text-black relative rounded-full p-2 hover:bg-slate-300'>
                        <IoMdClose className='w-6 h-6' onClick={CloseClick}></IoMdClose>
                    </button>
                </div>
            </form>
            </div>
            <div className='w-full lg:h-2/4 h-full bg-white overflow-y-scroll'>
                <div className='text-black flex flex-col lg:flex-row font-bold text-xl mx-5 lg:mx-0 py-[30px] lg:px-[90px] w-full'>
                <div className='flex flex-col lg:w-2/5'>
                <h1 className='font-semibold lg:font-bold'>TRENDING SEARCHES</h1>
                <div className='lg:font-semibold font-medium text-lg py-[15px] text-gray-500'>
                <h1 className='pb-[10px]'>Shoes For Men</h1>
                <h1 className='pb-[10px]'>Sneakers</h1>
                <h1 className='pb-[10px]'>Shoes</h1>
                <h1 className='pb-[10px]'>Slides</h1>
                <h1 className='pb-[10px]'>Sneakers For Men</h1>
                <h1 className='pb-[10px]'>Running Shoes</h1>
                </div>
                </div>
                <div className='lg:w-3/5'>
                <h1 className='font-semibold lg:font-bold'>RECENTLY VIEWED</h1>
                </div>
                </div>
            </div>
            <div className='hidden lg:block inset-0 bg-opacity-50 bg-black h-full'>
            </div>
        </div>
        </Transition>
    )
}

export default Search