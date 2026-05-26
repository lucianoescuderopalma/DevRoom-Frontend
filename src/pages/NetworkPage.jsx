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

const IcMsg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const IcLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.8 5" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L12.2 19" />
  </svg>
)

const CONTACTS = [
  {
    initials: 'AM',
    name: 'Ana Martínez',
    role: 'Frontend Engineer · React',
    company: 'Buk',
    tag: 'Muy compatible',
    tone: 'green',
    note: 'Coincide en React, TypeScript y diseño de producto.',
  },
  {
    initials: 'CR',
    name: 'Carlos Rojas',
    role: 'Backend Engineer · Java / Spring',
    company: 'Falabella Tech',
    tag: 'Stack compartido',
    tone: 'amber',
    note: 'Tiene experiencia en microservicios y APIs empresariales.',
  },
  {
    initials: 'VS',
    name: 'Valentina Soto',
    role: 'Product Engineer',
    company: 'Platanus',
    tag: 'Networking',
    tone: 'blue',
    note: 'Buen fit para colaboraciones y visibilidad de perfil.',
  },
  {
    initials: 'DP',
    name: 'Diego Pérez',
    role: 'Full Stack Developer',
    company: 'Bci Digital',
    tag: 'Reclutador cercano',
    tone: 'green',
    note: 'Puede abrir puertas a procesos con match alto.',
  },
]

const REQUESTS = [
  { initials: 'JP', name: 'Javier Pino', role: 'Tech Recruiter · Fintech', ago: 'hace 3 h' },
  { initials: 'MC', name: 'María Costa', role: 'Software Engineer · Go / Cloud', ago: 'hace 1 día' },
  { initials: 'FG', name: 'Felipe G.', role: 'Engineering Manager', ago: 'hace 2 días' },
]

const POSTS = [
  {
    author: 'Ana Martínez',
    meta: 'Hace 5 h · Buk',
    text: 'Buscamos frontend con React + TypeScript para producto B2B en crecimiento.',
    cta: 'Ver oportunidad',
  },
  {
    author: 'Carlos Rojas',
    meta: 'Hace 1 día · Falabella Tech',
    text: 'Estamos fortaleciendo equipos Java / Spring Boot con foco en microservicios.',
    cta: 'Conectar',
  },
]

function toneClass(tone) {
  if (tone === 'green') return 'db-pill db-pill--green'
  if (tone === 'blue') return 'db-pill db-pill--blue'
  return 'db-pill db-pill--amber'
}

