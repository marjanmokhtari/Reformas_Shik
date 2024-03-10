import React from 'react'
import Image from 'next/image'

import img1 from '../img/reforma integral de una casa/1.webp'
import img2 from '../img/reforma integral de una casa/2.webp'
import img3 from '../img/reforma integral de una casa/3.webp'
import img4 from '../img/reforma integral de una casa/4.webp'
import img5 from '../img/reforma integral de una casa/5.webp'
import img6 from '../img/reforma integral de una casa/6.webp'
import img7 from '../img/reforma integral de una casa/7.webp'
import img8 from '../img/reforma integral de una casa/8.webp'
import img9 from '../img/reforma integral de una casa/9.webp'
import img10 from '../img/reforma integral de una casa/10.webp'
import img11 from '../img/reforma integral de una casa/11.webp'
import img12 from '../img/reforma integral de una casa/12.webp'
import img13 from '../img/reforma integral de una casa/13.webp'
import img16 from '../img/reforma integral de una casa/14.webp'
import img15 from '../img/reforma integral de una casa/15.webp'
import img14 from '../img/reforma integral de una casa/16.webp'
export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>reforma integral de una casa:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
                <p>
                </p>
            </div>
            <section>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={img1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img4}></Image>
                    </figure>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={img15}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img16}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img5}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img6}></Image>
                    </figure>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={img7}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img8}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img9}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img10}></Image>
                    </figure>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={img11}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img12}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img13}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={img14}></Image>
                    </figure>
                 
             
                </section>

            </section>
        </section>
    </section>
</section>

  )
}
