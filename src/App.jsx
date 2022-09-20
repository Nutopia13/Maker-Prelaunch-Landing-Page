import { useState } from 'react'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Plans from './Components/Plans'
import styles from './style'

function App() {

  return (
    <div className="App">
      <div className = {`${styles.boxWidth2}`}>
        <nav>
         <Nav />
        </nav>
        <section className={`${styles.boxWidth2}`}>
          <Hero />
        </section>
        <section className={`${styles.boxWidth2}`}>
         <Cart />
        </section>
        <section className={`${styles.boxWidth2}`}>
         <Plans />
        </section>
        <footer className={`${styles.boxWidth2}`}>
         <Footer />
        </footer>
      </div>
      
    </div>
  )
}

export default App
