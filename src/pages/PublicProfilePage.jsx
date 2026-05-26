import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'

const IcMapPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IcCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)
const IcGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)
const IcLink = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)
const IcArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const IcActivity = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

/* Datos básicos */
const SKILLS = [
  { name: 'Java',        pct: 92, level: 'Avanzado'   },
  { name: 'Spring Boot', pct: 88, level: 'Avanzado'   },
  { name: 'React',       pct: 80, level: 'Avanzado'   },
  { name: 'TypeScript',  pct: 74, level: 'Intermedio' },
  { name: 'PostgreSQL',  pct: 70, level: 'Intermedio' },
  { name: 'Docker',      pct: 60, level: 'Intermedio' },
]

const REPOS = [
  {
    name: 'devroom-backend',
    lang: 'Java',
    desc: 'API REST con Spring Boot, JPA, JWT y arquitectura hexagonal.',
  },
  {
    name: 'devroom-frontend',
    lang: 'React/JSX',
    desc: 'Dashboard SPA en React + Vite con design system propio.',
  },
  {
    name: 'portfolio-react',
    lang: 'TypeScript',
    desc: 'Portfolio personal con animaciones y scroll reveal.',
  },
]

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance / Proyectos propios',
    period: '2024 – presente',
    desc: 'Construyendo DevRoom: plataforma de análisis de perfil de desarrolladores con IA. Stack: Spring Boot, React, PostgreSQL, Docker.',
  },
  {
    role: 'Técnico en Infraestructura',
    company: 'Institución educacional · Santiago',
    period: '2023 – 2024',
    desc: 'Procurement y mantenimiento de equipos de fibra óptica, fusionadoras y switches. Gestión de proveedores y licitaciones.',
  },
]

export default function PublicProfilePage() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar
  showMarketingLinks={false}
  showLandingLink={true}
  showDashboardLink={false}
/>

      <main className="db-content" style={{maxWidth: '1100px', marginInline: 'auto',paddingTop: '96px',
  }}>
        {/* Header perfil */}
        <header className="db-page-header" style={{ marginBottom: '2rem' }}>
          <div className="db-page-header-left" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '9999px',
                background: 'linear-gradient(135deg,#f59e0b,#10b981)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: '#1e2330',
              }}
            >
              LE
            </div>
            <div>
              <p className="section-label">Perfil público</p>
              <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>
                Luciano Escudero
              </h1>
              <p className="db-page-sub">
                Full Stack Developer · Java / Spring Boot · React
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginTop: '0.75rem',
                  fontSize: '0.8rem',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <IcMapPin /> Santiago, Chile
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <IcCalendar /> Desde mayo 2024
                </span>
                <a
                  href="https://github.com/lescudero"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8' }}
                >
                  <IcGithub /> github.com/lescudero
                </a>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#7c8db5' }}>
                  <IcLink /> devroom.app/@lescudero
                </span>
              </div>
            </div>
          </div>
          <div className="db-page-actions">
            <button
              type="button"
              className="btn-hero-outline"
              onClick={() => navigate('/dashboard')}
            >
              <IcArrowLeft />
              Volver al dashboard
            </button>
          </div>
        </header>

        {/* Stats rápidas */}
        <section className="stats-bar" style={{ padding: '2rem 0', marginBottom: '2.5rem' }}>
          <div className="stats-inner">
            <div className="stat-item">
              <p className="stat-num">12</p>
              <p className="stat-label">Repositorios conectados</p>
            </div>
            <div className="stat-item">
              <p className="stat-num">87%</p>
              <p className="stat-label">Score de perfil DevRoom</p>
            </div>
            <div className="stat-item">
              <p className="stat-num">47</p>
              <p className="stat-label">Commits esta semana</p>
            </div>
          </div>
        </section>

        {/* Grid principal */}
        <div className="db-grid" style={{ gridTemplateColumns: '1.2fr 0.9fr' }}>
          <div className="db-grid-left">
            {/* Sobre mí */}
            <section className="db-card">
              <div className="db-card-head">
                <div className="db-card-title">Sobre mí</div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Desarrollador Full Stack con foco en <span className="amber">Java / Spring Boot</span> y{' '}
                <span className="amber">React</span>. Me especializo en arquitecturas de microservicios, APIs REST
                y experiencias de usuario limpias y rápidas.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '0.8rem' }}>
                Actualmente construyendo <span className="amber">DevRoom</span>, una plataforma que analiza el perfil
                de desarrolladores con IA y los conecta con empleos alineados a su stack. Disponible para proyectos
                freelance y posiciones full‑time remotas.
              </p>
            </section>

            {/* Repos destacados */}
            <section className="db-card">
              <div className="db-card-head">
                <div className="db-card-title">
                  <IcGithub />
                  Repositorios destacados
                </div>
              </div>
              <div className="db-jobs-list">
                {REPOS.map(r => (
                  <div key={r.name} className="db-job-row">
                    <div className="db-job-logo">{r.lang[0]}</div>
                    <div className="db-job-info">
                      <div className="db-job-title">{r.name}</div>
                      <div className="db-job-meta">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experiencia */}
            <section className="db-card">
              <div className="db-card-head">
                <div className="db-card-title">Experiencia</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {EXPERIENCE.map(exp => (
                  <div key={exp.role} style={{ display: 'flex', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: 10,
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '9999px',
                          background: '#f59e0b',
                        }}
                      />
                      <span
                        style={{
                          flex: 1,
                          width: 1,
                          background: 'var(--border)',
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.92rem', fontWeight: 700 }}>{exp.role}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--amber)' }}>{exp.company}</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>{exp.period}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.7 }}>
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Columna derecha */}
          <div className="db-grid-right">
            {/* Skills */}
            <section className="db-card">
              <div className="db-card-head">
                <div className="db-card-title">Stack principal</div>
              </div>
              {SKILLS.map(s => (
                <div key={s.name} className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <div className="skill-bar-bg">
                    <div
                      className={
                        'skill-bar-fill ' +
                        (s.pct >= 80 ? 'skill-bar-high' : s.pct >= 60 ? 'skill-bar-mid' : 'skill-bar-low')
                      }
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                  <span
                    className={
                      'skill-level ' +
                      (s.level === 'Avanzado'
                        ? 'skill-level-high'
                        : s.level === 'Intermedio'
                        ? 'skill-level-mid'
                        : 'skill-level-low')
                    }
                  >
                    {s.level}
                  </span>
                </div>
              ))}
            </section>

            {/* Snapshot DevRoom */}
            <section className="db-card db-card--center">
              <div className="db-card-head">
                <div className="db-card-title">Resumen DevRoom</div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Top 15% en perfiles Java / Spring Boot en LATAM.
              </p>
              <div className="stats-inner" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="stat-item">
                  <p className="stat-num" style={{ fontSize: '2rem' }}>
                    12
                  </p>
                  <p className="stat-label">Repos analizados</p>
                </div>
                <div className="stat-item">
                  <p className="stat-num" style={{ fontSize: '2rem' }}>
                    7
                  </p>
                  <p className="stat-label">Skills detectadas</p>
                </div>
              </div>
            </section>

            {/* Actividad reciente */}
            <section className="db-card">
  <div className="db-card-head">
    <div className="db-card-title">
      <IcActivity />
      Actividad reciente
      </div>
     </div>

    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
    47 commits esta semana. Actividad constante en proyectos de backend, frontend y mejoras de perfil público.
    </p>
    </section>
          </div>
        </div>
      </main>
    </>
  )
}