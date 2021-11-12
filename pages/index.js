import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Portfolio from '../components/Portfolio/Portfolio'
import Comments from '../components/Comments/Comments'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Comments />
    </div>
  )
}

export default App
