"use client"
import Link from 'next/link';
import React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { products } from '../products/ProductsData';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineLock } from 'react-icons/ai';
import { LuTruck } from 'react-icons/lu';
import { BiMessageDetail } from 'react-icons/bi';


function Cart() {
    const swiperRef = useRef(false);


    const handlePrevButtonClick = () => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            if (swiperInstance) {
                swiperInstance.slidePrev();
            }
        }

    };
    const handleNextButtonClick = () => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            if (swiperInstance) {
                swiperInstance.slideNext();
            }
        }
    };
    return (
        <div className='w-full h-full bg-white'>
            <div className='flex justify-center items-center flex-col lg:p-[150px] px-[20px] py-[140px]'>
                <HiOutlineShoppingCart className='w-[130px] h-[130px] text-slate-200 m-[25px] lg:m-0'></HiOutlineShoppingCart>
                <h1 className='lg:text-3xl text-2xl font-bold lg:pt-[20px]'>Your Shopping Cart is Empty</h1>
                <p className='p-3'>Please <Link href='' className='font-semibold text-sm underline underline-offset-2'>SIGN IN</Link> to view your saved cart</p>
            </div>
            <div className='lg:mx-[80px] mx-[20px] lg:my-[50px] flex flex-col'>
                <h1 className='lg:text-2xl text-lg font-bold my-2'>FREQENTLY BOUGHT ITEMS</h1>
            </div>
            <div className="flex lg:h-[450px] h-[200px] lg:mx-[80px] mx-[20px]">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={4.25}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    scrollbar={true}
                    pagination={{
                        type: 'progressbar',
                        el: '.custom-progress-bar'
                    }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    //   breakpoints={{
                    //     769: {
                    //       slidesPerView: 2,
                    //       slidesPerGroup: 2,
                    //     },
                    //   }}
                    modules={[Pagination, Scrollbar, Navigation]}
                    className="mySwiper relative group m-0"
                >
                    {
                        products.map((product, index) => (
                            <div className='flex'>
                                <SwiperSlide key={index} className='lg:h-[400px] h-[200px]  mx-[5px]'>
                                    <Link href={`category/${product.id}`}>
                                        <div className='lg:w-[340px] w-[250px]'>
                                            <img src={product.image[0]} alt={product.title} className='lg:h-[350px] lg:w-[340px] h-[150px] w-250px' />
                                            <div className='flex justify-between items-center gap-[50px] my-3 text-black font-bold'>
                                                <h1 className='lg:font-bold font-semibold text-sm lg:text-lg'>{product.title}</h1>
                                                <h1 className='lg:font-bold font-semibold text-sm lg:text-lg'>${product.price}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            </div>
                        ))
                    }
                    < div className="hidden group-hover:block">
                        <button className="custom-prev text-black text-[15px] bg-slate-300 p-2 px-3 w-10 h-10 rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 z-10" onClick={handlePrevButtonClick}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="custom-next absolute text-black text-[15px] bg-slate-300 w-10 h-10 rounded-full p-2 px-3 top-1/2 right-2 transform -translate-y-1/2 z-10" onClick={handleNextButtonClick}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>

                </Swiper>
            </div>
            <div className='h-[450px] bg-gray-100 mt-[50px] flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col border border-gray-300 lg:py-[30px] lg:px-[40px] p-[30px] text-center m-[20px] justify-center items-center rounded-2xl'>
                        <AiOutlineLock className='h-[50px] w-[50px] mb-[20px]'></AiOutlineLock>
                        <h1 className='font-bold text-lg'>SECURE PAYMENTS</h1>
                        <h1 className='text-xs'>SSL ENCRYPTION ON ALL TRANSACTIONS</h1>
                    </div>
                    <div className='hidden lg:block'>
                        <div className='flex flex-col border border-gray-300 py-[25px] px-[40px] text-center m-[20px] justify-center items-center rounded-2xl'>
                            <LuTruck className='h-[50px] w-[50px] mb-[20px]'></LuTruck>
                            <h1 className='font-bold text-lg'>FREE & FAST RETURNS</h1>
                            <h1 className='text-xs'>FREE RETURN ON ALL QUALIFYING ORDERS</h1>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div className='flex flex-col border border-gray-300 py-[25px] px-[40px] text-center m-[20px] justify-center items-center rounded-2xl'>
                            <BiMessageDetail className='h-[50px] w-[50px] mb-[20px]'></BiMessageDetail>
                            <h1 className='font-bold text-lg'>ACTIVE SUPPORT</h1>
                            <h1 className='text-xs'>GET IN TOUCH IF YOU HAVE A PROBLEM</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='m-[20px]'>OUR TRUSTED PAYMENT PARTNERS</h1>
                    <img src="https://styledirectors.co.uk/wp-content/uploads/2015/10/cards-1024x156.png" className='lg:w-[420px] lg:h-[100px] m-[20px] lg:m-0 w-[270px] h-[50px]'></img>
                </div>
            </div>
        </div >


    )
}

export default Cart;