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
        <div className={`h-52 sm:h-full mt-10 text-black flex flex-col justify-end w-full dark:text-white ${props.className}
                        sm:mt-0 sm:p-16 sm:px-56 bg-gray-100 dark:bg-orange-900 shadow-lg`}>
            <span ref={test}></span>
            <Slide className='h-full'>
                <div className="w-full h-full transition-all bg-gray-200">
                    <img className='w-full h-full' src='https://i.ytimg.com/vi/qBPod1HLbw0/maxresdefault.jpg'/>
                </div>
                <div className="w-full h-full transition-all bg-gray-200">
                    <img className='w-full h-full' src='https://i.ytimg.com/vi/R4aDGpUOZdI/maxresdefault.jpg'/>
                </div>
                <div className="w-full h-full transition-all bg-gray-200">
                    <img className='w-full h-full' src='https://i.ytimg.com/vi/N6Ure2n5yD8/maxresdefault.jpg'/>
                </div>
            </Slide>
        </div>
    )
}

export default Featured