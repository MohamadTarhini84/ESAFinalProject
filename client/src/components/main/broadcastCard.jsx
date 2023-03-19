import {useNavigate} from 'react-router-dom'

function Card(props){
    const navigate=useNavigate()

    return (
        <div className="w-80 aspect-video rounded-md border relative group overflow-hidden hover:cursor-pointer" onClick={()=>navigate(`/watch/${props.content.path}`)}>
            {<img className="absolute w-full h-full group-hover:brightness-75 transition-all" src={`https://i.ytimg.com/vi/${props.content.path}/mqdefault.jpg`}/>}
            <div className="absolute w-full py-2 px-4 text-white bg-stone-900 bg-opacity-70">
                {props.content.title}
            </div>
            <div className="absolute bottom-0 w-full flex flex-col py-2 px-4 text-white bg-stone-900 bg-opacity-50 -left-full group-hover:left-0 transition-all">
                <h1>{props.content.channelName}</h1>
                <h1>{props.content.category}</h1>
            </div>
        </div>
    )
}

export default Card