export default function NetworkPage() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const NAV = [
    { icon: <IcGrid />, label: 'Dashboard', to: '/dashboard', active: false },
    { icon: <IcGithub />, label: 'Repositorios', to: '/repositorios', active: false },
    { icon: <IcDoc />, label: 'Mi CV', to: '/cv', active: false },
    { icon: <IcBag />, label: 'Empleos', to: '/empleos', active: false },
    { icon: <IcUsers />, label: 'Red', to: '/red', active: true },
    { icon: <IcUser />, label: 'Perfil público', to: '/perfil', active: false },
  ]

  return (
    <div className="db-wrap">
      {mobileOpen && <div className="db-overlay" onClick={() => setMobileOpen(false)} />}

      <aside className={`db-side ${mobileOpen ? 'db-side--open' : ''}`}>
        <div className="db-side-logo">
          <div className="db-side-logo-icon">D</div>
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
              <span className="db-bc-cur">Red</span>
            </div>
          </div>

          <div className="db-topbar-r">
            <button className="db-tbtn">
              <IcSync />
              <span>Actualizar</span>
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
            <h1 className="db-page-title">Tu red profesional</h1>
            <div className="db-page-meta">
              <span>Conexiones sugeridas por stack y afinidad profesional</span>
              <span className="db-dot" />
              <span className="db-meta-hi">+12 oportunidades esta semana</span>
            </div>
          </div>

          <div className="db-kpis">
            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcUsers /></div>
                <span className="db-kpi-trend">↑ +18%</span>
              </div>
              <div className="db-kpi-val">126</div>
              <div className="db-kpi-lbl">Contactos detectados</div>
              <div className="db-kpi-sub">en tu ecosistema técnico</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--green"><IcLink /></div>
                <span className="db-kpi-trend">↑ 9 nuevos</span>
              </div>
              <div className="db-kpi-val">24</div>
              <div className="db-kpi-lbl">Matches fuertes</div>
              <div className="db-kpi-sub">Java, React, Spring y backend</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--blue"><IcMsg /></div>
                <span className="db-kpi-trend">↑ +3</span>
              </div>
              <div className="db-kpi-val">7</div>
              <div className="db-kpi-lbl">Invitaciones pendientes</div>
              <div className="db-kpi-sub">por revisar hoy</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcBag /></div>
                <span className="db-kpi-trend">Top 12%</span>
              </div>
              <div className="db-kpi-val">31</div>
              <div className="db-kpi-lbl">Puentes laborales</div>
              <div className="db-kpi-sub">entre tu red y empleos afines</div>
            </div>
          </div>

          <div className="db-grid">
            <div className="db-col">
              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcUsers /> Personas sugeridas
                  </div>
                  <button className="db-card-link">
                    Ver todas <IcChevR />
                  </button>
                </div>

                <div className="db-jobs">
                  {CONTACTS.map((person) => (
                    <div key={person.name} className="db-job">
                      <div className="db-job-logo">{person.initials}</div>

                      <div className="db-job-info">
                        <div className="db-job-title">{person.name}</div>
                        <div className="db-job-meta">
                          <span>{person.role}</span>
                          <span className="db-dot" />
                          <span>{person.company}</span>
                        </div>
                        <div style={{ marginTop: '.5rem', fontSize: '.76rem', color: 'var(--text-muted)' }}>
                          {person.note}
                        </div>
                      </div>

                      <div className="db-job-r">
                        <span className={toneClass(person.tone)}>{person.tag}</span>
                        <button className="db-job-btn">Conectar</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcMsg /> Actividad de tu red
                  </div>
                  <span className="db-pill db-pill--blue">Feed técnico</span>
                </div>

                <div className="db-jobs">
                  {POSTS.map((post) => (
                    <div key={post.author} className="db-job" style={{ alignItems: 'flex-start' }}>
                      <div className="db-job-logo">{post.author.slice(0, 2).toUpperCase()}</div>

                      <div className="db-job-info">
                        <div className="db-job-title">{post.author}</div>
                        <div className="db-job-meta">
                          <span>{post.meta}</span>
                        </div>
                        <div style={{ marginTop: '.55rem', fontSize: '.82rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                          {post.text}
                        </div>
                      </div>

                      <div className="db-job-r">
                        <button className="db-job-btn">{post.cta}</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="db-col">
              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcLink /> Invitaciones
                  </div>
                  <span className="db-pill db-pill--amber">Pendientes</span>
                </div>

                <div className="db-jobs">
                  {REQUESTS.map((req) => (
                    <div key={req.name} className="db-job">
                      <div className="db-job-logo">{req.initials}</div>

                      <div className="db-job-info">
                        <div className="db-job-title">{req.name}</div>
                        <div className="db-job-meta">
                          <span>{req.role}</span>
                          <span className="db-dot" />
                          <span>{req.ago}</span>
                        </div>
                      </div>

                      <div className="db-job-r">
                        <button className="db-job-btn">Aceptar</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcBag /> Acciones rápidas
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '.75rem' }}>
                  <button className="db-tbtn" style={{ width: '100%', justifyContent: 'center' }}>
                    Importar contactos
                  </button>
                  <button className="db-tbtn db-tbtn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Optimizar perfil público
                  </button>
                  <button
                    className="db-tbtn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => navigate('/dashboard')}
                  >
                    Volver al dashboard
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