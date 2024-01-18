import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Dashboard from "./components/pages/Dashboard"
import Singin from "./components/pages/Singin"
import Singup from "./components/pages/Singup"
import Header from "./components/Header"

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/sign-in" element={<Singin />}/>
        <Route path="/sign-up" element={<Singup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
