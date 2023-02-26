import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

function MFeatured(props){

    return(
        <div className={`slide-container ${props.className}`}>
            <Fade transitionDuration={1} autoplay={false}>
                <div className="w-full h-96 transition-all bg-gray-100">a</div>
                <div className="w-full h-96 transition-all bg-gray-200">b</div>
                <div className="w-full h-96 transition-all bg-gray-300">c</div>
                <div className="w-full h-96 transition-all bg-gray-400">d</div>
            </Fade>
        </div>
    )
}

export default MFeatured