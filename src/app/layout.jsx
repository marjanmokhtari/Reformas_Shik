"use client"
import "./globals.css";
import LogoSite from './img/logo.png'
import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'
import { useEffect } from "react";
import Logins from './img/Instagram_icon.png.webp'
import Logemail from './img/Gmail_icon_(2020).svg.png'
import Logtel from './img/tel.png'
import LogWhats from './img/wtsap.png'
import localFont from 'next/font/local'



const myFont = localFont({
  src: "./font/Roboto-Regular.ttf",
  display: "swap",
});




export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Reformas Shik</title>
      </head>
      <body className={myFont.className}>
        <main>
          <Header_site></Header_site>
          {children}
          <Myfooter></Myfooter>
        </main>
      </body>
    </html>
  );
}

function Header_site() {

  const [isMenuopen, setIsMenuopen] = useState(false)
  const menu_mobile = useRef()

  function openMenu() {
    setIsMenuopen(!isMenuopen)
  }

  function closeMenu() {
    setIsMenuopen(false)
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <header className=" w-full flex justify-center items-center">
      <section className=" w-full flex items-center justify-between  py-2 2xl:container  px-4 relative ">
        <section className=" w-1/4">
          <section>
            <Image className=" md:w-[120px] w-[50px] rounded-full  " src={LogoSite} width={1000} height={100}></Image>
          </section>
        </section>
        <nav className=" w-1/4  items-center flex-wrap *:w-full hidden md:flex  ">
          <ul className=" flex justify-center items-center *:mx-2 capitalize cursor-pointer  w-full">
            <li><Link className="myhove relative" href={'/'}>inicio</Link></li>
            <li className="group myhove relative">Páginas
              <ul className=" w-[150px] group-hover:opacity-100 group-hover:flex flex-wrap *:w-full opacity-0 hidden absolute top-8 bg-white rounded-md shadow-lg shadow-black   *:my-2  *:px-4 z-50">
                <li><Link className=" relative myhove" href={'/Cocina'}>Cocina</Link></li>
                <li><Link className=" relative myhove" href={'/Dormitorio'}>Dormitorio</Link></li>
                <li><Link className=" relative myhove" href={'/Salon'}>Salón</Link></li>
                <li><Link className=" relative myhove" href={'/bathroom'}>Baño</Link></li>
                <li><Link className=" relative myhove" href={'/Entrada'}>Entrada</Link></li>
                <li><Link className=" relative myhove" href={'/Oficina'}>Oficina</Link></li>
                <li><Link className=" relative myhove" href={'/Comedor'}>Comedor</Link></li>
              </ul>
            </li>
            <li><Link className="myhove relative" href={'/contact'}>contacto</Link></li>

          </ul>
          <ul className=" flex justify-evenly pt-5">
            <li><Link href={'mailto:reformasshik@gmail.com'}>
              <Image className="w-[30px]" src={Logemail}></Image>
            </Link></li>
            <li>   <Link href={'https://www.instagram.com/reformasshik'}>
              <Image className="w-[30px]" src={Logins}></Image>
            </Link></li>
            <li>  <Link href={'tel:+34615951025'}>
              <Image className="w-[30px]" src={Logtel}></Image>
            </Link></li>
            <li>   <Link href={'https://wa.me/34615951025'}>
              <Image className="w-[30px]" src={LogWhats}></Image>
            </Link></li>
          </ul>
        </nav>
        <section className=" md:w-1/4 w-2/4 ">
          <div className=" flex md:justify-end justify-center text-sm flex-wrap *:w-full " data-aos="fade-right" data-aos-duration="2000">
            <span className=" font-bold text-lg">
              PIDE PRESUPUESTO SIN COMPROMISO</span>
            <div className=" flex  items-center font-bold text-lg ">
              <Link href={'tel:+34615951025'}>Telf:+34 615951025</Link>
            </div>

          </div>
        </section>
        <span className=" w-1/4 flex justify-end md:hidden text-2xl">
          <span onClick={openMenu}>
            <TbMenu></TbMenu>
          </span>
        </span>
        <section ref={menu_mobile} className={` fixed w-full min-h-[100vh]  z-50 left-0 top-0 bg-white md:hidden ${isMenuopen ? 'flex' : 'hidden'}`}>
          <section className=" w-full   p-5">
            <section className=" w-full flex justify-end">
              <IoCloseSharp onClick={closeMenu} className=" flex justify-end text-4xl "></IoCloseSharp>
            </section>
            <section className=" w-full pt-10">
              <nav className=" w-full ">
                <ul className=" capitalize w-full flex *:w-full flex-wrap  *:flex *:justify-center *:my-4 items-center">
                  <li><Link href={'/'}>inicio </Link></li>
                  <li><Link href={'/'}>Páginas</Link></li>
                  <li><Link href={'/contact'}>Contacto</Link></li>
                </ul>
              </nav>
              <nav className=" w-full ">
                <ul className=" flex justify-center *:mx-2 pt-5">
                  <li><Link href={'mailto:reformasshik@gmail.com'}>
                    <Image className="w-[30px]" src={Logemail}></Image>
                  </Link></li>
                  <li>   <Link href={'https://www.instagram.com/reformasshik'}>
                    <Image className="w-[30px]" src={Logins}></Image>
                  </Link></li>
                  <li>  <Link href={'tel:+34615951025'}>
                    <Image className="w-[30px]" src={Logtel}></Image>
                  </Link></li>
                  <li>   <Link href={'https://wa.me/34615951025'}>
                    <Image className="w-[30px]" src={LogWhats}></Image>
                  </Link></li>
                </ul>
              </nav>
            </section>
          </section>
        </section>
      </section>
    </header>
  )
}


