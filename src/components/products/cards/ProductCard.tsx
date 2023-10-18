"use client"
import React, { useState, useRef } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose } from "react-icons/ai"

import Filter from "./Filter";

import { products } from "../ProductsData";
import CommonProductPage from "../../PLP/CommonProductPage";


export default function ProductCard() {
    const [catdropopen, setcatdropopen] = useState(false);
    const [prodropopen, setprodropopen] = useState(false);
    const [prizedropopen, setprizedropopen] = useState(false);
    const [gendropopen, setgendropopen] = useState(false);
    const [sizedropopen, setsizedropopen] = useState(false);
    const [colordropopen, setcolordropopen] = useState(false);
    const [activedropopen, setactivedropopen] = useState(false);
    const [collabdropopen, setcollabdropopen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [mobileview, setmobileview] = useState(false)
    const [closebtn, setclosebtn] = useState(true);
    
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

           <CommonProductPage/>
        </div>

    )
}