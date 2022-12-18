import './App.css'
import NavBar from './components/NavBar'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
        <NavBar/>
        <hr />
        <TechStack/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default App
