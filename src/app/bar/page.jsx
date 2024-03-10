import React from 'react'
import Image from 'next/image'

import bar1 from '../img/Bar/1.webp'
import bar2 from '../img/Bar/2.webp'
import bar3 from '../img/Bar/3.webp'
import bar4 from '../img/Bar/4.webp'
export default function pagr() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>Bar:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
            <p> Reforma integral de un Bar- Restaurante </p>
            </div>
            <section className='px-10 md:px-0'>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={bar1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={bar2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={bar3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={bar4}></Image>
                    </figure>
                 
             
                </section>

            </section>
        </section>
    </section>
</section>

  )
}
