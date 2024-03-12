import React from 'react'
import Image from 'next/image'
import Entrada from '../img/Entrada/Entrada2.webp'
import Ofcin from '../img/offic/oficina1.webp'
import Comedor from '../img/Comedor/Comedor1.webp'
import Link from 'next/link'
import Bar from '../img/Bar/2.webp'
import pizzeria from '../img/pizzeria/1.webp'
import endpic from '../img/reforma integral de una casa/12.webp'
import Woodwall from '../img/wood wall/6.webp'
export default function Fiverow() {
    return (
        <section className='  w-full flex justify-center my-20'>
            <section className=' w-full 2xl:container flex justify-center flex-wrap *:w-full'>
               
                <section>
                    <section className=' w-full  flex flex-wrap *:my-5 justify-evenly pt-10 px-12 lg:px-0 '>
                        <Link href={'/Entrada'}>
                            <figure className='w-[400px] h-[400px] gallery'>
                                <Image className=' w-full h-full object-cover childgallery duration-500' src={Entrada}></Image>
                            </figure>
                                <span className=' text-lg py-2 capitalize flex font-semibold'>Entrada</span>
                        </Link>
                        <Link href={'/Oficina'}>
                            <figure className='w-[400px] h-[400px] gallery'>
                                <Image className=' w-full h-full object-cover childgallery duration-500' src={Ofcin}></Image>
                            </figure>
                                <span className=' text-lg py-2 capitalize flex font-semibold'>oficina</span>
                        </Link>
                        <Link href={'/Comedor'}>
                            <figure className='w-[400px] h-[400px] gallery'>
                                <Image className=' w-full h-full object-cover childgallery duration-500' src={Comedor}></Image>
                            </figure>
                                <span className=' text-lg py-2 capitalize flex font-semibold'>Comedor</span>
                        </Link>
                        <Link href={'/bar'}>
                            <figure className='w-[400px] h-[400px] gallery'>
                                <Image className=' w-full h-full object-cover childgallery duration-500' src={Bar}></Image>
                            </figure>
                                <span className=' text-lg py-2 capitalize flex font-semibold'>Bar</span>
                        </Link>
                        <Link href={'/Pizzeria'} >
                            <figure className=' w-[400px] h-[400px] gallery'>
                                <Image className=' w-full h-full object-cover childgallery duration-500' src={pizzeria}></Image>
                            </figure>
                                <span className=' text-lg py-2 capitalize flex font-semibold'>pizzeria</span>
                        </Link>
                        <Link href={'/woodwall'}>
                            <figure className='w-[400px] h-[400px] gallery'>
                                <Image className=' w-full h-full object-cover childgallery duration-500' src={Woodwall}></Image>
                            </figure>
                                <span className=' text-lg py-2 capitalize flex font-semibold'>palillería</span>
                        </Link>
                        <Link href={'/reforma'}>
                            <figure className='w-[400px] h-[400px] gallery '>
                                <Image className=' w-full h-full object-cover childgallery duration-500' src={endpic}></Image>
                            </figure>
                                <span className=' text-lg py-2 capitalize flex font-semibold'>Reforma Integral De Una Casa</span>
                        </Link>
                    </section>
                </section>
            </section>

        </section>
    )
}
