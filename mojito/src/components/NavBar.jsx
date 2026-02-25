import React from 'react'
import { navLinks } from '../constants';

import gsap from 'gsap';

import { useGSAP } from "@gsap/react"

function NavBar() {


    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        const navTeens = gsap.timeline({
            scrollTrigger:{
                trigger: "nav",
                start: "bottom top"
            }
        })

        navTeens.fromTo("nav" , {
            backgroundColor: "transparent",},
             {
            backgroundColor:'#00000050',
                backgroundFilter: "blur(10px)",
                duration: 1 ,
                ease: "power1.inOut"
            });
        })
  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="Logo Png" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                { navLinks.map((link) => (
                    <li key={link.link}>
                        <a href={`#${link.link}`}>
                            { link.title }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
