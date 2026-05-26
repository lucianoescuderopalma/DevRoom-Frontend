import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const IcGrid = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

const IcGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const IcDoc = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const IcBag = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const IcUsers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const IcUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const IcStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const IcBell = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const IcSync = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
)

const IcDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const IcChevR = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const IcMenu = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IcCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const STRENGTHS = [
  { name: 'Experiencia técnica', detail: 'Java, Spring Boot, React, TypeScript y APIs.', status: 'ok' },
  { name: 'Stack visible', detail: 'Repositorios y skills detectadas correctamente.', status: 'ok' },
  { name: 'Resumen profesional', detail: 'Necesita una versión más vendedora y concreta.', status: 'warn' },
  { name: 'Proyectos destacados', detail: 'Falta priorizar 2 o 3 proyectos con impacto.', status: 'warn' },
]

const SECTIONS = [
  { title: 'Resumen profesional', state: 'Completar', tone: 'amber' },
  { title: 'Experiencia', state: 'Bien estructurada', tone: 'green' },
  { title: 'Skills técnicas', state: 'Actualizada', tone: 'green' },
  { title: 'Proyectos', state: 'Reforzar', tone: 'blue' },
  { title: 'Enlaces y portafolio', state: 'Activo', tone: 'green' },
]

const SUGGESTIONS = [
  'Agregar un resumen de 3 líneas orientado a backend/full stack.',
  'Destacar devroom-backend y devroom-frontend como proyectos principales.',
  'Incluir métricas o resultados concretos en experiencia reciente.',
]

function pillClass(tone) {
  if (tone === 'green') return 'db-pill db-pill--green'
  if (tone === 'blue') return 'db-pill db-pill--blue'
  return 'db-pill db-pill--amber'
}

