"use client"
import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose } from "react-icons/ai"



export default function Filter() {
    let [catdropopen, setcatdropopen] = useState(false);
    let [closebtn, setclosebtn] = useState(true);
    let [prodropopen, setprodropopen] = useState(false);
    let [prizedropopen, setprizedropopen] = useState(false);
    let [gendropopen, setgendropopen] = useState(false);
    let [sizedropopen, setsizedropopen] = useState(false);
    let [colordropopen, setcolordropopen] = useState(false);
    let [activedropopen, setactivedropopen] = useState(false);
    let [collabdropopen, setcollabdropopen] = useState(false);
    let [mobview, setmobview] = useState(false)
    return (
        <div className={`block ${closebtn ? "block" : "hidden"}`}>
            <div className="w-full h-4/5 z-40 border bg-slate-300 border-l-black lg-hidden">
                <div className="flex justify-between items-center p-2 font-extrabold">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black">Product Filters</h1>
                    <button>
                        <AiOutlineClose className="p-1 rounded w-6 h-6" onClick={() => setclosebtn(!closebtn)}></AiOutlineClose>
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Category
                    </h1>
                    <button onClick={() => setcatdropopen((prev) => !prev)} className="p-2">
                        {!catdropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}

                    </button>
                </div>
                <div className="flex justify-between items-center z-50">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Product type
                    </h1>
                    <button onClick={() => setprodropopen((prev) => !prev)} className="p-2">
                        {!prodropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}

                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Prize
                    </h1>
                    <button onClick={() => setprizedropopen((prev) => !prev)} className="p-2">
                        {!prizedropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}

                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Gender
                    </h1>
                    <button onClick={() => setgendropopen((prev) => !prev)} className="p-2">
                        {!gendropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}

                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Size
                    </h1>
                    <button onClick={() => setsizedropopen((prev) => !prev)} className="p-2">
                        {!sizedropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}

                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Color
                    </h1>
                    <button onClick={() => setcolordropopen((prev) => !prev)} className="p-2">
                        {!colordropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}

                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Activity
                    </h1>
                    <button onClick={() => setactivedropopen((prev) => !prev)} className="p-2">
                        {!activedropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="flex w-full p-2 text-md h-11 font-medium items-center text-black hover:text-white hover:bg-black">
                        Collaborations and Category
                    </h1>
                    <button onClick={() => setcollabdropopen((prev) => !prev)} className="p-2">
                        {!collabdropopen ? (
                            <AiOutlineCaretDown className="h-8 ms-2"></AiOutlineCaretDown>
                        ) : (
                            <AiOutlineCaretUp className="h-8 ms-2"></AiOutlineCaretUp>
                        )}

                    </button>
                </div>
            </div>
        </div>
    )
}