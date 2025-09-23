import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Modal from './components/Modal'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Navigate between sections
  const navigateToSection = (section) => {
    setActiveSection(section)
  }

  // Modal functionality for testimonials
  const openModal = (data) => {
    setModalData(data)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalData({})
  }

  // Render active section component
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About openModal={openModal} />
      case 'resume':
        return <Resume />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <About openModal={openModal} />
    }
  }

  return (
    <main>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="main-content">
        <Navigation activeSection={activeSection} navigateToSection={navigateToSection} />
        {renderActiveSection()}
      </div>

      <Modal modalOpen={modalOpen} modalData={modalData} closeModal={closeModal} />
    </main>
  )
}

export default App