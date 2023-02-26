import { useContext } from 'react'
import './App.css'
import { themeContext } from './context/themeContext'
import NavBar from './components/main/navBar'
import MFeatured from './components/main/mobileFeatured'

function App() {
  const {theme}=useContext(themeContext)

  return (
    <div className={`App ${theme?"":"dark"}`}>
      <div className='w-full h-full bg-amber-200 dark:bg-orange-900 flex flex-col'>
        <NavBar/>
        <MFeatured className="sm:hidden"/>
      </div>
    </div>
  )
}

export default App
