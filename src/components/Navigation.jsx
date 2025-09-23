import React from 'react'

const Navigation = ({ activeSection, navigateToSection }) => {
  const navItems = ['about', 'resume', 'projects', 'contact']

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item} className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === item ? 'active' : ''}`}
              onClick={() => navigateToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation