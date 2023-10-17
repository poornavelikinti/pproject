"use client"
import Link from "next/link";
import { Disclosure, Popover } from "@headlessui/react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { useState } from "react";
import { Scrollbar } from "swiper/modules";

export default function Footer() {
  let [Supportdropopen, setSupportdropopen] = useState(false);
  let [Aboutdropopen, setAboutdropopen] = useState(false);
  let [Staydropopen, setStaydropopen] = useState(false);
  let [Exploredropopen, setExploredropopen] = useState(false)
  return (
    <footer className="bg-black bottom-0">
      <div className="hidden lg:block">
        <div className="flex">
          <div className="text-white mx-20 mt-10 text-md">
            <h3 className='p-1'>SUPPORT</h3>
            <div className="p-2 flex flex-col">
              <Link href='' className='hover:text-blue-500'>Contact us</Link>
              <Link href='' className='hover:text-blue-500'>Promotions & Sale</Link>
              <Link href='' className='hover:text-blue-500'>Track Order</Link>
              <Link href='' className='hover:text-blue-500'>Privacy Policy</Link>
              <Link href='' className='hover:text-blue-500'>Terms & Conditions</Link>
              <Link href='' className='hover:text-blue-500'>Cookie Settings</Link>
            </div>
          </div>
          <div className='text-white mx-20 text-md mt-10'>
            <div className='p-2 flex flex-col'>
              <Link href='' className='hover:text-blue-500'>FAQs</Link>
              <Link href='' className='hover:text-blue-500'>My Account</Link>
              <Link href='' className='hover:text-blue-500'>Return Policy</Link>
              <Link href='' className='hover:text-blue-500'>Tech Glossary</Link>
              <Link href='' className='hover:text-blue-500'>Initiate Return</Link>
            </div>
          </div>

          <div className='text-white mx-20 text-md mt-10'>
            <h3 className='p-1'>ABOUT</h3>
            <div className='p-2 flex flex-col'>
              <Link href='' className='hover:text-blue-500'>Company</Link>
              <Link href='' className='hover:text-blue-500'>Corporate NEWS</Link>
              <Link href='' className='hover:text-blue-500'>Press Center</Link>
              <Link href='' className='hover:text-blue-500'>Investors</Link>
              <Link href='' className='hover:text-blue-500'>Sustainability</Link>
              <Link href='' className='hover:text-blue-500'>Careers</Link>
              <Link href='' className='hover:text-blue-500'>Store Finder</Link>
              <Link href='' className='hover:text-blue-500'>PUMA DNA</Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-white font-bold text-lg w-auto m-14'>
              <h1>STAY UP TO DATE</h1>
              <div className='flex justify-between mt-2'>
                <Link href='' className='me-12 hover:text-blue-500' title='Youtube' >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
                <Link href='' className='me-12 hover:text-blue-500' title='Twitter'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href='' className='me-12 hover:text-blue-500' title='Pininterest'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                      fill-rule="evenodd"
                      clip-rule="evenodd" />
                  </svg>
                </Link>
                <Link href='' className='me-12 hover:text-blue-500' title='Instagram'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href='' className='me-12 hover:text-blue-500' title='Facebook'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='text-white mt-8 ms-16 font-bold text-lg'>
              <h1>EXPLORE</h1>
              <div className='flex'>
                <Link href=''>
                  <img src='https://play-lh.googleusercontent.com/CfKYBc2M4kIGtrFQbLTliqyydAzXmctpODwWmunj29-xQcO0ffglHgRoGSjwmXvyGDo' className='h-14 w-14 m-3'></img>
                </Link>
                <Link href=''>
                  <img src='https://play-lh.googleusercontent.com/CfKYBc2M4kIGtrFQbLTliqyydAzXmctpODwWmunj29-xQcO0ffglHgRoGSjwmXvyGDo' className='h-14 w-14 m-3'></img>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between align-middle'>
          <div className='flex'>
            <Link href=''>
              <img src='https://content.pymnts.com/wp-content/uploads/2023/09/Visa_Inc_logosvg.png' className='w-12 h-8 mt-4 ms-20 me-3'></img>
            </Link>
            <Link href=''>
              <img src='https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg' className='w-12 h-8 mt-4 me-3'></img>
            </Link>
            <Link href=''>
              <img src='https://images.indianexpress.com/2023/06/1200px-Rupay-Logo.png' className='w-12 h-8 mt-4 me-3'></img>
            </Link>
            <Link href=''>
              <img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg`' className='w-12 h-8 mt-4 me-3'></img>
            </Link>
          </div>

          <div className='h-6 w-16 border border-black  bg-white m-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ROSg4ORJSViyKLTjn3Daz6k2CCRI9WafIA&usqp=CAU"></img>
          </div>
          <div className='text-white m-3'>
            <p>Puma alrights reserved</p>
          </div>
        </div>
      </div>
      <div className="relative lg:hidden">
        <div  data-te-perfect-scrollbar-init className="mx-auto w-full  z-10 overflow-hidden">
          <Disclosure>
            <Disclosure.Button className="flex w-full justify-between bg-black text-white text-left text-sm font-medium" onClick={() => setSupportdropopen((prev) => !prev)}>

              <h1 className="m-3 text-lg">SUPPORT</h1>
              {!Supportdropopen ? (
                <MdOutlineKeyboardArrowDown className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowDown>
              ) : (
                <MdOutlineKeyboardArrowUp className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowUp>
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-2 px-3 text-md bg-black text-white">
              <div className="flex flex-col">
                <Link href='' className='hover:text-blue-500'>Contact us</Link>
                <Link href='' className='hover:text-blue-500'>Promotions & Sale</Link>
                <Link href='' className='hover:text-blue-500'>Track Order</Link>
                <Link href='' className='hover:text-blue-500'>Privacy Policy</Link>
                <Link href='' className='hover:text-blue-500'>Terms & Conditions</Link>
                <Link href='' className='hover:text-blue-500'>Cookie Settings</Link>
                <Link href='' className='hover:text-blue-500'>FAQs</Link>
                <Link href='' className='hover:text-blue-500'>My Account</Link>
                <Link href='' className='hover:text-blue-500'>Return Policy</Link>
                <Link href='' className='hover:text-blue-500'>Tech Glossary</Link>
                <Link href='' className='hover:text-blue-500'>Initiate Return</Link>
              </div>
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="flex w-full justify-between bg-black text-white text-left text-sm font-medium" onClick={() => setAboutdropopen((prev) => !prev)}>

              <h1 className="m-3 text-lg">ABOUT</h1>
              {!Aboutdropopen ? (
                <MdOutlineKeyboardArrowDown className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowDown>
              ) : (
                <MdOutlineKeyboardArrowUp className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowUp>
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-2 px-3 text-md bg-black text-white">
              <div className="flex flex-col">
                <Link href='' className='hover:text-blue-500'>Company</Link>
                <Link href='' className='hover:text-blue-500'>Corporate NEWS</Link>
                <Link href='' className='hover:text-blue-500'>Press Center</Link>
                <Link href='' className='hover:text-blue-500'>Investors</Link>
                <Link href='' className='hover:text-blue-500'>Sustainability</Link>
                <Link href='' className='hover:text-blue-500'>Careers</Link>
                <Link href='' className='hover:text-blue-500'>Store Finder</Link>
                <Link href='' className='hover:text-blue-500'>PUMA DNA</Link>
              </div>
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="flex w-full justify-between bg-black text-white text-left text-sm font-medium" onClick={() => setStaydropopen((prev) => !prev)}>
              <h1 className="m-3 text-lg">STAY UPTO DATE</h1>
              {!Staydropopen ? (
                <MdOutlineKeyboardArrowDown className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowDown>
              ) : (
                <MdOutlineKeyboardArrowUp className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowUp>
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-2 text-sm bg-black text-white">
              <div className='flex '>
                <Link href='' className='px-3 text-sm hover:text-blue-500' title='Youtube' >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
                <Link href='' className='px-4 hover:text-blue-500' title='Twitter'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href='' className='px-4 hover:text-blue-500' title='Pininterest'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                      fill-rule="evenodd"
                      clip-rule="evenodd" />
                  </svg>
                </Link>
                <Link href='' className='px-4 hover:text-blue-500' title='Instagram'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href='' className='px-4 hover:text-blue-500' title='Facebook'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
              </div>
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="flex w-full justify-between bg-black text-white text-left text-sm font-medium" onClick={() => setExploredropopen((prev) => !prev)}>

              <h1 className="m-3 text-lg">EXPLORE</h1>
              {!Exploredropopen ? (
                <MdOutlineKeyboardArrowDown className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowDown>
              ) : (
                <MdOutlineKeyboardArrowUp className="h-8 m-1 text-lg"></MdOutlineKeyboardArrowUp>
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-2 px-3 text-md bg-black text-white">
              <div className='flex'>
                <Link href=''>
                  <img src='https://play-lh.googleusercontent.com/CfKYBc2M4kIGtrFQbLTliqyydAzXmctpODwWmunj29-xQcO0ffglHgRoGSjwmXvyGDo' className='h-14 w-14 m-3'></img>
                </Link>
                <Link href=''>
                  <img src='https://play-lh.googleusercontent.com/CfKYBc2M4kIGtrFQbLTliqyydAzXmctpODwWmunj29-xQcO0ffglHgRoGSjwmXvyGDo' className='h-14 w-14 m-3'></img>
                </Link>
              </div>
            </Disclosure.Panel>
          </Disclosure>
          <div className='flex justify-center items-center border border-white bg-black m-6'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ROSg4ORJSViyKLTjn3Daz6k2CCRI9WafIA&usqp=CAU" className="h-10 w-10 rounded-full p-1"></img>
            <h1 className="text-white ">INDIA</h1>
          </div>
          <div className="border border-b-1 border-white m-6">

          </div>
          <div className='flex justify-between'>
          <div className='flex '>
            <Link href=''>
              <img src='https://content.pymnts.com/wp-content/uploads/2023/09/Visa_Inc_logosvg.png' className='w-12 h-8 m-2 p-2 bg-white'></img>
            </Link>
            <Link href=''>
              <img src='https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg' className='w-12 h-8 m-2 p-2 bg-white'></img>
            </Link>
            <Link href=''>
              <img src='https://images.indianexpress.com/2023/06/1200px-Rupay-Logo.png' className='w-12 h-8 m-2 p-2 bg-white'></img>
            </Link>
            <Link href=''>
              <img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg`' className='w-12 h-8 m-2 p-2 bg-white'></img>
            </Link>
          </div>

          <div className='text-white m-2'>
            <p>Puma alrights reserved</p>
          </div>
        </div>
        </div>
      </div >
    </footer>   
  

  )
}