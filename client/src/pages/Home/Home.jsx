import Search from './Search';
import Featured from './Featured';
import MSearch from './mobileSearch'

function Home(){

    return (
        <div className='App font-mono'>
        <div className='w-full bg-gradient-to-b from-amber-200 to-amber-100 dark:from-orange-900 
                        dark:via-orange-900 dark:to-amber-900 flex flex-col items-center dark:text-white'>
            <Featured/>
            <MSearch className="sm:hidden"/>
            <Search/>
        </div>
        </div>
    )
}

export default Home