"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { ProfileCard } from "../loginpage/LoginPage"


export default function Header() {
  const [ButtonHidden, setButtonHidden] = useState(true);
  const Lastindex = (navLink, currentIndex) => {
    currentIndex === (navLink.length - 1);
  }

  const [Open, setOpen] = useState(false);
  const [popoverStates, setPopoverStates] = useState({});
  const togglePopover = (navlink, show = true) => {
    setPopoverStates((prevState) => ({
      ...prevState,
      [navlink]: show,
    }));
  };


  const togglesortDropdown = () => {
    setOpen(!Open);
  };
  const toggleDropOpen = (navlink) => {
    // setDropOpenStates((prevStates) => ({
    //   ...prevStates,
    //   [navlink]: !prevStates[navlink],
    // }));
  };
  let navbardetails = [
    {
      "navlink": "New", "menu": "true",
      "link": "",
      "categories": [{
        "category": "Launch Calender",
        "Subcategory": [{ "type": "Terrace" }, { "type": "#PUMADive" }, { "type": "PUMAxRIPNDIP" }, { "type": "PUMAxWINTER RINK" }, { "type": "PUMAxRHUIGI" }, { "type": "Anushka's Favourite Fits" }, { "type": "PUMAxTHE SUMRFS" }, { "type": "Mancity 23/24 Kit" }, { "type": "Nitro Collection" }, { "type": "PUMA 75 YEARS" }
        ]
      }, {
        "category": "Shop By Gender",
        "Subcategory": [{ "type": "Men" }, { "type": "Women" }, { "type": "Kids & Teams" }
        ]
      }, {
        "category": "Classics",
        "Subcategory": [{ "type": "Shoes" }, { "type": "Clothing" }, { "type": "Accessories" }]
      }, {
        "category": "Sneaker Store",
        "Subcategory": [{ "type": "RS" }, { "type": "Cali" }, { "type": "Mayze" }, { "type": "Rider" }, { "type": "Slipstream" }, { "type": "Suede" }, { "type": "Palermo" }, { "type": "Clyde" }
        ]
      }
      ]
    }, {
      "navlink": "Women", "menu": "true",
      "link": "/123",
      "categories": [{
        "category": "Sale",
        "Subcategory": [{ "type": "New & Trending" }, { "type": "#PUMADive" }, { "type": "Softride" }, { "type": "Terrace" }, { "type": "Anushka's Favourite Fits" }, { "type": "Nitro Running" }, { "type": "Curated by Shanaya" }, { "type": "Sports Bras" }, { "type": "Maternity Clothing" }, { "type": "Sustainable Collection" }
        ]
      }, {
        "category": "Shoes",
        "Subcategory": [{ "type": "Sneakers" }, { "type": "Running" }, { "type": "Walking" }, { "type": "Training & Gym" }, { "type": "Slip-ons & Ballerinas" }, { "type": "Sandals & Flip Flops" }, { "type": "Motorsport" }, { "type": "Badminton" }, { "type": "Softride" }, { "type": "Nitro" }
        ]
      }, {
        "category": "Clothing",
        "Subcategory": [{ "type": "T-Shirts & Tops" }, { "type": "Polos" }, { "type": "Sports Bras" }, { "type": "Jackets" }, { "type": "Sweatshirts & Hoodies" }, { "type": "Shorts" }, { "type": "Pants" }, { "type": "Tights & Leggings" }, { "type": "Dresses & Skirts" }, { "type": "Maternity Clothing" }, { "type": "Home wear" }, { "type": "Innerwear" }, { "type": "ModestWear" }, { "type": "Motorsport" }, { "type": "Tracksuits" },
        ]
      }, {
        "category": "Accessories",
        "Subcategory": [{ "type": "Caps & Beanies" }, { "type": "Backpacks" }, { "type": "Bags,Gym & Casual" }, { "type": "Socks" }, { "type": "Water Bottles" }, { "type": "Sports Equipment" }, { "type": "Wallets" }, { "type": "Gloves" }, { "type": "Face Masks" }, { "type": "Motor Sport" }, { "type": "Eyeewear" }
        ]
      }, {
        "category": "Sports",
        "Subcategory": [{ "type": "Yoga" }, { "type": "Running" }, { "type": "Traning" }, { "type": "Basketball" }, { "type": "Badminton" }, { "type": "Cricket" }, { "type": "Football" }
        ]
      }, {
        "category": "Mototsport",
        "Subcategory": [{ "type": "Scuderia Ferrari" }, { "type": "BMW M Motorsport" }
        ]
      }]
    },
    {
      "navlink": "Men", "menu": "true",
      "link": "",
      "categories": [{
        "category": "Sale",
        "Subcategory": [{ "type": "New & Trending" }, { "type": "#PUMADive" }, { "type": "Terrace" }, { "type": "Nitro Running" }, { "type": "Motorsport" }, { "type": "Softride" }, { "type": "Sustainable Collection" }
        ]
      }, {
        "category": "Shoes",
        "Subcategory": [{ "type": "Sneakers" }, { "type": "Running" }, { "type": "Walking" }, { "type": "Training & Gym" }, { "type": "Slip-ons" }, { "type": "Sandals & Flip Flops" }, { "type": "Motorsport" }, { "type": "Cricket" }, { "type": "Badmintion" }, { "type": "Basketball" }, { "type": "Football" }, { "type": "Softride" }, { "type": "Nitro" }, { "type": "TRC Blaze" }
        ]
      }, {
        "category": "Clothing",
        "Subcategory": [{ "type": "T-shirts Active & Casual" }, { "type": "Polos" }, { "type": "Jackets" }, { "type": "Sweatshirts & Hoodies" }, { "type": "Pants" }, { "type": "Shorts" }, { "type": "Tracksuits" }, { "type": "Teamsuits" }, { "type": "Team Jerseys" }, { "type": "Homewear" }, { "type": "Thermals & Winterwear" }, { "type": "Innerwear" }, { "type": "Motorsport" }
        ]
      }, {
        "category": "Accessories",
        "Subcategory": [{ "type": "Caps & Beanies" }, { "type": "Backpacks" }, { "type": "Bags Gym & Casual" }, { "type": "Socks" }, { "type": "Face Masks" }, { "type": "Gloves" }, { "type": "Sports Equipment" }, { "type": "Wallets" }, { "type": "Water Bottles" }, { "type": "Motorsport" }, { "type": "Eyewear" }
        ]
      }, {
        "category": "Sports",
        "Subcategory": [{ "type": "Cricket" }, { "type": "Football" }, { "type": "Basketball" }, { "type": "Running" }, { "type": "Traning and Gym" }, { "type": "Badminton" }, { "type": "Golf" }, { "type": "Yoga" }
        ]
      }, {
        "category": "Motosport",
        "Subcategory": [{ "type": "Scuderia Ferrari" }, { "type": "BMQ M Motorsport" }, { "type": "Merceded AMG Pertronas" }, { "type": "Porsche Legacy" }]
      },
      ]
    },
    {
      "navlink": "Kids", "menu": "true",
      "link": "",
      "categories": [{
        "category": "Sale",
        "Subcategory": [{ "type": "New & Trending" }, { "type": "School Store" }, { "type": "Shoes Under $3000" }, { "type": "Clothing under $1000" }, { "type": "Vacay Queen" }, { "type": "Puma Mates" }, { "type": "Motorsport" }, { "type": "Essentials" }, { "type": "one8" }
        ]
      }, {
        "category": "Season's Favourites",
        "Subcategory": [{ "type": "PUMAxMIRACULOUS" }, { "type": "PUMAxSPONGEBOB" }, { "type": "School Store" }, { "type": "Super Puma" }, { "type": "Sets" }, { "type": "Homewear" }
        ]
      }, {
        "category": "Boys",
        "Subcategory": [{ "type": "Bags & Accessories" }, { "type": "Shoes" }, { "type": "Casual" }, { "type": "Sports" }, { "type": "Sandals & Flip Flops" }, { "type": "School Shoes" }, { "type": "Clothing" }, { "type": "T-Shirts" }, { "type": "Hoodies & Sweatshirts" }, { "type": "Pants & Shorts" }, { "type": "Jackets" }, { "type": "Age 0-4 YEARS" }, { "type": "Age 4-8 YEARS" }, , { "type": "Age 8-16 YEARS" }
        ]
      }, {
        "category": "Girls",
        "Subcategory": [{ "type": "Bags & Accessories" }, { "type": "Shoes" }, { "type": "Casual" }, { "type": "Sports" }, { "type": "Sandals & Flip Flops" }, { "type": "School Shoes" }, { "type": "Clothing" }, { "type": "T-Shirts" }, { "type": "Hoodies & Sweatshirts" }, { "type": "Jackets" }, { "type": "Pants & Shorts" }, { "type": "Age 0-4 YEARS" }, { "type": "Age 4-8 YEARS" }, , { "type": "Age 8-16 YEARS" }
        ]
      }, {
        "category": "Sports",
        "Subcategory": [{ "type": "Cricket" }, { "type": "Football" }, { "type": "Running" }, { "type": "Indoor Sports" }
        ]
      }, {
        "category": "Motorsport",
        "Subcategory": [{ "type": "Scuderia Ferrari" }, { "type": "BMQ M Motorsport" }, { "type": "Merceded AMG Pertronas" }]
      },
      ]
    },
    {
      "navlink": "FENTYxPUMA",
      "link": "",
    },
    {
      "navlink": "Motorsport", "menu": "true",
      "categories": [{
        "category": "",
        "Subcategory": [{ "type": "Motorsport Store" }, { "type": "Scuderia Ferrari" }, { "type": "Mercedes AMG Petronas" }, { "type": "BMW M Motorsport" }]
      }, {
        "category": "",
        "Subcategory": [{ "type": "Porsche Legacy" }, { "type": "Porsche Design" }, { "type": "Shoes" }, { "type": "Clothing" }]
      }, {
        "category": "",
        "Subcategory": [{ "type": "Accessories" }]
      }]
    },
    {
      "navlink": "Collaborations", "menu": "true",
      "link": "",
      "categories": [{
        "category": "Select",
        "Subcategory": [{ "type": "PUMAxDAPPER DAN" }, { "type": "PUMAxRHUIGI" }, { "type": "MMQ" }, { "type": "PUMAxWINTER RINK" }, { "type": "PUMAxSPONGEBOB | KIDS" }]
      }, {
        "category": "Partnerships",
        "Subcategory": [{ "type": "PUMAxRIPNDIP" }, { "type": "PUMAxTHE SMURFS" }, { "type": "Manchester City FC" }, { "type": "PUMA x PALM TREE CREW" }, { "type": "PUMA x LEMLEM" }, { "type": "PUMA x MIRACULOUS" }, { "type": "Mumbai City FC" }, { "type": "PUMA x one8" }, { "type": "A C Milan" }, { "type": "Neymar Jr" }, { "type": "BVB" }, { "type": "PUMA x RCB" }, { "type": "bengaluru FC" }, { "type": "PUMA x HARRDY SANDHU" }, { "type": "PUMA x CIELE" }]
      }]
    },
    {
      "navlink": "Sports", "menu": "true",
      "link": "",
      "categories": [{
        "category": "Running",
        "Subcategory": [{ "type": "Running Store" }, { "type": "Everyday Running" }, { "type": "5-10km Running" }, { "type": "Long Distance Running" }, { "type": "Clothing" }, { "type": "Accessories" }, { "type": "Nitro Collection" }, { "type": "First Mile" }, { "type": "Seasons Collection" }]
      }, {
        "category": "Training",
        "Subcategory": [{ "type": "Shoes" }, { "type": "Gym Wear" }, { "type": "Gym Bags & Accessories" }, { "type": "Yoga" }, { "type": "Sports Bras" }, { "type": "Maternity Wear" }]
      }, {
        "category": "Cricket",
        "Subcategory": [{ "type": "Cricket Shoes-Rubber" }, { "type": "Cricket Shoes-Spike" }, { "type": "Clothing" }, { "type": "Cricket Gear & Accessories" }, { "type": "Puma x RCB" }]
      }, {
        "category": "Football",
        "Subcategory": [{ "type": "Turf Traniners" }, { "type": "Firm/Artificial Ground Boots" }, { "type": "Indoor Shoes" }, { "type": "Clothing" }, { "type": "Footballs & Accessories" }, { "type": "Manchester City FC" }, { "type": "BVB" }, { "type": "AC Milan" }, { "type": "Mumbai City FC" }, { "type": "Bengaluru FC" }, { "type": "Pursuit Pack" }]
      }, {
        "category": "Running",
        "Subcategory": [{ "type": "Shoes" }, { "type": "Clothing" }]
      }]
    },
    {
      "navlink": "Outlet", "menu": "true",
      "link": "",
      "categories": [{
        "category": "Sale",
        "Subcategory": [{ "type": "Shop All Outlet" }, { "type": "Sport Shoes from $1799" }, { "type": "Motorsport Starting from $999" }, { "type": "Everything under $1000" }, { "type": "New to Outlet" }]
      }, {
        "category": "Outlet Men",
        "Subcategory": [{ "type": "Bags & Accessories" }, { "type": "Shoes" }, { "type": "Casual" }, { "type": "Sandals & Flip Flops" }, { "type": "Sports" }, { "type": "Motorsport" }, { "type": "Clothing" }, { "type": "T-Shirt" }, { "type": "Hoodies & Sweatshirts" }, { "type": "Jackets" }, { "type": "Pants & Shorts" }, { "type": "Polos" }, { "type": "Tracksuits" }]
      }, {
        "category": "Outlet Women",
        "Subcategory": [{ "type": "Bags & Accessories" }, { "type": "Shoes" }, { "type": "Casual" }, { "type": "Sandals & Flip Flops" }, { "type": "Sports" }, { "type": "Motorsport" }, { "type": "Clothing" }, { "type": "T-Shirt" }, { "type": "Hoodies & Sweatshirts" }, { "type": "Jackets" }, { "type": "Pants & Shorts" }, { "type": "Tights & Leggings" }, { "type": "Innerwear" }]
      }, {
        "category": "Outlet Kids",
        "Subcategory": [{ "type": "Shoes" }, { "type": "Casual" }, { "type": "Sandals & Flip Flops" }, { "type": "Sports" }, { "type": "Motorsport" }, { "type": "Clothing" }, { "type": "Tshirts & Tops" }, { "type": "Hoodies & Sweatshirts" }, { "type": "Jackets" }, { "type": "Pants & Shorts" }, { "type": "Leggings" }]
      }, {
        "category": "Outlet Motorsport",
        "Subcategory": [{ "type": "BMW M Motorsport" }, { "type": "Mercedes AMG Petronas" }, { "type": "Scuderia Ferrari" }, { "type": "Porsche Legacy" }]
      }, {
        "category": "Outlet Sports",
        "Subcategory": [{ "type": "Cricket" }, { "type": "Football" }, { "type": "Running" }, { "type": "Basketball" }, { "type": "Training" }, { "type": "Badminton" }
        ]
      }]
    }
  ]
  const arr = [
    "EXTRA 5% INSTANT DISCOUNT FOR ALL ONLINE PAYMENTS",
    "FREE DELIVERIES.FREE RETURNS",
    "CATCH THE #PUMADive CLICK TO KNOW MORE"
  ]
  const toggleButtonHidden = () => {
    setButtonHidden(!ButtonHidden);
  };

  // setInterval(() => {
  //   setTextContent((prevIndex) => (prevIndex + 1) % arr.length);
  // }, 3000);

  // const text = arr[textContent];

  return (

    <div className="sticky top-0 z-20 w-full">
      <header className="m-0">
        <div className="text-xs font-bold lg:text-lg flex justify-center items-center align-middle p-2 px-0 h-10 bg-yellow-600">
          <p className="text-center">EXTRA 5% INSTANT DISCOUNT FOR ALL ONLINE PAYMENTS</p>
        </div>
        <nav className="flex bg-black text-white">
          <Link href='/' className=' '>
            <img src='https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover.png' className='w-[60px] h-12 lg:w-[120px] lg:h-[60px] lg:mt-4 mt-2'></img>
          </Link>
          <div className="hidden lg:block">
            <div className="flex items-center z-30 justify-center lg-flex-row text-lg pt-2">
              {
                navbardetails.map((nav, index) => {
                  console.log(nav.navlink);
                  return (
                    // <div key={nav.navlink}>
                      <Popover>
                        {({ open }) => (
                          <div
                            className="flex items-center z-30 justify-center  lg-flex-row text-l me-3"
                            onMouseEnter={() => togglePopover(nav.navlink, true)}
                            onMouseLeave={() => togglePopover(nav.navlink, false)}
                          >
                            <Popover.Button className="pt-5 hover:underline">
                              {nav.link == undefined ? (
                                " "
                              ) : (
                                <Link href={nav.link} className="p-3 pt-4 text-md font-semibold">
                                  {nav.navlink}
                                </Link>
                              )}

                              <Transition show={popoverStates[nav.navlink]}
                                // <Transition.Child>
                                  enter="transition duration-300 ease-out transform translate-y-0 "
                                  enterFrom="opacity-0 translate-y-[50%]"
                                  enterTo="opacity-100 translate-y-[100%]"
                                  leave="transition duration-300 ease-out transform translate-y-0 "
                                  leaveFrom="opacity-100 translate-y-[100%]"
                                  leaveTo="opacity-0 translate-y-0">
                                
                                {
                                  nav.navlink === "FENTYxPUMA" ? ("") : (
                                    <div className="absolute left-[-50px]">
                                    <Popover.Panel static className="fixed right-0 left-[-100px] top-[30px] text-left">
                                      <div className="flex overflow-x-auto pl-[60px] pt-[30px] pb-[50px] bg-white  w-screen">
                                        {nav.menu &&
                                          nav.categories.map((category) => (
                                            <div key={category.category} className="w-[270px]">
                                              <h1 className="font-bold m-1 mt-5">
                                                {category.category === "Sale" ? (
                                                  <Link href="" className="text-red-600 font-normal border-none">
                                                    {category.category}
                                                  </Link>
                                                ) : (
                                                  <Link href="" className="text-lg text-slate-700">
                                                    {category.category}
                                                  </Link>
                                                )}

                                              </h1>
                                              {category.category === "Sale" || category.category === "Launch Calender" || category.category === "" ? (
                                                ""
                                              ) : (
                                                <div className="border border-b-2 border-slate-800 m-10 mt-0 ms-0 mb-2"></div>
                                              )}
                                              <div className="flex flex-col me-5">
                                                {category.category === "Sale" || category.category === "Launch Calender"
                                                  ? category.Subcategory.map((subcat) =>
                                                    subcat.type === "New & Trending" ? (
                                                      <li key={subcat.type} className="list-none text-amber-900 m-1 font-bold flex flex-col">
                                                        <Link href="" className="text-md">
                                                          {subcat.type}
                                                        </Link>
                                                      </li>
                                                    ) : (
                                                      <li key={subcat.type} className="list-none text-slate-600 m-1 font-bold flex flex-col">
                                                        <Link href="" className="hover:text-black text-md">
                                                          {subcat.type}
                                                        </Link>
                                                      </li>
                                                    )
                                                  )
                                                  : category.Subcategory.map((subcat) => (
                                                    <li key={subcat.type} className="list-none text-slate-600 m-1 flex flex-col">
                                                      <Link href="" className="hover:text-black text-sm">
                                                        {subcat.type}
                                                      </Link>
                                                    </li>
                                                  ))}

                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </Popover.Panel>
                                    </div>
                                  )}
                                  {/* </Transition.Child> */}
                              </Transition>
                            </Popover.Button>
                          </div>
                        )}
                      </Popover>
                    // </div>
                  )
                })
              }
            </div>
          </div>
          <div className='flex lg:m-3 justify-end items-end ml-auto lg:ml-auto'>
            <div>
              <input type='text' placeholder='  SEARCH' className='h-8 justify-center align-center lg:block hidden text-white border bg-transparent hover:text-slate-500 border-white w-40 p-5 m-3' />
              <FiSearch className="lg:hidden m-5 text-xl" />
            </div>
            <Link href='/login/wishlist' className='m-5 mx-3 lg:m-5 hover:text-blue-500' title='likes'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 bg-inherit hover:rounded bg-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </Link>
            <Link href="" className='m-5 mx-3 lg:m-5 hover:text-blue-500' title='cart'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </Link>
            <button onClick={togglesortDropdown}>
              <Link href='' className='m-5 mx-3 lg:m-5 relative hover:text-blue-500 hidden lg:block' title='profile'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </button>
            <div className="hidden lg:block">
              <div className={`flex flex-col relative ${Open ? 'block' : 'hidden'}`}>
                <div className="w-10 h-10 bg-white right-[25px] fixed rotate-45"></div>
                <div className='absolute w-[340px] h-[350px] right-[5px] p-1 border border-slate-400  text-md text-black bg-white rounded'>
                  <div className="flex flex-col justify-end items-start py-3">
                    <Link href='' className=" m-1 mx-4 my-1 p-1 border-b-2 w-[290px] border-slate-400 ">My Account</Link>
                    <Link href='' className=" m-1 mx-4 my-1 p-1 border-b-2 w-[290px] border-slate-400 ">Wishlist</Link>
                    <Link href='' className=" m-1 mx-4 my-1 p-1 border-b-2 w-[290px] border-slate-400 ">Check Order/Initiate Return</Link>
                    <Link href='' className=" m-1 mx-4 my-1 p-1 border-b-2 w-[290px] border-slate-400 ">Store Finder</Link>
                    <Link href='' className=" m-1 mx-4 my-1 p-1">Language</Link>
                  </div>
                  <div className="flex flex-col">
                    <button className="border border-black bg-black text-white m-1 mx-4 my-1 p-1 font-bold py-2 ">LOGIN</button>
                    <button className="border border-black bg-white text-black m-1 mx-4 my-1 p-1 font-bold py-2">REGISTER HERE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* for mobile view */}
          <Popover className={"relative lg:hidden "}>
            <Popover.Button
              className={"m-3 p-2 font-bold text-white ml-auto"}
              onClick={toggleButtonHidden}
            >
              <div className="flex">
                {
                  ButtonHidden ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 me-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>)
                }
                <p className="font-normal text-sm">MENU</p>
              </div>
            </Popover.Button>

            <Popover.Panel className={"w-full max-h-max left-0 right-0 fixed"}>
              <div className="flex flex-col bg-white overflow-y-scroll w-full h-screen ">

                {navbardetails.map((nav) => (

                  nav.navlink == "FENTYxPUMA" ? (<div className="flex justify-between text-lg items-center border-b-2 m-1 mx-4 border-slate-200">
                    <Link href="" className="m-2 text-black hover:text-red-500 hover:underline">
                      {nav.navlink}
                    </Link>
                  </div>) : (<div className={`flex justify-between text-xl items-center border-b-2 m-1 mx-4 ${Lastindex ? '' : 'border-b-2 border-slate-200'}`}>
                    <Link href="" className="m-2 font-bold text-black hover:text-red-500 hover:underline">
                      {nav.navlink}
                    </Link>
                    <MdOutlineKeyboardArrowRight className="h-8 m-1 text-black"></MdOutlineKeyboardArrowRight>
                  </div>)

                ))}

                <div className=" flex flex-col text-md w-full text-black my-2">
                  <Link href='' className="border-b-2 m-1 mx-4 border-slate-200 px-2 pb-2">My Account</Link>
                  <Link href='' className="border-b-2 m-1 mx-4 border-slate-200 px-2 pb-2">Wishlist</Link>
                  <Link href='' className="border-b-2 m-1 mx-4 border-slate-200 px-2 pb-2">Check Order/Initiate Return</Link>
                  <Link href='' className="border-b-2 m-1 mx-4 border-slate-200 px-2 pb-2">Store Finder</Link>
                  <Link href='' className="border-b-2 m-1 mx-4 border-slate-200 px-2 pb-2">Language</Link>
                </div>
                <div className="flex flex-col">
                  <button className="border border-black bg-black text-white">LOGIN</button>
                  <button className="border border-white bg-white text-black">REGISTER HERE</button>
                </div>

              </div>

            </Popover.Panel>
          </Popover>
        </nav>
      </header>
    </div>
  )
}


