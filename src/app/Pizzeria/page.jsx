import React from 'react'
import Image  from 'next/image'
import piz1 from '../img/pizzeria/1.webp'
import piz2 from '../img/pizzeria/2.webp'
export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>Pizzeria:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
              
            </div>
            <section className='px-10 md:px-0'>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly *:mx-2 '>
                    <figure className=' md:w-[50%] w-[80%]  flex'>

                        <Image className=' w-full h-full object-cover' src={piz1}></Image>
                    </figure>
                    <figure className='md:w-[50%] w-[80%] '>

                        <Image className=' w-full h-full object-cover' src={piz2}></Image>
                    </figure>
                   
                 
             
                </section>

            </section>
        </section>
    </section>
</section>
  )
}
