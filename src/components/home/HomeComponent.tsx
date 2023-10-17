import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

function HomeComponent() {
    let homeimages = [
        {
            "img": "https://footwearnews.com/wp-content/uploads/2023/07/puma-classics-s2.jpg?w=1800&h=1042&crop=1"
        },
        {
            "img": "https://www.financialexpress.com/wp-content/uploads/2023/10/Godrej-2023-10-02T170104.165.jpg"
        },
        {
            "img": "https://medias.spotern.com/spots/share/147/147872-1532336916.png"
        },
        {
            "img": "https://bilder.baur.de/i/empiriecom/273ffdec278e35332ecd11217acd31c1.jpg?$format_dv_mob_075$"
        },
        {
            "img": "https://www.sneakertownmia.com/cdn/shop/products/DSC00221_a51e7044-7b71-4d6e-ae32-d5033df80941_large.jpg?v=1695170537"
        },
        {
            "img": " https://m.economictimes.com/thumb/msid-70658647,width-1200,height-900,resizemode-4,imgsize-957130/shoe-canvas_thinkstockphotos.jpg"
        },
        {
            "img":"https://c4.wallpaperflare.com/wallpaper/649/115/707/5bd241ed790ed-wallpaper-preview.jpg"
        },
        {
            "img": "https://www.dnpindia.in/wp-content/uploads/2022/12/xconvert.com-72-2.webp"
        },
        {
            "img": "https://blog.sneakerjagers.com/de/de_de/wp-content/uploads/2020/07/Puma-Unity-1-1024x576.png"
        },
        {
            "img": "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1024,h_723/https://www.blow-ent.com/wp-content/uploads/2020/08/Puma-4.jpg"
        },
        {
            "img": "https://biharivoice.com/wp-content/uploads/2022/12/IMG_20190921_151654-1024x674-1.png"
        },
        {
            "img": "https://img.buzzfeed.com/buzzfeed-static/complex/images/ejfcnqbqntkwlpyzfif1/puma-bc-one.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto"
        },
        {
            "img": "https://i.pinimg.com/originals/57/3f/93/573f9308ce84c276015b41d5e3674eb3.jpg"
        },
    ]
    return (
        <div>
            <div className='relative'>
                <img src={homeimages[0].img} alt="Image 1" className='bg-cover w-full mb-6'></img>
                <div className='absolute top-[30%] lg:left-[50px] flex flex-col justify-center items-center'>
                    <div className='text-center lg:text-black text-white'>
                        <h1 className='font-bold lg:text-5xl text-2xl'>NEW & TRENDING</h1>
                        <p className='lg:text-3xl text-xl'>LEVEL UP YOUR STYLE GAME</p>
                    </div>
                    <div className='flex m-3 text-md font-bold text-white'>
                        <Link href='' className='m-3 border border-black text-center bg-black p-2 w-[100px] h-[40px]'>MEN</Link>
                        <Link href='' className='m-3 border border-black text-center bg-black p-2 w-[100px] h-[40px]'>WOMEN</Link>
                        <Link href='' className='m-3 border border-black text-center bg-black p-2 w-[100px] h-[40px]'>KIDS</Link>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={homeimages[1].img} alt="Image 2" className='bg-cover w-full mb-6' />
                <div className='absolute lg:top-[60%] top-[20%] lg:left-[75px] text-center'>
                    <h1 className='text-xl lg:text-4xl font-bold'>CATCH THE</h1>
                    <h1 className='text-xl lg:text-4xl font-bold'>#PUMADive</h1>
                    <p className='text-xl lg:text-2xl m-2'>CLICK.SHARE.WIN</p>
                    <div className='m-4 lg:m-7'>
                        <Link href='' className='border border-white bg-white font-bold text-black p-3'>KNOW MORE</Link>
                    </div>
                </div>
                <div className='absolute top-[15%] lg:top-[30%] text-center lg:right-[100px] right-[20px]'>
                    <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
                        <Link href='' className='flex justify-center items-center border border-slate-800 bg-slate-800 rounded-3xl lg:w-[140px] w-[110px] text-white m-1 lg:m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-1 border border-yellow-400 bg-yellow-400 p-2 rounded-full">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <div className='flex flex-col'>
                                <p className='lg:text-lg text-xs'>Capture</p>
                                <p className='lg:text-lg text-xs'>Any Dive</p>
                            </div>
                        </Link>
                        <Link href='' className='flex justify-center items-center border border-slate-800 bg-slate-800 rounded-3xl lg:w-[160px] w-[120px] text-white m-1 lg:m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-1 border border-yellow-400 bg-yellow-400 p-2 rounded-full">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <div className='flex flex-col'>
                                <p className='lg:text-lg text-xs'>Post in on X</p>
                                <p className='lg:text-lg text-xs'> #PUMADive</p>
                            </div>
                        </Link>
                        <Link href='' className='flex justify-center items-center border border-slate-800 bg-slate-800 rounded-3xl lg:w-[140px] w-[120px]  text-white m-1 lg:m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-1 border border-yellow-400 bg-yellow-400 p-2 rounded-full">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <div className='flex flex-col'>
                                <p className='lg:text-lg text-xs'>Win</p>
                                <p className='lg:text-lg text-xs'>Rewards</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-[80px] bg-white flex justify-center align-middle items-center text-2xl font-bold'>
                <h1 className=''>LATEST IN COLLABORATIONS</h1>
            </div>
            <div className='flex m-3'>
                <div className='flex flex-col m-2'>
                    <img src={homeimages[2].img} alt="Image 3" className='lg:w-[800px] lg:h-[700px] m-3' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-lg'>PUMA x PLEASURES</h1>
                        <p className='text-sm'>COMING SOON</p>
                        <button className='m-3 border border-black bg-black p-2 text-white font-bold lg:w-[250px] w-[150px] lg:text-lg'>NOTIFY ME</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={homeimages[3].img} alt="Image 4" className='lg:w-[800px] lg:h-[700px] m-3' />
                    <h1 className='font-bold text-lg'>PUMA x P.A.M</h1>
                    <p className='lg:text-sm text-xs'>RE-ENTERING THE PAM/PUMA BIO/VERSE</p>
                    <button className='m-2 lg:m-3 border border-black bg-black p-2 text-white font-bold lg:w-[250px] w-[150px] text-xs lg:text-lg'>SHOP COLLECTION</button>
                </div>
            </div>
            <div className='relative'>
                <img src={homeimages[4].img} alt="Image 5" className='bg-cover w-full mb-6 h-[50%]' />
                <div className='text-white absolute top-[20%] lg:top-[40%] right-[10px] lg:right-[100px] text-center'>
                    <h1 className='font-bold text-5xl m-1'>GARAGE CREWS</h1>
                    <h1 className='text-2xl m-1'>PUMA x MERCEDES-AMG PETRONAS F1 TEAM</h1>
                    <button className='border border-white bg-white text-black px-6 py-3 font-bold m-3'>
                        <Link href="" className=''>SHOP NOW</Link>
                    </button>
                </div>
            </div>
            <div className="bg-video mb-[50px]">
                <video className="bg-video__content bg" autoplay="true" loop muted>
                    <source src="https://cdn.sanity.io/files/qa41whrn/staging/c4a7a72fd42ce88f4e67faa77e7653798ec6b329.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='w-full h-[500px] mb-[50px] z-50 lg:bg-blue-600'>
                <div className="bg-video lg:hidden z-10 md:flex md:items-end md:justify-end">
                    <video className="bg-video__content" autoplay="true" loop muted>
                        <source src="https://cdn.sanity.io/files/qa41whrn/staging/c4a7a72fd42ce88f4e67faa77e7653798ec6b329.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className='relative m-4'>
                    <div className='pt-5 flex flex-col lg:justify-start justify-center lg:items-start items-center text-center'>
                        <h1 className='font-bold lg:text-5xl text-2xl'>INTRODUCING MB.03</h1>
                        <p className='lg:text-2xl text-lg'>THE NEWEST ITERATION OF LAMELO BALLS'S</p>
                        <p className='lg:text-2xl text-lg'>SIGNATURE SHOE</p>
                        <p>The shoe's disruptive design is complemented by a supportive,double-layered mesh upper and a
                            Nitrofoam midsole for power on the court</p>
                        <button className='border border-slate-600 bg-slate-600 font-bold text-white px-4 py-2 mt-2'>
                            <Link href=''>SHOP NOW</Link>
                        </button>
                    </div>
                    <div className='absolute mb-[50px] z-10'>
                        <img src={homeimages[5].img} alt="Image 6" className='h-[350px] w-[700px] mb-6 mt-9' />
                    </div>
                </div>
            </div>
            <div className='lg:mt-[120px] mt-[300px] lg:mb-[70px]'>
                <div className='absolute w-full h-full'>
                <img src={homeimages[6].img} alt="image 7" className='w-full h-[500px]'></img>
                </div>
                <div className='relative'>
                <div className='flex flex-col items-center text-white'>
                    <h1 className='lg:text-4xl text-2xl font-bold'>FENTY x PUMA</h1>
                    <h1 className='lg:text-3xl tex-xl'>NEW AVANTI DROP COMING SOON</h1>
                    <button className='border border-black bg-black text-white px-4 py-3 m-4'>
                        <Link href=''>SIGN UP NOW</Link>
                    </button>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default HomeComponent