export default function CvPage() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const circ = 2 * Math.PI * 50
  const offset = circ - 0.87 * circ

  const NAV = [
    { icon: <IcGrid />, label: 'Dashboard', to: '/dashboard', active: false },
    { icon: <IcGithub />, label: 'Repositorios', to: '/repositorios', active: false },
    { icon: <IcDoc />, label: 'Mi CV', to: '/cv', active: true },
    { icon: <IcBag />, label: 'Empleos', to: '/empleos', active: false },
    { icon: <IcUsers />, label: 'Red', to: '/red', active: false },
    { icon: <IcUser />, label: 'Perfil público', to: '/perfil', active: false },
  ]

  return (
    <div className="db-wrap">
      {mobileOpen && <div className="db-overlay" onClick={() => setMobileOpen(false)} />}

      <aside className={`db-side ${mobileOpen ? 'db-side--open' : ''}`}>
        <div className="db-side-logo">
          <div className="db-side-logo-icon">{'</>'}</div>
          <div className="db-side-logo-txt">DevRoom</div>
        </div>

        <nav className="db-nav">
          {NAV.map((item) => (
            <button
              key={item.label}
              className={`db-nav-item ${item.active ? 'db-nav-item--on' : ''}`}
              onClick={() => item.to && navigate(item.to)}
            >
              <span className="db-nav-ico">{item.icon}</span>
              <span className="db-nav-lbl">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="db-side-profile">
          <div className="db-side-av">LE</div>
          <div className="db-side-profile-txt">
            <div className="db-side-name">Luciano E.</div>
            <div className="db-side-handle">@lescudero · Santiago</div>
          </div>
        </div>
      </aside>

      <main className="db-main">
        <header className="db-topbar">
          <div className="db-topbar-l">
            <button className="db-topbar-menu" onClick={() => setMobileOpen(true)}>
              <IcMenu />
            </button>

            <div className="db-breadcrumb">
              <span className="db-bc-root">DevRoom</span>
              <IcChevR />
              <span className="db-bc-cur">Mi CV</span>
            </div>
          </div>

          <div className="db-topbar-r">
            <button className="db-tbtn">
              <IcSync />
              <span>Sincronizar</span>
            </button>

            <button className="db-tbtn db-tbtn--primary">
              <IcDown />
              <span>Exportar CV</span>
            </button>

            <div className="db-tbtn-ico">
              <IcBell />
              <span className="db-notif-dot" />
            </div>

            <div className="db-topbar-av">LE</div>
          </div>
        </header>

        <section className="db-body">
          <div className="db-page-hd">
            <h1 className="db-page-title">Mi CV</h1>
            <div className="db-page-meta">
              <span>Currículum generado con IA a partir de tu perfil técnico</span>
              <span className="db-dot" />
              <span className="db-meta-hi">87 / 100 de completitud</span>
            </div>
          </div>

          <div className="db-kpis">
            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcDoc /></div>
                <span className="db-kpi-trend">↑ 87%</span>
              </div>
              <div className="db-kpi-val">CV</div>
              <div className="db-kpi-lbl">Generado por IA</div>
              <div className="db-kpi-sub">listo para exportar</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--green"><IcStar /></div>
                <span className="db-kpi-trend">Top 15%</span>
              </div>
              <div className="db-kpi-val">87</div>
              <div className="db-kpi-lbl">Score actual</div>
              <div className="db-kpi-sub">según stack y experiencia</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--blue"><IcGithub /></div>
                <span className="db-kpi-trend">↑ +2</span>
              </div>
              <div className="db-kpi-val">12</div>
              <div className="db-kpi-lbl">Repositorios base</div>
              <div className="db-kpi-sub">usados para enriquecer contenido</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcUsers /></div>
                <span className="db-kpi-trend">↑ mejorable</span>
              </div>
              <div className="db-kpi-val">3</div>
              <div className="db-kpi-lbl">Áreas a reforzar</div>
              <div className="db-kpi-sub">antes de exportar versión final</div>
            </div>
          </div>

          <div className="db-grid">
            <div className="db-col">
              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcDoc /> Estructura del CV
                  </div>
                  <button className="db-card-link">
                    Editar <IcChevR />
                  </button>
                </div>

                <div className="db-jobs">
                  {SECTIONS.map((section) => (
                    <div key={section.title} className="db-job">
                      <div className="db-job-logo">
                        <IcCheck />
                      </div>

                      <div className="db-job-info">
                        <div className="db-job-title">{section.title}</div>
                        <div className="db-job-meta">
                          <span>Estado actual del bloque</span>
                        </div>
                      </div>

                      <div className="db-job-r">
                        <span className={pillClass(section.tone)}>{section.state}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcStar /> Recomendaciones de mejora
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {SUGGESTIONS.map((item) => (
                    <div
                      key={item}
                      style={{
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        padding: '1rem',
                        fontSize: '.82rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="db-col">
              <div className="db-card db-card--center">
                <div className="db-card-hd db-card-hd--full">
                  <div className="db-card-title">
                    <IcDoc /> Score del CV
                  </div>
                  <span className="db-pill db-pill--green">87 / 100</span>
                </div>

                <div className="db-ring">
                  <svg width="110" height="110" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="10" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#cvgrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={circ}
                      strokeDashoffset={offset}
                      transform="rotate(-90 60 60)"
                    />
                    <defs>
                      <linearGradient id="cvgrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                    <text x="60" y="55" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="22" fontWeight="800" fill="#e2e8f0">
                      87
                    </text>
                    <text x="60" y="70" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="8" fill="#7c8db5">
                      SCORE
                    </text>
                  </svg>
                </div>

                <div className="db-cv-checks">
                  {STRENGTHS.map((item) => (
                    <div key={item.name} className="db-cv-check">
                      <span
                        className={`db-cv-dot ${
                          item.status === 'ok'
                            ? 'db-cv-dot--ok'
                            : item.status === 'warn'
                            ? 'db-cv-dot--warn'
                            : ''
                        }`}
                      />
                      <div>
                        <div style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--text)' }}>{item.name}</div>
                        <div style={{ fontSize: '.74rem', color: 'var(--text-muted)', marginTop: '.2rem' }}>
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcDown /> Acciones rápidas
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '.75rem' }}>
                  <button className="db-tbtn db-tbtn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Exportar PDF
                  </button>
                  <button
                    className="db-tbtn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => navigate('/perfil')}
                  >
                    Ver perfil público
                  </button>
                  <button
                    className="db-tbtn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => navigate('/empleos')}
                  >
                    Ver empleos compatibles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}