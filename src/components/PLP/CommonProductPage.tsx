import React, { useState, useRef } from 'react'
import { TfiLayoutGrid4Alt } from "react-icons/tfi"
import { TbLayoutGrid } from "react-icons/tb";
import { BiSquare } from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { products } from '../products/ProductsData';
import 'swiper/swiper-bundle.css';


function CommonProductPage() {
    const swiperRef = useRef(false);
    const [isClickedsquare, setIsClickedsquare] = useState(false);
    const [isClickedGrid,setIsClickedGrid]=useState(false)
    const [isClickedlarge,setIsClickedlarge]=useState(true)
    const handleButtonClick = () => {
        setIsClickedsquare(!isClickedsquare);
        setIsClickedGrid(true)
    };
    const handleGridClick = () => {
        setIsClickedGrid(!isClickedGrid);
        setIsClickedlarge(false)
        setIsClickedsquare(false)
    };
    const handlelargeClick = () => {
        setIsClickedlarge(!isClickedlarge);
        setIsClickedGrid(false)
    };
    const squareClasses = `h-6 w-6 m-1 lg:hidden ${isClickedsquare ? 'border border-black' : ''}`
    const GridClasses = `h-6 w-6 m-1 lg:h-8 lg:w-8 ${isClickedGrid ? 'lg:border lg:border-black' : 'border border-black lg:border-none'}`
    const largeClasses = ` m-1 h-8 w-8  hidden lg:block ${isClickedlarge ? 'border border-black' : ''}`

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
        <div>
            <div className="flex justify-between lg:m-8 m-5">
                <h1 className="text-xl font-sans font-medium">{products.length} PRODUCTS</h1>
                <div className="flex justify-between text-lg">
                    <BiSquare onClick={handleButtonClick} className={squareClasses}></BiSquare>
                    <TbLayoutGrid onClick={handleGridClick} className={GridClasses}></TbLayoutGrid>
                    <TfiLayoutGrid4Alt onClick={handlelargeClick} className={largeClasses}></TfiLayoutGrid4Alt>
                </div>
            </div>
            <div className="flex flex-wrap m-10 relative z-1  className='mb-[50px]'">
                {products.map((product) => (
                    <>
                        <Link key={product.id} href={`category/${product.id}`}>
                            <div className="m-3 mb-6 w-[375px] h-[375px]">
                                {product && product.image && Array.isArray(product.image) && (
                                    <div className='relative'>
                                        {product.pricetag && (
                                            <h1 className=" absolute top-[5px] left-[5px] border border-red-800 z-10 w-16 h-6 text-center rounded-sm text-white text-sm font-bold bg-red-800">
                                                {product.pricetag}
                                            </h1>
                                        )}
                                        <div className="h-[375px] w-[375px] relative">

                                            <Swiper
                                                ref={swiperRef}
                                                scrollbar={true}
                                                pagination={{
                                                    type: 'progressbar',
                                                    el: '.custom-progress-bar'
                                                }}
                                                navigation={{
                                                    nextEl: '.custom-next',
                                                    prevEl: '.custom-prev'
                                                }}
                                                modules={[Pagination, Scrollbar, Navigation]}
                                                className="h-full mySwiper relative group"
                                            >
                                                {product.image.map((imageurl, imageindex) => (
                                                    <SwiperSlide key={imageindex} className="flex justify-center items-center text-center  relative">
                                                        <img
                                                            src={imageurl}
                                                            alt={product.title}
                                                            className="object-cover w-full h-full"
                                                        />

                                                    </SwiperSlide>
                                                ))}
                                                <div className="hidden group-hover:block">
                                                    <button className="custom-prev hover:bg-white text-black text-[15px] p-2 px-3 w-10 h-10 rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 z-10" onClick={handlePrevButtonClick}
                                                    >
                                                        <FontAwesomeIcon icon={faChevronLeft} />
                                                    </button>
                                                    <button className="custom-next absolute text-black hover:bg-white text-[15px] w-10 h-10 rounded-full p-2 px-3 top-1/2 right-2 transform -translate-y-1/2 z-10" onClick={handleNextButtonClick}>
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                    </button>
                                                </div>
                                            </Swiper>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link href='' className='m-3 font-light my-3'>1 COLOR</Link>
                            <div className="text-lg font-bold flex justify-between items-center h-20 mt-1 bg-white w-[375px] bottom-0 left-0">
                                <p className="text-md font-bold max-w-[70%] ps-4 text-start">{product.title}</p>
                                <div>
                                    <p className="m-1 font-medium text-red-600 text-start">₹{product.Dprice}</p>
                                    <p className="m-1 font-light text-slate-600 line-through">₹{product.price}</p>
                                </div>
                            </div>
                            <p className='p-3 text-red-600 font-bold text-sm'>Extra 5% off on prepaid orders</p>
                        </Link>
                    </>
                ))}

            </div>
        </div>
    )
}

export default CommonProductPage;