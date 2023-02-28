import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { themeContext } from "../../context/themeContext"

function Featured(){
    const {theme}=useContext(themeContext)
    const container=useRef()
    let childArray=[]
    
    // function moveSlides(difference){
    //     let offsetArray=[]
    //     for(let i=0;i<childArray.length;i++){
    //         offsetArray.push({left:childArray[i].offsetLeft, right:childArray[i].offsetRight})
    //     }
    //     for(let i=0;i<childArray.length;i++){
    //         gsap.to(`#${idArray[i]}`, {duration:0.7, ease: "power2.inOut", left:offsetArray[(i+difference)%5].left, right:offsetArray[(i+difference)%5].right})
    //     }
    // }
    
    // function switchClasses(clicked){
        // for(let i=0;i<childArray.length;i++){
        //     childArray[i].classList.remove('next_to_current')
        //     childArray[i].classList.remove('far_from_current')
        //     if(i==(clicked+5+1)%5 || i==(clicked+5-1)%5){
        //         childArray[i].classList.add('next_to_current')
        //     } else if(i==(clicked+5+2)%5 || i==(clicked+5-2)%5){
        //         childArray[i].classList.add('far_from_current')
        //     }
        // }
    // }
    
    // function handleClick(e){
        // let active=childArray.findIndex(child=>child.classList.toString().includes('current_item'))
        // let clicked=childArray.findIndex(child=>child==e.target)
        // if(active>clicked){
        //     moveSlides(active-clicked)
        // } else if(active<clicked){
        //     moveSlides(active-clicked+5)
        // } else{
        //     console.log("no")
        // }
        // gsap.to('.current_item',{duration:0.5, scale:1})
        // document.querySelector('.current_item').classList.remove('current_item')
        // childArray[clicked].classList.toggle('current_item')
        // gsap.to('.current_item',{duration:0.5, scale:1.2})
        // switchClasses(clicked)

    // }

    function cleanClasses(array){
        for(let j=0;j<array.length;j++){
            for(let i=0;i<array.length;i++){
                array[j].classList.remove(`slide_${i}`)
            }
        }
    }

    function initClasses(array){
        cleanClasses(array)
        for(let i=0;i<array.length;i++){
            array[i].classList.add(`slide_${i}`)
        }
    }

    function moveLeft(){
        let tempArray=[]
        for(let i=0;i<childArray.length;i++){
            tempArray.push(childArray[(i+5+1)%5])
        }
        childArray=tempArray.slice()
        initClasses(childArray)
    }

    function moveRight(){
        let tempArray=[]
        for(let i=0;i<childArray.length;i++){
            tempArray.push(childArray[(i+5-1)%5])
        }
        childArray=tempArray.slice()
        initClasses(childArray)
    }
    
    useEffect(()=>{
        let array=[]
        container.current.childNodes.forEach((child)=>{
            if(child.nodeValue==null){
                array.push(child)
            }
        })
        childArray=array.slice()
        initClasses(childArray)
    },[theme])
    
    return (
        <div id="main_featured" className="w-11/12 h-96 bg-gray-100 text-4xl relative self-center mt-14 dark:bg-stone-800 flex justify-center items-center shadow-2xl rounded-lg">
            <button className="absolute group left-6" onClick={()=>moveLeft()}>
                <ArrowCircleLeftIcon fontSize="large" 
                    className="scale-125 hover:scale-150 hover:cursor-pointer text-stone-400 hover:transition-all hover:ease-in-out"/>
                <span className='tooltip sm:group-hover:scale-100 top-12 pointer-events-none'>Left</span>
            </button>
            <div ref={container} className="w-10/12 h-2/3 relative flex justify-center items-center gap-4">
                <div className="slider_item bg-yellow-200">1</div>
                <div className="slider_item bg-black">2</div>
                <div className="slider_item bg-white">3</div>
                <div className="slider_item bg-blue-500">4</div>
                <div className="slider_item bg-red-500">5</div>
            </div>
            <button className="absolute group right-6" onClick={()=>moveRight()}>
                <ArrowCircleRightIcon fontSize="large" 
                    className="scale-125 hover:scale-150 hover:cursor-pointer text-stone-400 hover:transition-all hover:ease-in-out"/>
                <span className='tooltip sm:group-hover:scale-100 top-12 pointer-events-none'>Right</span>
            </button>
        </div>
    )
}

export default Featured