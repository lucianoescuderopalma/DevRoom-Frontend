import { Link } from 'react-router-dom'

export default function Navbar({
  showMarketingLinks = true,
  showLandingLink = false,
  showDashboardLink = true,
}) {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="navbar-logo-icon">{'</>'}</span>
        <span>DevRoom</span>
      </Link>

      <nav>
        <ul className="navbar-links">
          {showMarketingLinks && (
            <>
              <li><Link to="/">Funciones</Link></li>
              <li><Link to="/">Cómo funciona</Link></li>
              <li><Link to="/empleos">Empleos</Link></li>
            </>
          )}

          {showLandingLink && (
            <li><Link to="/">Inicio</Link></li>
          )}
        </ul>
      </nav>

      <div className="navbar-actions">
        {showDashboardLink && (
          <Link to="/dashboard" className="btn-ghost">
            Dashboard
          </Link>
        )}

        <Link to="/login" className="btn-ghost">
          Iniciar sesión
        </Link>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Entrar con GitHub
        </a>
      </div>
    </header>
  )
}