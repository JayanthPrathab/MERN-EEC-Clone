import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Promise from './components/Promise'
import Trustedby from './components/Trustedby'
import Feedback from './components/Feedback'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Home/> <br /><br /><br />
      <Trustedby/><br /> <br />
      <Promise/><br /> <br />
      <Footer/>
    </>
  )
}

export default App
