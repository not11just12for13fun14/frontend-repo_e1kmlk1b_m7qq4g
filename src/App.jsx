import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-from),_var(--tw-gradient-to))] from-gray-50 to-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
