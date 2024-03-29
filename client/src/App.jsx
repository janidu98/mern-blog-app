import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Dashboard from "./components/pages/Dashboard"
import SignIn from "./components/pages/SignIn"
import Singup from "./components/pages/Singup"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<Singup />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
