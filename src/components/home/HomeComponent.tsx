import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

function HomeComponent() {
    let homeimages = [
        {
            "img": "https://cdn.sanity.io/images/qa41whrn/staging/988d9b1f291fb4692b4cd52d6b4338d3ec9942e7-2880x1040.jpg"
        },
        {
            "img":"https://cdn.sanity.io/images/qa41whrn/prod/1c345684d96ceb31aed1a0ebd9ef7efe15803d32-2880x1040.jpg"
        },
        {
            "img": "https://cdn.sanity.io/images/qa41whrn/prod/e15af8a413bb5507caf1e95372f4927706c860c7-1440x550.jpg"
        },
        {
            "img":"https://cdn.sanity.io/images/qa41whrn/prod/ac488bf9c42a1449680678c338d47453e7f26714-2880x1040.jpg"
        },
        {
            "img": "https://medias.spotern.com/spots/share/147/147872-1532336916.png"
        },
        {
            "img": "https://bilder.baur.de/i/empiriecom/273ffdec278e35332ecd11217acd31c1.jpg?$format_dv_mob_075$"
        },
        {
            "img": "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg"
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
            <div className='h-[80px] w-full flex justify-center items-center flex-col bg-blue-950 text-white'>
                <h1 className='lg:font-bold font-semibold text-sm lg:text-lg'>EXTRA 15% OFF ON ORDERS ABOVE $3499</h1>
                <p className='lg:text-sm text-xs'>Discount auto-applied at checkout</p>
            </div>
            <div className='relative'>
                <img src={homeimages[0].img} alt="Image 1" className='bg-cover lg:w-full lg:h-[625px] h-50px mb-6'></img>
                <div className='lg:absolute lg:top-[40%] lg:left-[50px] flex flex-col justify-center items-center'>
                    <div className='text-center text-black'>
                        <h1 className='font-semibold lg:text-5xl text-xl lg:mb-2 '>NEW & TRENDING</h1>
                        <p className='lg:text-3xl text-xs font-normal'>LEVEL UP YOUR STYLE GAME</p>
                    </div> 
                    <div className='flex lg:m-3 m-2 text-md font-bold text-white'>
                        <Link href='' className='lg:m-3 border border-black text-center bg-black p-2 px-5 lg:p-3 m-1 lg:w-[100px] lg:h-[45px]'>MEN</Link>
                        <Link href='' className='lg:m-3 border border-black text-center bg-black p-2 px-5 lg:p-3 m-1 lg:w-[100px] lg:h-[45px]'>WOMEN</Link>
                        <Link href='' className='lg:m-3 border border-black text-center bg-black p-2 px-5 lg:p-3 m-1 lg:w-[100px] lg:h-[45px]'>KIDS</Link>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={homeimages[1].img} alt="Image 3" className='bg-cover mt-[15px] lg:mt-0' />
                <div className='lg:absolute lg:top-[30%] lg:left-[75px] lg:[50px] mt-[10px] lg:mt-0 text-center text-black lg:text-white font-sans'>
                    <h1 className='lg:text-5xl font-bold'>PUMA WINTERWEAR</h1>
                    <h1 className='lg:text-3xl font-semibold'>AT EXTRA 20% OFF</h1>
                    <p className='lg:text-lg'>Discount auto-applied at checkout</p>
                    <div className='m-5 lg:m-[40px]'>
                        <Link href='' className='border border-black bg-black text-white  lg:border-white lg:bg-white lg:font-bold text-lg lg:text-md lg:text-black lg:p-5 p-2 lg:py-3'>SHOP NOW</Link>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={homeimages[2].img} alt="Image 2" className='bg-cover w-full mb-6' />
                <div className='lg:absolute lg:top-[30%] top-[25%] lg:left-[75px] lg:[50px] text-center lg:text-white font-sans'>
                    <h1 className='hidden lg:block lg:text-5xl font-bold mb-2'>CATCH THE</h1>
                    <h1 className='hidden lg:block lg:text-5xl font-bold'>#PUMADive</h1>
                    <p className='text-sm lg:text-3xl lg:m-2 font-light'>CLICK. SHARE. WIN</p>
                    <div className='m-5 lg:m-[40px]'>
                        <Link href='' className='border lg:border-white border-black bg-black text-white px-4 lg:bg-white font-bold text-sm lg:text-lg lg:text-black lg:p-5 p-2 lg:py-3'>KNOW MORE</Link>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={homeimages[3].img} alt="Image 3" className='bg-cover' />
                <div className='lg:absolute lg:top-[40%] lg:left-[75px] lg:[50px] mt-[20px] lg:mt-0 text-center lg:text-white font-sans'>
                    <h1 className='lg:text-5xl font-bold lg:mb-2'>PUMA x STAPLE</h1>
                    <h1 className='lg:text-3xl'>COLLEGIATE CLASSICS,REIMAGINED</h1>
                    <div className='m-4 lg:m-[40px] mt-[30px]'>
                        <Link href='' className='border border-black bg-black text-white lg:border-white lg:bg-white font-bold lg:text-lg lg:text-md lg:text-black lg:p-5 px-5 lg:px-5 p-2 lg:py-3'>SHOP NOW</Link>
                    </div>
                </div>
            </div>
            <div className='lg:h-[80px] mt-[80px] bg-white flex justify-center align-middle items-center lg:text-2xl font-bold'>
                <h1 className=''>LATEST IN COLLABORATIONS</h1>
            </div>
            <div className='lg:flex m-3'>
                <div className='flex flex-col m-2'>
                    <img src={homeimages[4].img} alt="Image 3" className='lg:w-[800px] lg:h-[700px] m-3' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-lg'>PUMA x PLEASURES</h1>
                        <p className='lg:text-sm text-xs'>SATISFACTION GUARANTEED</p>
                        <button className='m-3 border border-black bg-black  p-2 text-white font-bold  w-[250px] lg:text-lg'>SHOP NOW</button>
                    </div>
                </div>
                <div className='flex flex-col m-2'>
                    <img src={homeimages[5].img} alt="Image 4" className='lg:w-[800px] lg:h-[700px] h-[150px] m-3' />
                    <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className='font-bold text-lg'>PUMA x P.A.M</h1>
                    <p className='lg:text-sm text-xs'>RE-ENTERING THE PAM/PUMA BIO VERSE</p>
                    <button className='m-1 lg:m-3 border border-black bg-black p-2 text-white font-bold w-[250px]  text-sm lg:text-lg'>SHOP COLLECTION</button>
                </div>
                </div>
            </div>
            <div className='relative'>
                <img src={homeimages[6].img} alt="Image 5" className='bg-cover w-full mb-7 lg:h-[600px]' />
                <div className=' text-black lg:absolute top-[20%] lg:top-[40%] right-[10px] lg:right-[100px] text-center'>
                    <h1 className='font-bold lg:text-5xl text-xl m-1'>GARAGE CREWS</h1>
                    <h1 className='lg:text-2xl text-sm m-1'>PUMA x MERCEDES-AMG PETRONAS F1 TEAM</h1>
                    <button className='border border-white bg-black text-white px-6 py-3 font-bold m-3'>
                        <Link href="" className=''>SHOP NOW</Link>
                    </button>
                </div>
            </div>
            <div className="bg-video mb-6 relative flex flex-col items-center justify-center">
                <video className="bg-video__content bg" autoplay="true" loop muted>
                    <source src="https://cdn.sanity.io/files/qa41whrn/staging/c4a7a72fd42ce88f4e67faa77e7653798ec6b329.mp4" type="video/mp4" />
                </video>
                <button className='lg:p-3 p-2 text-white bg-slate-900 lg:absolute mt-[20px] lg:top-[480px] font-bold px-7'>EXPLORE NOW</button>
            </div>
        
            
            <div className='lg:mt-[40px] mt-[10px] lg:mb-[70px] relative mb-[30px]'>
                <div className=''>
                <img src={homeimages[8].img} alt="image 7" className='w-full lg:h-[500px]'></img>
                </div>
                <div className='lg:absolute left-14 lg:top-[140px] lg:left-[600px]'>
                <div className='flex flex-col justify-center items-center lg:pt-[10%] pt-[25px] lg:text-white'>
                    <h1 className='lg:text-4xl text-2xl font-bold'>FENTY x PUMA</h1>
                    <h1 className='lg:text-3xl text-xs mt-2'>NEW AVANTI DROP COMING SOON</h1>
                    <button className='border border-black bg-black text-white px-4 py-3 m-4 font-bold'>
                        <Link href=''>SIGN UP NOW</Link>
                    </button>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default HomeComponent