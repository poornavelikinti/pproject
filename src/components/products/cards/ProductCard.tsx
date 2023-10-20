"use client"
import React, { useState, useRef } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose } from "react-icons/ai"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import 'tw-elements';
import { Dropdown } from "tw-elements";
import Filter from "./Filter";
import Link from "next/link";
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
    const [discountdropopen, setdiscountdropopen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [mobileview, setmobileview] = useState(false)
    const [closebtn, setclosebtn] = useState(true);
    const [Open, setOpen] = useState(false);

  const togglesortDropdown = () => {
    setOpen(!Open);
  };
  

    const toggleDropdown = (dropdownType) => {
        // Closing dropdowns
        if (dropdownType === 'category') {
            setcatdropopen(!catdropopen); setprodropopen(false); setprizedropopen(false); setgendropopen(false); setsizedropopen(false); setcolordropopen(false); setactivedropopen(false); setcollabdropopen(false)
        } else if (dropdownType === 'producttype') {
            setcatdropopen(false); setprodropopen(!prodropopen); setprizedropopen(false); setgendropopen(false); setsizedropopen(false); setcolordropopen(false); setactivedropopen(false); setcollabdropopen(false)
        } else if (dropdownType === 'prize') {
            setcatdropopen(false); setprodropopen(false); setprizedropopen(!prizedropopen); setgendropopen(false); setsizedropopen(false); setcolordropopen(false); setactivedropopen(false); setcollabdropopen(false)
        } else if (dropdownType === 'gender') {
            setcatdropopen(false); setprodropopen(false); setprizedropopen(false); setgendropopen(!gendropopen); setsizedropopen(false); setcolordropopen(false); setactivedropopen(false); setcollabdropopen(false)
        } else if (dropdownType === 'size') {
            setcatdropopen(false); setprodropopen(false); setprizedropopen(false); setgendropopen(false); setsizedropopen(!sizedropopen); setcolordropopen(false); setactivedropopen(false); setcollabdropopen(false)
        } else if (dropdownType === 'color') {
            setcatdropopen(false); setprodropopen(false); setprizedropopen(false); setgendropopen(false); setsizedropopen(false); setcolordropopen(!colordropopen); setactivedropopen(false); setcollabdropopen(false)
        } else if (dropdownType === 'active') {
            setcatdropopen(false); setprodropopen(false); setprizedropopen(false); setgendropopen(false); setsizedropopen(false); setcolordropopen(false); setactivedropopen(!activedropopen); setcollabdropopen(false)
        } else if (dropdownType === 'collaborations') {
            setcatdropopen(false); setprodropopen(false); setprizedropopen(false); setgendropopen(false); setsizedropopen(false); setcolordropopen(false); setactivedropopen(false); setcollabdropopen(!collabdropopen)
        }
    };

    return (
        <div className="m-0 font-sans">
            <div className="flex flex-col p-5 bg-[#092444] items-center justify-center w-auto text-white font-bold">
                <p>EXTRA 10% OFF ON ABOVE 2000RS ORDERS</p>
                <p className="text-xs font-normal">Discount auto-applied to orders checkout</p>
            </div>
            <h1 className="text-xl font-bold font-serif m-2 ms-10 p-5">WOMEN</h1>
            <div className="flex justify-between border border-t-gray-300 z-10 border-b-gray-300 items-center">
                <div className="flex justify-center items-center m-1 z-10">
                    <div className="block lg:hidden z-10">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex px-3 py-2 z-10 rounded text-black-500 hover:text-black-400"
                        >
                            <button onClick={() => setmobileview(!mobileview)}
                                className={`flex border z-10 border-slate-800 px-5 py-2 h-11 font-bold m-2 text-black hover:text-white hover:bg-black ${isOpen ? "hidden" : "block"}`}
                            >FILTERS
                            </button>
                        </button>
                    </div>
                    {!mobileview ? (
                        <div className={` lg:flex items-center ${isOpen ? "block" : "hidden"}`}>
                            <div className="ms-[40px] me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                </svg>

                            </div>
                            <div className="relative block p-2 lg:inline-block">
                                <button onClick={() => toggleDropdown('category')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">
                                    Category
                                    {!catdropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    )}
                                </button>
                                {catdropopen && (
                                    <div className="overflow-auto scrollbar-width-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 text-black absolute m-2 lg:border lg:border-slate-300 z-40 lg:w-[200px] h-22 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        {Array.from(new Set(products.map((product) => product.category))).map((category, index) => (
                                            <div className="flex text-sm p-0.25 m-3 z-20 whitespace-nowrap" key={index}>
                                                <input type="checkbox" value={category} className="w-5 h-5"></input>
                                                <label className="ms-4">
                                                    {category}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block">
                                <button onClick={() => toggleDropdown('producttype')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Product Type
                                    {!prodropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                                {prodropopen && (
                                    <div className="overflow-y-scroll scrollbar-width-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 text-black absolute m-2 lg:border lg:border-slate-300 z-40 lg:w-[300px] h-22 p-1 flex flex-col text-md items-start bg-white font-bold">
                                    {Array.from(new Set(products.map((product) => product.prodcuttype))).map((producttype, index) => (
                                        <div className="flex text-sm p-0.25 m-3 z-20 whitespace-nowrap" key={index}>
                                            <input type="checkbox" value={producttype} className="w-5 h-5"></input>
                                            <label className="ms-4">
                                                {producttype}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => toggleDropdown('prize')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Price
                                    {!prizedropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                                {prizedropopen && (
                                    <div className="overflow-auto scrollbar-width-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 text-black absolute lg:w-[250px] m-2 lg:border lg:border-slate-300 z-100 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        <div className="">
                                            {Array.from(new Set(products.map((product) => product.prize))).map((prize, index) => (
                                                <div className="flex text-md font-normal p-0.25 m-3 whitespace-nowrap" key={index}>
                                                    <input type="radio" value={prize} className="w-5 h-5"></input>
                                                    <label className="ms-4">
                                                        {prize}
                                                    </label>
                                                </div>
                                            ))}
                                        </div> 
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => toggleDropdown('gender')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Gender
                                    {!gendropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                                {gendropopen && (
                                    <div className=" text-black absolute lg:border lg:w-[150px] m-2 lg:border-slate-300 z-30 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        {Array.from(new Set(products.map((product) => product.gender))).filter(Boolean).map((gender, index) => (
                                            <div className="flex text-md font-normal p-0.25 m-3 whitespace-nowrap" key={index}>
                                            <input type="radio" value={gender} className="w-5 h-5"></input>
                                            <label className="ms-4">
                                                {gender}
                                            </label>
                                        </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => toggleDropdown('size')} className=" flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Size
                                    {!sizedropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                                {sizedropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-300 z-20 m-2 p-1 flex text-md whitespace-nowrap max-w-xl w-auto bg-white font-bold">
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
                                <button onClick={() => toggleDropdown('color')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Color
                                    {!colordropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                                {colordropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-300 z-20 m-2 p-1 flex text-md items-start whitespace-nowrap w-auto bg-white font-bold">
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
                                <button onClick={() => toggleDropdown('')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Discount
                                    {!discountdropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                                {discountdropopen && (
                                    <div className=" text-black absolute lg:border lg:border-slate-300 z-20 p-1 flex flex-col text-md items-start bg-white font-bold">
                                        <div className="">
                                            {/* {Array.from(new Set(products.map((product) => product))).filter(Boolean).map((activity, index) => (
                                                // <div className="flex text-sm p-1 m-3 whitespace-nowrap" key={index}>
                                                //     <input type="checkbox" value={}></input>
                                                //     <label>
                                                //         {activity}
                                                //     </label>
                                                // </div>
                                            ))} */}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => toggleDropdown('active')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Activity
                                    {!activedropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                                {activedropopen && (
                                    <div className="overflow-auto scrollbar-width-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 max-h-[300px] text-black absolute lg:border lg:border-slate-300 z-20 m-2 p-1 flex flex-col text-md whitespace-nowrap max-w-xl w-auto bg-white font-bold">
                                    {Array.from(new Set(products.map((product) => product.activity))).filter(Boolean).map((activity, index) => (
                                        <div className="">
                                            <div className="flex text-md font-normal p-0.25 m-3 whitespace-nowrap" key={index}>
                                            <input type="radio" value={activity} className="w-5 h-5"></input>
                                            <label className="ms-4">
                                                {activity}
                                            </label>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                                )}
                            </div>
                            <div className="relative block p-2 lg:inline-block ">
                                <button onClick={() => toggleDropdown('collaborations')} className="flex lg:border lg:border-slate-300 p-5 text-md h-11 font-bold  items-center text-black hover:text-white hover:bg-black">Collaborations & PartnerShips
                                    {!collabdropopen ? (
                                        <FontAwesomeIcon icon={faChevronDown} className="h-8 ms-2" />
                                    ) : <FontAwesomeIcon icon={faChevronUp} className="h-8 ms-2" />
                                    }
                                </button>
                            </div>
                        </div>
                    ) : <Filter />}

                </div>
                <div className="relative" data-te-dropdown-ref>
                    <button className="flex border border-slate-300 px-7 z-10 py-2 h-11 me-[20px] font-bold m-2 text-black"
                        type="button"
                        onClick={togglesortDropdown}
                        aria-expanded={Open}
                        data-te-ripple-init
                        data-te-ripple-color="light">                   
                        SORT BY
                        <span className="ml-2 w-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">                          
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </button>
                    <ul className={`absolute m-1 mt-0 ${Open ? 'block' : 'hidden'} z-20 list-none overflow-hidden rounded-lg w-[161px] border-none bg-white`}>                
                        <h6 className="block px-4 py-1 text-md font-semibold bg-sky-400">Sort by</h6>
                        <li>
                            <Link className="block px-2 py-1 whitespace-nowrap text-md text-neutral-700" href="">Discount High to Low</Link>
                        </li>
                        <li>
                            <Link className="block px-2 py-1 whitespace-nowrap text-md text-neutral-700"href="">Best Matches</Link>
                        </li>
                        <li>
                            <Link className="block px-2 py-1 whitespace-nowrap text-md text-neutral-700"href="">Top Sellers</Link>
                        </li>
                        <li>
                            <Link className="block px-2 py-1 whitespace-nowrap text-md text-neutral-700"href="">Prices Low to High</Link>
                        </li>
                        <li>
                            <Link className="block px-2 py-1 whitespace-nowrap text-md text-neutral-700"href="">Prices High to Low</Link>
                        </li>
                        <li>
                            <Link className="block px-2 py-1 whitespace-nowrap text-md text-neutral-700"href="">Newest</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CommonProductPage />
        </div>

    )
}