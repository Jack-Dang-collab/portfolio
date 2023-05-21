import { About, Footer, Header, Projects } from "./components"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // init AOS animation
    AOS.init({
      useClassNames: true,
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      duration: 1000,
      offset: 100,
      once: false,
    })
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto my-0">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
