import React from 'react'
import Image from 'next/image'

import wall1 from '../img/wood wall/1.webp'
import wall2 from '../img/wood wall/2.webp'
import wall3 from '../img/wood wall/3.webp'
import wall4 from '../img/wood wall/4.webp'
import wall5 from '../img/wood wall/5.webp'
import wall6 from '../img/wood wall/6.webp'
import wall7 from '../img/wood wall/7.webp'

export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>palillería:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
              
            </div>
            <section className='px-10 md:px-0'>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={wall1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={wall2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={wall3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={wall4}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={wall5}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={wall6}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={wall7}></Image>
                    </figure>
                 
             
                </section>

            </section>
        </section>
    </section>
</section>

  )
}
