import Search from './Search';
import Featured from './Featured';
import MSearch from './mobileSearch'

function Home(){

    return (
        <div className='App font-mono'>
        <div className='w-full bg-gradient-to-b from-amber-100 to-amber-200 dark:from-orange-700 
                        dark:via-orange-800 dark:to-orange-900 flex flex-col items-center dark:text-white'>
            <Featured/>
            <MSearch className="sm:hidden"/>
            <Search/>
        </div>
        </div>
    )
}

export default Home