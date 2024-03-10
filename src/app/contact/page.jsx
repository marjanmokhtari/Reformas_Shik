import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Inst from '../img/Instagram_icon.png.webp'
import email from '../img/Gmail_icon_(2020).svg.png'
import Tel from '../img/tel.png'
import wtsap from '../img/wtsap.png'

export default function page() {
    return (
        <section className=' w-full flex justify-center'>
            <section className=' w-full 2xl:container'>
                <section className=' mx-auto w-full my-20 md:px-20 px-10 '>
                    <section >
                        <h6 className=' md:text-6xl text-4xl font-semibold capitalize my-5'>Contacto</h6>
                    </section>
                    <section>
                        <section className='*:my-3 flex flex-wrap *:w-full *:*:flex *:*:items-center '>
                            <section>
                                <Link href={'mailto:reformasshik@gmail.com'}>
                                    <Image className='w-[50px]' src={email}></Image>
                                    <span className=' ms-3'>mailto:reformasshik@gmail.com</span>
                                </Link>
                            </section>
                            <section>

                                <Link href={'https://www.instagram.com/reformasshik'}>
                                    <Image className='w-[50px]' src={Inst}></Image>
                                    <span className=' ms-3'>@reformasshik</span>

                                </Link>
                            </section>

                            <section>

                                <Link href={'tel:+34615951025'}>
                                    <Image className='w-[50px]' src={Tel}></Image>
                                    <span className=' ms-3'>+34615951025</span>

                                </Link>
                            </section>

                            <section>

                                <Link href={'https://wa.me/34615951025'}>
                                    <Image className='w-[50px]' src={wtsap}></Image>
                                    <span className=' ms-3'>+34615951025</span>

                                </Link>
                            </section>

                        </section>
                    </section>
                </section>
            </section>

        </section>
    )
}
