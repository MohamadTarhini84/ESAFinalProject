import Search from './Search';
import Featured from './Featured';
import MSearch from './mobileSearch'

function Home(){

    return (
        <div className='App font-mono'>
        <div className='w-full bg-gradient-to-b from-amber-200 to-amber-100 dark:from-stone-900 
                        dark:via-stone-900 dark:to-stone-800 flex flex-col items-center dark:text-white'>
            <Featured/>
            <MSearch className="sm:hidden"/>
            <Search/>
        </div>
        </div>
    )
}

export default Home