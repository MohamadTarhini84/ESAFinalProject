import { useContext } from 'react'
import './App.css'
import { themeContext } from './context/themeContext'
import NavBar from './components/main/navBar'

function App() {
  const theme=useContext(themeContext)

  return (
    <div className="App bg-amber-200">
        <NavBar/>
    </div>
  )
}

export default App
