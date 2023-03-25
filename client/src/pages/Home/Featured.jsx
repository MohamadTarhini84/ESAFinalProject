import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css'
import { useContext, useEffect, useRef, useState } from "react";
import {navBarContext} from '../../context/navBarContext'

function Featured(props){
    const {setIsVisible}=useContext(navBarContext)
    const [margin,setMargin]=useState('ml-0')
    const test=useRef()

    const slides=[
        {img:"https://i.ytimg.com/vi/qBPod1HLbw0/maxresdefault.jpg"},
        {img:"https://i.ytimg.com/vi/KkY3JGDqMT8/maxresdefault.jpg"},
        {img:"https://i.ytimg.com/vi/N6Ure2n5yD8/maxresdefault.jpg"},
        {img:"https://i.ytimg.com/vi/R4aDGpUOZdI/maxresdefault.jpg"},
        {img:"https://i.ytimg.com/vi/Swe-drMH9Ec/maxresdefault.jpg"},
    ]
    
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
                <div className='w-full aspect-video bg-black relative overflow-hidden'>
                    <input type="radio" name="r" id="r1" onClick={()=>setMargin("r1-checked")}/>
                    <input type="radio" name="r" id="r2" onClick={()=>setMargin("r2-checked")}/>
                    <input type="radio" name="r" id="r3" onClick={()=>setMargin("r3-checked")}/>
                    <input type="radio" name="r" id="r4" onClick={()=>setMargin("r4-checked")}/>
                    <input type="radio" name="r" id="r5" onClick={()=>setMargin("r5-checked")}/>
                
                    <div className='h-full flex' style={{width:"500%"}}>
                        <div className={`w-1/5 transition-all h-full ease-in-out ${margin}`}>
                            <img className='w-full h-full' src={slides[0].img}/>
                        </div>
                        <div className="w-1/5 transition-all h-full">
                            <img className='w-full h-full' src={slides[1].img}/>
                        </div>
                        <div className="w-1/5 transition-all h-full">
                            <img className='w-full h-full' src={slides[2].img}/>
                        </div>
                        <div className="w-1/5 transition-all h-full">
                            <img className='w-full h-full' src={slides[3].img}/>
                        </div>
                        <div className="w-1/5 transition-all h-full">
                            <img className='w-full h-full' src={slides[4].img}/>
                        </div>
                    </div>
                    <div className='flex gap-2 absolute bottom-4 left-1/2 -translate-x-1/2'>
                        <label htmlFor="r1" className={`foobarfoo ${margin=="r1-checked"?"bg-white":""}`}></label>
                        <label htmlFor="r2" className={`foobarfoo ${margin=="r2-checked"?"bg-white":""}`}></label>
                        <label htmlFor="r3" className={`foobarfoo ${margin=="r3-checked"?"bg-white":""}`}></label>
                        <label htmlFor="r4" className={`foobarfoo ${margin=="r4-checked"?"bg-white":""}`}></label>
                        <label htmlFor="r5" className={`foobarfoo ${margin=="r5-checked"?"bg-white":""}`}></label>
                    </div>

                </div>
        </div>
    )
}

export default Featured