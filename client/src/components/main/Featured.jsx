import gsap from "gsap";
import { useEffect, useRef } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Featured(){
    const current=useRef()
    const next=useRef()
    const prev=useRef()
    
    const left=useRef()
    const right=useRef()

    
    function coolDown() {
        left.current.disabled=true
        right.current.disabled = true;
        setTimeout(function() {left.current.disabled = false;right.current.disabled=false}, 700);
    }

    useEffect(()=>{ 
        document.querySelector('.first').classList.add('current')
        gsap.to('.current',{duration:0.5, scale:1.2})
        right.current.addEventListener('click',moveRight)
        left.current.addEventListener('click',moveLeft)
    },[])

    function moveRight(){
        const first=document.querySelector('.first')
        const second=document.querySelector('.second')
        const third=document.querySelector('.third')

        gsap.to(".current", {duration:0.7, ease: "power2.inOut", left:prev.current.offsetLeft, right:prev.current.offsetRight})
        gsap.to(".next", {duration:0.7, ease: "power2.inOut", left:current.current.offsetLeft, right:current.current.offsetRight})
        gsap.to(".prev", {duration:0.7, ease: "power2.inOut", left:next.current.offsetLeft, right:next.current.offsetRight})
        
        first.classList.remove('z-10')
        first.classList.add('third')
        first.classList.remove('first')
        
        second.classList.add('z-10')
        second.classList.add('first')
        second.classList.remove('second')
        
        third.classList.add('second')
        third.classList.remove('third')
        
        gsap.to('.first',{duration:0.5, scale:1.2})
        gsap.to('.third',{duration:0.5, scale:1})
        
        coolDown()
    }

    function moveLeft(){
        gsap.to(".current", {duration:0.7, ease: "power2.inOut", left:next.current.offsetLeft, right:next.current.offsetRight})
        gsap.to(".next", {duration:0.7, ease: "power2.inOut", left:prev.current.offsetLeft, right:prev.current.offsetRight})
        gsap.to(".prev", {duration:0.7, ease: "power2.inOut", left:current.current.offsetLeft, right:current.current.offsetRight})
        
        const first=document.querySelector('.first')
        const second=document.querySelector('.second')
        const third=document.querySelector('.third')

        first.classList.remove('z-10')
        first.classList.add('second')
        first.classList.remove('first')
        
        second.classList.add('third')
        second.classList.remove('second')
        
        third.classList.add('z-10')
        third.classList.add('first')
        third.classList.remove('third')

        gsap.to('.first',{duration:0.5, scale:1.2})
        gsap.to('.second',{duration:0.5, scale:1})

        coolDown()
    }

    return (
        <div id="main_featured" className="w-11/12 h-96 bg-gray-100 text-4xl relative self-center mt-14 dark:bg-stone-800 flex justify-center items-center shadow-2xl rounded-lg">
            <button className="absolute group left-6" ref={left} >
                <ArrowCircleLeftIcon fontSize="large" 
                    className="scale-125 hover:scale-150 hover:cursor-pointer text-stone-400 hover:transition-all hover:ease-in-out"/>
                <span className='tooltip sm:group-hover:scale-100 top-12 pointer-events-none'>Left</span>
            </button>
            <div className="w-10/12 h-2/3 relative flex justify-center items-end gap-4">
                <div ref={current} className="slider_item first z-10">1</div>
                <div ref={prev} className="slider_item third right-0 prev">2</div>
                <div ref={next} className="slider_item second left-0 next">3</div>
            </div>
            <button className="absolute group right-6" ref={right}>
                <ArrowCircleRightIcon fontSize="large" 
                    className="scale-125 hover:scale-150 hover:cursor-pointer text-stone-400 hover:transition-all hover:ease-in-out"/>
                <span className='tooltip sm:group-hover:scale-100 top-12 pointer-events-none'>Right</span>
            </button>
        </div>
    )
}

export default Featured