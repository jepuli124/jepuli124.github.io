
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CursorPulse from './components/CursorPulse'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import Archive from './components/Archive'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          
        <CursorPulse />
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>

        </div>

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Haven't made yet, i guess</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>First page for free!  </p>
          <ul>
            <li>
              <a href="https://github.com/jepuli124" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub 
              </a>
            </li>
            <li>
              <a href="mailto:jepuli124@outlook.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >

                </svg>
                Email
              </a>
            </li>
            
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <section>
        <Archive></Archive>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
