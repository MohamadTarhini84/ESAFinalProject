import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css'
import { useContext, useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import {navBarContext} from '../../context/navBarContext'

function Featured(props){
    const {setIsVisible}=useContext(navBarContext)
    const test=useRef()

    
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
                <div className="w-full height-80 transition-all bg-gray-200">
                    <img className='w-full h-full' src='https://i.ytimg.com/vi/qBPod1HLbw0/maxresdefault.jpg'/>
                </div>
                <div className="w-full height-80 transition-all bg-gray-200">
                    <img className='w-full h-full' src='https://i.ytimg.com/vi/R4aDGpUOZdI/maxresdefault.jpg'/>
                </div>
                <div className="w-full height-80 transition-all bg-gray-200">
                    <img className='w-full h-full' src='https://i.ytimg.com/vi/N6Ure2n5yD8/maxresdefault.jpg'/>
                </div>
            </Slide>
        </div>
    )
}

export default Featured