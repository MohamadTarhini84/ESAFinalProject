import { useContext } from 'react'
import './App.css'
import { themeContext } from './context/themeContext'
import NavBar from './components/main/navBar'
import MFeatured from './components/main/mobileFeatured'
import Featured from './components/main/Featured'
import MSearch from './components/mobileSearch'

function App() {
  const {theme}=useContext(themeContext)

  return (
    <div className={`App ${theme?"":"dark"}`}>
      <div className='w-full min-h-screen bg-amber-200 dark:bg-orange-900 flex flex-col'>
        <NavBar/>
        <MFeatured className="sm:hidden"/>
        <Featured/>
        <MSearch className="sm:hidden"/>
      </div>
    </div>
  )
}

export default App
