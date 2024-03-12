"use client"
import React from 'react';
import '../globals.css';
import Img1 from '../img/img1.webp';
import Img2 from '../img/img2.webp';
import Img3 from '../img/salon/salon1.webp';
import Img4 from '../img/img4.webp';
import Image from 'next/image';
import Link from 'next/link';



export default function Thirdrow() {

    return (
        <section className='w-full'>
            <section className='w-full bg2 relative flex justify-center'>
                <section className='w-full h-full absolute z-10 left-0 top-0 bg-[#101010d1]'></section>
                <section className='w-full 2xl:container xl:px-28 px-5 z-20'>
                    <section className='pt-20 text-white px-4'>

                        <h6 className='text-3xl font-semibold py-2 capitalize'>nuestros trabajos</h6>
                    </section>

                    <section className=' pt-10 pb-20'>
                        <div className='flex flex-wrap justify-between md:flex-nowrap'>
                            <div className='w-full md:w-1/4 mx-4 my-4 md:h-[300px] relative'>
                                <Link href={'/Cocina'}>
                                    <figure className=' h-[300px] gallery '>
                                        <Image className=' object-cover h-full w-full childgallery duration-500' src={Img1} />
                                    </figure>
                                    <span className='text-white py-2 flex'>Cocina
                                    </span>
                                </Link>

                            </div>
                            <div className='w-full md:w-1/4 mx-4 my-4 md:h-[300px] relative'>
                                <Link href={'/Dormitorio'}>
                                    <figure className=' h-[300px]  gallery '>
                                        <Image src={Img2} className=' object-cover h-full w-full childgallery duration-500' />
                                    </figure>
                                    <span className='text-white py-2 flex'>Dormitorio</span>
                                </Link>

                            </div>
                            <div className='w-full md:w-1/4 mx-4 my-4 md:h-[300px] relative'>
                                <Link href={'/Salon'}>
                                    <figure className=' h-[300px] gallery '>
                                        <Image src={Img3} className=' object-cover h-full w-full childgallery duration-500' />

                                    </figure>
                                    <span className='text-white py-2 flex'>Salón</span>
                                </Link>
                            </div>
                            <div className='w-full md:w-1/4 mx-4 my-4 md:h-[300px] relative'>
                                <Link href={'/bathroom'}>
                                    <figure className=' h-[300px] gallery '>

                                        <Image src={Img4} className=' object-cover h-full w-full childgallery duration-500 ' />
                                    </figure>
                                    <span className='text-white py-2 flex'>Baño</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
}
