import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css'
import { useContext, useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import {navBarContext} from '../../context/navBarContext'

function Featured(props){
    const {setIsVisible}=useContext(navBarContext)
    const test=useRef()

    // https://i.ytimg.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg

    useEffect(()=>{
        const observer=new IntersectionObserver((entry)=>{
                setIsVisible(entry[0].isIntersecting)
        })
        observer.observe(test.current)
    })

    return(
        <div id='main_featured' className={` text-black flex flex-col justify-end w-full dark:text-white ${props.className}`}>
            <span ref={test}></span>
            <Slide>
                <div className="w-full height-80 transition-all bg-gray-200">a</div>
                <div className="w-full height-80 transition-all bg-gray-200">b</div>
                <div className="w-full height-80 transition-all bg-gray-300">c</div>
                <div className="w-full height-80 transition-all bg-gray-400">d</div>
            </Slide>
        </div>
    )
}

export default Featured