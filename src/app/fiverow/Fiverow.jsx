import React from 'react'
import Image from 'next/image'
import Entrada from '../img/Entrada/Entrada2.webp'
import Ofcin from '../img/offic/oficina1.webp'
import Comedor from '../img/Comedor/Comedor1.webp'
import Link from 'next/link'
import Bar from '../img/Bar/2.webp'
import pizzeria from '../img/pizzeria/1.webp'
import endpic from '../img/reforma integral de una casa/12.webp'

export default function Fiverow() {
    return (
        <section className='  w-full flex justify-center'>
            <section className=' w-full 2xl:container flex justify-center flex-wrap *:w-full'>
                <section className=' flex justify-center capitalize'>
                    <h6 className=' font-bold text-xl lg:text-3xl'>Our gallery</h6>
                </section>
                <section>
                    <section className=' w-full  flex flex-wrap *:my-4 justify-evenly pt-10 px-12 lg:px-0 '>
                        <Link href={'/Entrada'}>
                            <figure className='w-[400px] h-[400px]'>
                                <Image className=' w-full h-full object-cover' src={Entrada}></Image>
                            </figure>
                        </Link>
                        <Link href={'/Oficina'}>
                            <figure className='w-[400px] h-[400px]'>
                                <Image className=' w-full h-full object-cover' src={Ofcin}></Image>
                            </figure>
                        </Link>
                        <Link href={'/Comedor'}>
                            <figure className='w-[400px] h-[400px]'>
                                <Image className=' w-full h-full object-cover' src={Comedor}></Image>
                            </figure>
                        </Link>
                        <Link href={'/Comedor'}>
                            <figure className='w-[400px] h-[400px]'>
                                <Image className=' w-full h-full object-cover' src={Bar}></Image>
                            </figure>
                        </Link>
                        <Link href={'/Comedor'}>
                            <figure className=' w-[400px] h-[400px]'>
                                <Image className=' w-full h-full object-cover' src={pizzeria}></Image>
                            </figure>
                        </Link>
                        <Link href={'/Comedor'}>
                            <figure className='w-[400px] h-[400px]'>
                                <Image className=' w-full h-full object-cover' src={endpic}></Image>
                            </figure>
                        </Link>
                    </section>
                </section>
            </section>

        </section>
    )
}