function Myfooter() {
  return (
    <section className=" w-full py-2  bg-[#f4e2c7] flex flex-wrap justify-center">
      <section className=" w-full flex flex-wrap 2xl:container ">
        <section className=" w-full flex flex-wrap md:px-28 px-12 py-20">
          <section className=" w-full lg:w-1/3 ">
            <section className=" flex ">
              <figure className=" w-[180px]">
                <Image className=" w-full h-full object-cover rounded-full " src={LogoSite}></Image>
              </figure>
            </section>
          </section>
          <section className=" w-full lg:w-2/3 ">
            <section className=" flex  *:md:w-1/3 *:w-full flex-wrap *:my-3 *:md:my-0  ">
              <nav className="">
                <ul className=" *:my-2">
                  <li><Link href={'/'}>Inicio</Link></li>
                  <li><Link href={'/contact'}>Contacto</Link></li>
                  <section className=" flex flex-wrap text-3xl *:w-full  *:my-1 my-3">
                    <Link href={'mailto:reformasshik@gmail.com'}>
                      <Image className="w-[30px]" src={Logemail}></Image>
                    </Link>
                    <Link href={'https://www.instagram.com/reformasshik'}>
                      <Image className="w-[30px]" src={Logins}></Image>
                    </Link>
                    <Link href={'tel:+34615951025'}>
                      <Image className="w-[30px]" src={Logtel}></Image>
                    </Link>
                    <Link href={'https://wa.me/34615951025'}>
                      <Image className="w-[30px]" src={LogWhats}></Image>
                    </Link>
                  </section>
                </ul>
              </nav>
              <nav>
                <ul className=" *:my-2 cursor-pointer">

                  <li><Link href={'/Cocina'}>Cocina</Link></li>
                  <li><Link href={'/Dormitorio'}>Dormitorio</Link></li>
                  <li><Link href={'/Salon'}>Salón</Link></li>
                  <li><Link href={'/bathroom'}>Baño</Link></li>
                  <li><Link href={'/woodwall'}>Palillería</Link></li>


                </ul>
              </nav>
              <nav>
                <ul className=" *:my-2">

                  <li><Link href={'/Entrada'}>Entrada</Link></li>
                  <li><Link href={'/Oficina'}>Oficina</Link></li>
                  <li><Link href={'/Comedor'}>Comedor</Link></li>
                  <li><Link href={'/bar'}>Bar</Link></li>
                  <li><Link href={'/Pizzeria'}>Pizzeria</Link></li>
                  <li><Link href={'/reforma'}>Reforma Integral De Una Casa</Link></li>

                </ul>
              </nav>
            </section>
          </section>
        </section>


        <section></section>
      </section>
      <section className=" w-full border-t  border-t-black py-2">
        <h6 className=" capitalize  flex justify-center ">
          <Link href={'https://www.linkedin.com/in/marjanmokhtari/'}>developer by <span className=" font-semibold">marjan mokhtari</span></Link>
        </h6>
      </section>
    </section>
  )
}