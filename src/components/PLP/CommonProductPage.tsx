import React,{useState,useRef} from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose } from "react-icons/ai"
import { TfiLayoutGrid4Alt } from "react-icons/tfi"
import { TbLayoutGrid } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { products } from '../products/ProductsData';
import SingleProduct from '../PDP/SingleProduct';

function CommonProductPage() {
    const swiperRef = useRef(false)
    const [selectedProduct,setselectedProduct]=useState(null)

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
        <div className="flex justify-between m-8">
                <h1 className="text-xl font-sans font-medium">{products.length} PRODUCTS</h1>
                <div className="flex justify-between text-lg">
                    <TfiLayoutGrid4Alt className=" h-10 w-10 p-2"></TfiLayoutGrid4Alt>
                    <TbLayoutGrid className=" h-10 w-10 p-2"></TbLayoutGrid>
                </div>
            </div>
            <div className="flex flex-wrap m-10 relative z-10">
                {products.map((product) => (
                    <>
                    <Link key={product.id} href={`../../PDP/${product.id}`}>
                    <div className="m-3 w-[360px] h-[360px]">
                        {product.pricetag ? (
                            <h1 className="border border-red-800 z-20 w-16 h-6 flex absolute justify-center rounded-sm items-center text-white text-sm font-bold bg-red-800">{product.pricetag}</h1>) : " "
                        }
                        {product && product.image && Array.isArray(product.image) && (
                            <Swiper
                                ref={swiperRef}
                                pagination={{
                                    type: 'progressbar',
                                }}
                                navigation={{
                                    nextEl: '.custom-next',
                                    prevEl: '.custom-prev'
                                }}
                                modules={[Pagination, Navigation]}
                                className="w-56 h-56 mySwiper"
                            >
                                <div className="hover:transition-all hover:ease-in">
                                    <button className=" custom-prev hover:bg-white text-black text-[15px] p-2 px-3  w-10 h-10 rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 z-10" onClick={handlePrevButtonClick}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <button className=" custom-next absolute text-black hover:bg-white text-[15px]  w-10 h-10 rounded-full p-2 px-3 top-1/2 right-2 transform -translate-y-1/2 z-10" onClick={handleNextButtonClick}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                                {product.image.map((imageurl, imageindex) => (
                                    <SwiperSlide className="flex justify-center items-center text-center ">
                                        <img
                                            src={imageurl}
                                            alt={product.title}
                                            className="object-fit block "
                                        />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        )}
                        <div className="text-lg font-bold flex justify-between items-center w-80 h-20 bg-white">
                            <p className="text-sm font-bold ms-5">{product.title}</p>
                            <div>
                                <p className="m-1 font-medium text-red-600">₹{product.Dprice}</p>
                                <p className="m-1 font-light text-slate-600 line-through">₹{product.price}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                    </>
                ))}
                
            </div>
    </div>
  )
}

export default CommonProductPage;