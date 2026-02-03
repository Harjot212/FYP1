import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Landing' },
  { to: '/parent-login', label: 'Parent Login' },
  { to: '/parent-dashboard', label: 'Parent Dashboard' },
  { to: '/kid-home', label: 'Kid Home' },
  { to: '/food-explorer', label: 'Food Explorer' },
  { to: '/challenges', label: 'Challenges' },
  { to: '/badges', label: 'Badges' },
  { to: '/recipes', label: 'Recipes' },
]

const Layout = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">FYP</p>
          <h1>Family Food Quest</h1>
        </div>
        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
