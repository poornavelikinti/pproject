"use client"
import React, { useState, useRef } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose } from "react-icons/ai"
import { TfiLayoutGrid4Alt } from "react-icons/tfi"
import { TbLayoutGrid } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";


export default function ProductCard() {
    let [catdropopen, setcatdropopen] = useState(false);
    let [prodropopen, setprodropopen] = useState(false);
    let [prizedropopen, setprizedropopen] = useState(false);
    let [gendropopen, setgendropopen] = useState(false);
    let [sizedropopen, setsizedropopen] = useState(false);
    let [colordropopen, setcolordropopen] = useState(false);
    let [activedropopen, setactivedropopen] = useState(false);
    let [collabdropopen, setcollabdropopen] = useState(false);
    let [isOpen, setIsOpen] = useState(false)
    let [mobileview, setmobileview] = useState(false)
    let [closebtn, setclosebtn] = useState(true);
    let [carousel, setCarousel] = useState(0);
    let swiperRef = useRef(false)


    let products = [
        {
            "id": 1, "price": 109.95, "Dprice": "99", "prize": "Less than 100","color": "black", "activity": "Badminton", "size": "XL", "prodcuttype": "Bags-Backpack", "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "pricetag": "-10%", "category": "Men's clothing", "image": [
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4r1NEof_wJVqQk68mUECFekcUp9CxSvcuw4aSoaBmEn057iYCBdcml-CzlPkMzzVxUsM&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjR8j05JsX1aVYbBbfyMdEGl25DWD1EWSpw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtpHgKUNaOg-sMj5J9LE90raIM7UqqYlTdw&usqp=CAU"
            ], "rating": { "rate": 3.9, "count": 120 }
        },
        {
            "id": 2, "price": 222.3, "Dprice": "200", "prize": "101-500", "color": "white", "activity": "Basketball", "size": "L", "prodcuttype": "Tshirts-Casual & Active", "gender": "Male", "title": "Mens Casual Premium Slim Fit T-Shirts ", "category": "Men's clothing", "pricetag": "-15%", "image": [
                "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwdWjtnaZzdRDl6Ia3MojUmJzd0WsjrvvXg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIXv-gpZG6CLImCnZU5w4DZ5be33oo3Lrvqp-mmZDkSJWFR2cI44FiSoHy3GxmCwtDe4&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV1NOjAM1NaNbgxCLAmjPLnCz7fgcj_UvqA&usqp=CAU"

            ], "rating": { "rate": 4.1, "count": 259 }
        },
        {
            "id": 3, "price": 555.99, "Dprice": "400", "prize": "501-1000", "color": "green", "activity": "Cricket", "size": "M", "prodcuttype": "Jackets", "title": "Mens Cotton Jacket", "gender": "Male", "category": "Men's clothing", "pricetag": "-10%", "image": [
                "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeUFZfUKZcIPAFrGldNB3B2Bn45h84R6djdexP7mycJTQNDaYu8ZqOomCuJa2pw8Am6I&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3WBzge0EBp4HPJn_ISJHXYZtdwUGgZawOriltKGdOQasumU1XqnQoPzj5UWlK90y2qo&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqLuiGwP_ZE8BhfuLTAUaWLcz6FwDrryHcwmBp6fJB1rr_s7xLptscyAnpyLPo9SFTdks&usqp=CAU"
            ], "rating": { "rate": 4.7, "count": 500 }
        },
        {
            "id": 4, "price": 150.99, "Dprice": "140", "prize": "101-500", "color": "yellow", "activity": "Football", "size": "S", "prodcuttype": "Tshirts-Casual & Active", "gender": "Male", "title": "Mens Casual Slim Fit", "category": "Men's clothing", "pricetag": "-8%", "image": [
                "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTup5ndYMhffdxDFfS3wearqVxs9Rt6Tm1JnIdyTN3uFoLCFRnfCaFVNqGv27dOMuCWVPw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdzaFCehH5FcV8ZD4U63pvdagvQXYksEeiA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpxgFelhmfyD-O22wVWrg3AIhtpL9n4avAw&usqp=CAU"
            ], "rating": { "rate": 2.1, "count": 430 }
        },
        {
            "id": 5, "price": 6095, "Dprice": "6000", "prize": "5001-10000", "color": "slate", "activity": "Golf", "size": "30", "prodcuttype": "Accessories", "gender": "Female", "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "pricetag": "-18%", "category": "Jewelery", "image": [
                "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFfdArSoUlLy7r5eeNah0rbeLmsC_PjXAkQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5E1Z0oCbz26KyZXD9YoigqYv76w_2pW4kZg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h2yq1T89i5RscVPDA67eSyhihRYNudKZtg&usqp=CAU"
            ], "rating": { "rate": 4.6, "count": 400 }
        },
        {
            "id": 6, "price": 1680, "Dprice": "1500", "prize": "1001-5000", "color": "red", "activity": "Gym & Training", "prodcuttype": "Accessories", "gender": "Female", "title": "Solid Gold Petite Micropave ", "category": "Jewelery", "pricetag": "-18%", "image": [
                "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5WBphWA0hYixiZdJL0Q0cT5jMmyirg0DTw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_Q3mL_Z2yjnGSQLyZvQ0e9t7NPqyt6rdnw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xRWKNiA1BRN0v_OHfPjO6VksRiKPOAILmg&usqp=CAU"
            ], "rating": { "rate": 3.9, "count": 70 }
        },
        {
            "id": 7, "price": 999, "Dprice": "900", "prize": "501-1000", "color": "orange", "activity": "Lifestyle", "size": "32", "prodcuttype": "Accessories", "gender": "Female", "title": "White Gold Plated Princess", "category": "Jewelery", "image": [
                "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKzxle_EPGiqZkbu4Am-gWYaUergBQ-jZGYVHjkCK07Ur6mcoGXTc4wfr_ozKTcNxME4&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroYKC64UIsxmlJkWa33uJ1vF5KPyFoYt-Ew&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNr6_UMe4WPW1szzk4kQhlmPS8W3vKaHAn_w&usqp=CAU"
            ], "rating": { "rate": 3, "count": 400 }
        },
        {
            "id": 8, "price": 1099, "Dprice": "1000", "prize": "1001-5000", "color": "black", "size": "34", "prodcuttype": "Accessories", "gender": "Female", "title": "Pierced Owl Rose Gold Plated Stainless Steel Double", "category": "Jewelery", "image": [
                "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyj_f3RptQbdThOWSOqkwVwANQpLfPJt6LQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_WxJUJvAmH2lEWC3l7KRMuouNx8oR7Fw2KQPysO84hmtIFgIqAGpyJnKkDX_hLeAyZQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdop3A7pu40qTXQVQNitEPWwF5rtljg4BtPQ&usqp=CAU",
            ], "rating": { "rate": 1.9, "count": 100 }
        },
        {
            "id": 9, "price": 4640, "Dprice": "3600", "prize": "1001-5000", "color": "white", "activity": "Running", "size": "36", "prodcuttype": "Harddisk", "title": "WD 2TB Elements Portable External Hard Drive", "category": "Electronics", "pricetag": "-18%", "image": [
                "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdoBgDafgwONohQowxWnifPjwnc0cX6fFdgpKCrnFpRI64MUP5msU2Qo_qZ4yFRswEJZ8&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5JCuFgiHmV0QDvwvt0AWEpC-Snm_9sk60YxnSdJxs1fn_iOSSU8-Mw-tfxdbcbfHCtA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt164NdWUP0Kfb-xBMeOvV7rpnKeECNkjz6Q&usqp=CAU",
            ], "rating": { "rate": 3.3, "count": 203 }
        },
        {
            "id": 10, "price": 10090, "Dprice": "9000", "prize": "Above 10000", "color": "black", "activity": "Badminton", "size": "XL", "prodcuttype": "Harddisk", "title": "SanDisk SSD PLUS 1TB Internal SSD ", "category": "Electronics", "pricetag": "-18%", "image": [
                "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWGNKpRhZMofwbUYvJ4gt8kP7JC_bwYOutIJPxCDB8bo_HsfyB0GP2a6M8jbmmCpitj0&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVt61VBrq0MTSyskJXu6ghy1BMKksb-Ws2xw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS7LqMVoO8tb3qWK0EUkQVlMW9ROjzUP9jg&usqp=CAU"
            ], "rating": { "rate": 2.9, "count": 470 }
        },
        {
            "id": 11, "price": 2790, "Dprice": "2500", "prize": "1001-5000", "color": "red", "activity": "Others", "size": "XS", "prodcuttype": "Harddisk", "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache", "category": "Electronics", "image": [
                "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaj__K9TGYBzS0EeuTULCmmcS13P0i2FTwRmMUNc_Ix38HQePlhyqi1PxsCT9aEA4Yk_4&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaaM00QudSy65YHPJ4MiwjArV1AvD3058-w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1hrsbzIMIV6EdbWVAD7QbP9-kA6-wRqTSg&usqp=CAU",
            ], "rating": { "rate": 4.8, "count": 319 }
        },
        {
            "id": 12, "price": 10140, "Dprice": "10010", "prize": "Above 10000", "color": "slate", "prodcuttype": "Harddisk", "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", "pricetag": "-18%", "category": "Electronics", "image": [
                "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XDPFGOvrPb0PcO1OT1991fF4_jekHj5wCns77D7EXCafPuAjnGQx_uXVjP8fvby2FJI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWax9vfrZKwdEq27GhyMO8dx7wp6jHuQ-6Dlu83PWbUk1k-YvfONsX53DnlakrcRQfyWg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RM6zi_AVUJJdPMe7iW6lYcpevdpEGaOZWw&usqp=CAU"
            ], "rating": { "rate": 4.8, "count": 400 }
        },
        {
            "id": 13, "price": 5599, "Dprice": "4499", "prize": "5001-10000", "color": "purple", "prodcuttype": "Electronics", "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", "category": "Electronics", "image": [
                "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmGCjKeE-Mztr00CvV597WBA2SQ8bYziheg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuCrzq1Yih4_pMRGXyLT2in7dS-s73QHykg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqo72bGwKo0CxSrHI6ALqxUnhYqzwoOeWyYA&usqp=CAU"
            ], "rating": { "rate": 2.9, "count": 250 }
        }
    ]
    
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
        <div className="m-0">
            <div className="flex flex-col p-5 bg-[#59634c] items-center justify-center w-auto text-white font-bold">
                <p>EXTRA 10% OFF ON ABOVE 2000RS ORDERS</p>
                <p>EXTRA 20% OFF ON ABOVE 3000RS ORDERS</p>
                <p className="text-sm font-normal">Discount auto-applied to orders checkout</p>
            </div>
            <h1 className="text-xl font-bold font-serif m-2 ms-10 p-5">WOMEN</h1>
            <div className="flex justify-between border border-t-gray-500 z-10 border-b-gray-500 items-center">
                <div className="flex justify-center items-center m-1 z-10">
                    <div className="block lg:hidden z-10">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex px-3 py-2 z-10 rounded text-black-500 hover:text-black-400"
                        >
                            <button onClick={() => setmobileview(!mobileview)}
                                className={`flex border z-10 border-slate-800 px-5 py-2 h-11 font-medium m-2 text-black hover:text-white hover:bg-black ${isOpen ? "hidden" : "block"}`}
                            >FILTERS
                            </button>
                        </button>
                    </div>
                    {!mobileview ? (
                        <div className={`lg-block lg-flex lg:inline-block items-center ${isOpen ? "block" : "hidden"}`}>
                            <div className="relative block p-2 lg:inline-block">
                                <button onClick={() => setcatdropopen((prev) => !prev)} className="flex  lg:border lg:border-slate-800 lg:px-3 text-md lg:py-2 h-11 font-medium lg:m-2 items-center text-black hover:text-white hover:bg-black">
                                    Category
                                    {!catdropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : (
                                        <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    )}
                                </button>
                                {catdropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-800 w-full z-20 lg:w-36 h-22 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        {Array.from(new Set(products.map((product) => product.category))).map((category, index) => (
                                            <div className="flex text-sm p-0.25 m-3 z-20 whitespace-nowrap" key={index}>
                                                <input type="checkbox" value={category}></input>
                                                <label>
                                                    {category}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => setprodropopen((prev) => !prev)} className="flex lg:border lg:border-slate-800  lg:px-3 text-md lg:py-2 h-11 font-medium lg:m-2 items-center text-black hover:text-white hover:bg-black">Product Type
                                    {!prodropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    }
                                </button>
                                {prodropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-800 z-20 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        <div className="overflow-x-auto hover:overflow-scroll">
                                            {Array.from(new Set(products.map((product) => product.prodcuttype))).map((prodcuttype, index) => (
                                                <div className="flex text-sm p-0.25 m-3 whitespace-nowrap" key={index}>
                                                    <input type="checkbox" value={prodcuttype}></input>
                                                    <label>
                                                        {prodcuttype}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => setprizedropopen((prev) => !prev)} className="flex lg:border lg:border-slate-800  lg:px-3 text-md lg:py-2 h-11 font-medium lg:m-2 items-center text-black hover:text-white hover:bg-black">Prize
                                    {!prizedropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    }
                                </button>
                                {prizedropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-800 z-20 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        <div className="overflow-scroll hover:overflow-scroll">
                                            {Array.from(new Set(products.map((product) => product.prize))).map((prize, index) => (
                                                <div className="flex text-sm p-0.25 m-3 whitespace-nowrap" key={index}>
                                                    <input type="radio" value={prize}></input>
                                                    <label>
                                                        {prize}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => setgendropopen((prev) => !prev)} className="flex lg:border lg:border-slate-800 lg:px-3 text-md lg:py-2 h-11 font-medium lg:m-2 text-black items-center hover:text-white hover:bg-black">Gender
                                    {!gendropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    }
                                </button>
                                {gendropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-800 z-20 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        {Array.from(new Set(products.map((product) => product.gender))).filter(Boolean).map((gender, index) => (
                                            <div className="flex text-sm p-0.25 m-3 whitespace-nowrap" key={index}>
                                                <input type="radio" value={gender}></input>
                                                <label>
                                                    {gender}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => setsizedropopen((prev) => !prev)} className=" flex lg:border lg:border-slate-800 lg:px-3 text-md lg:py-2 h-11 font-medium lg:m-2 text-black items-center hover:text-white hover:bg-black">Size
                                    {!sizedropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    }
                                </button>
                                {sizedropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-800 z-20 p-1 flex text-md items-start whitespace-nowrap w-auto bg-white font-bold">
                                        {Array.from(new Set(products.map((product) => product.size))).filter(Boolean).map((size, index) => (
                                            <div className="border w-full  border-slate-500 hover:border-black hover:bg-black hover:text-white p-1 m-1">
                                                <div className="flex flex-row text-sm p-0.25 m-3 " key={index}>
                                                    <h1>
                                                        {size}
                                                    </h1>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => setcolordropopen((prev) => !prev)} className="flex lg:border lg:border-slate-800  lg:px-5 text-md lg:py-2 h-11 font-medium lg:m-2 text-black items-center hover:text-white hover:bg-black">Color
                                    {!colordropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    }
                                </button>
                                {colordropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-800 z-20 p-1 flex text-md items-start whitespace-nowrap w-auto bg-white font-bold">
                                        {Array.from(new Set(products.map((product) => product.color))).filter(Boolean).map((color, index) => (
                                            <div className="flex flex-col items-center">
                                                {color == "black" || color == "white" ? (
                                                    <>
                                                        <button className={`border border-slate-500 w-10 h-10 rounded-full bg-${color} hover:border-black p-1 m-2`} key={index}></button>
                                                        <h3>{color}</h3>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button className={`border border-slate-500 w-10 h-10 rounded-full bg-${color}-500 hover:border-black p-1 m-2`} key={index}></button>
                                                        <h3>{color}</h3>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => setactivedropopen((prev) => !prev)} className="flex lg:border lg:border-slate-800  lg:px-5 text-md lg:py-2 h-11 font-medium lg:m-2 text-black items-center hover:text-white hover:bg-black">Activity
                                    {!activedropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    }
                                </button>
                                {activedropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-800 z-20 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        <div className="overflow-scroll hover:scroll-m-1">
                                            {Array.from(new Set(products.map((product) => product.activity))).filter(Boolean).map((activity, index) => (
                                                <div className="flex text-sm p-1 m-3 whitespace-nowrap" key={index}>
                                                    <input type="checkbox" value={activity}></input>
                                                    <label>
                                                        {activity}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => setcollabdropopen((prev) => !prev)} className="flex lg:border lg:border-slate-800  lg:px-5 text-md lg:py-2 h-11 font-medium lg:m-2 items-center text-black hover:text-white hover:bg-black">Collaborations and Category
                                    {!collabdropopen ? (
                                        <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                                    ) : <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                                    }
                                </button>
                            </div>
                        </div>
                    ) : <Filter/>}

                </div> 
                <select className="flex border border-slate-800 px-5 z-10 py-2 h-11  font-medium m-3 text-black hover:text-white hover:bg-black">
                    <option >SORT BY</option>
                    <option>high to low</option>
                    <option>low to high</option>
                    <option>Newest</option>
                </select>
            </div>

            <div className="flex justify-between m-8">
                <h1 className="text-xl font-sans font-medium">{products.length} PRODUCTS</h1>
                <div className="flex justify-between text-lg">
                    <TfiLayoutGrid4Alt className=" h-10 w-10 p-2"></TfiLayoutGrid4Alt>
                    <TbLayoutGrid className=" h-10 w-10 p-2"></TbLayoutGrid>
                </div>
            </div>
            <div className="flex flex-wrap m-10 relative z-10">
                {products.map((product) => (
                    <div key={product.id} className="m-3">
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
                                    <button className=" custom-prev hover:bg-black text-white text-[15px] p-2 px-3  w-10 h-10 rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 z-10" onClick={handlePrevButtonClick}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <button className=" custom-next absolute text-white hover:bg-black text-[15px]  w-10 h-10 rounded-full p-2 px-3 top-1/2 right-2 transform -translate-y-1/2 z-10" onClick={handleNextButtonClick}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                                {product.image.map((imageurl, imageindex) => (
                                    <SwiperSlide className="flex justify-center items-center text-center ">
                                        <img
                                            src={imageurl}
                                            alt={product.title}
                                            className="object-cover block "
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
                ))}
            </div>
        </div>

    )
}