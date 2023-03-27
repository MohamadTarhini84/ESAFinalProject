import Search from './Search';
import Featured from './Featured';
import MSearch from './mobileSearch'
import { Element } from 'react-scroll';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

function Home(){
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
          scroller.scrollTo(hash, {
            duration: 500,
            smooth: true,
          });
        }
      }, []);

    return (
        <div className='App font-mono'>
        <div className='w-full bg-gradient-to-b from-amber-100 to-amber-200 dark:from-orange-700 
                        dark:via-orange-800 dark:to-orange-900 flex flex-col items-center dark:text-white'>
            <Featured/>
            <Element name='search' className='w-full fles items-center'>
                <MSearch className="sm:hidden m-auto"/>
                <Search/>
            </Element>
        </div>
        </div>
    )
}

export default Home