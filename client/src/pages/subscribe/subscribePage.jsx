import Card from "./card"

function Subscribe(){
    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-amber-900 flex justify-center items-center rounded-md">
            <div className="w-5/6 h-auto mt-20 p-10 flex justify-center items-center flex-wrap bg-gray-200 dark:bg-stone-800 gap-6">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
} 

export default Subscribe