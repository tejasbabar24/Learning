import React from 'react'
import { NavLinks } from '../constants';
import {useGsap} from '@gsap/react';
import gsap from 'gsap';

function NavBar() {

    useGsap(()=>{
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
                { NavLinks.map((link) => (
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
