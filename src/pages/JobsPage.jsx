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

const IcFilter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)

const IcPin = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
)

const JOBS = [
  {
    co: 'F',
    title: 'Backend Engineer · Java / Spring Boot',
    company: 'Falabella Tech',
    location: 'Remoto',
    salary: '$4.000K–5.200K CLP',
    match: '92%',
    tone: 'high',
    tags: ['Java', 'Spring', 'Microservices'],
  },
  {
    co: 'B',
    title: 'Full Stack Developer · React + Node',
    company: 'Bci Digital',
    location: 'Santiago',
    salary: '$3.500K CLP',
    match: '84%',
    tone: 'high',
    tags: ['React', 'Node', 'TypeScript'],
  },
  {
    co: 'C',
    title: 'Software Engineer · Microservices',
    company: 'Cornershop',
    location: 'Remoto LATAM',
    salary: '$3.800K CLP',
    match: '78%',
    tone: 'mid',
    tags: ['Java', 'APIs', 'Cloud'],
  },
  {
    co: 'R',
    title: 'Java Developer · Fintech',
    company: 'Ripley Corp',
    location: 'Santiago',
    salary: '$3.200K CLP',
    match: '71%',
    tone: 'mid',
    tags: ['Java', 'Spring Boot', 'SQL'],
  },
  {
    co: 'M',
    title: 'Backend Developer · Go',
    company: 'Mercado Libre',
    location: 'Híbrido',
    salary: '$4.400K CLP',
    match: '66%',
    tone: 'low',
    tags: ['Go', 'APIs', 'Docker'],
  },
]

const PIPELINE = [
  { label: 'Compatibles', value: 24, sub: 'match > 70%' },
  { label: 'Postuladas', value: 6, sub: 'esta semana' },
  { label: 'Entrevistas', value: 2, sub: 'activas' },
]

const ALERTS = [
  'Java + Spring Boot sigue siendo tu combinación más fuerte.',
  'React + TypeScript abre más opciones híbridas en Santiago.',
  'Tienes 5 nuevas vacantes con match alto desde el último análisis.',
]

function badgeClass(tone) {
  if (tone === 'high') return 'db-badge db-badge--high'
  if (tone === 'mid') return 'db-badge db-badge--mid'
  return 'db-badge db-badge--low'
}

export default function JobsPage() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const NAV = [
    { icon: <IcGrid />, label: 'Dashboard', to: '/dashboard', active: false },
    { icon: <IcGithub />, label: 'Repositorios', to: '/repositorios', active: false },
    { icon: <IcDoc />, label: 'Mi CV', to: '/cv', active: false },
    { icon: <IcBag />, label: 'Empleos', to: '/empleos', active: true },
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
              <span className="db-bc-cur">Empleos</span>
            </div>
          </div>

          <div className="db-topbar-r">
            <button className="db-tbtn">
              <IcFilter />
              <span>Filtros</span>
            </button>

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
            <h1 className="db-page-title">Empleos recomendados</h1>
            <div className="db-page-meta">
              <span>Vacantes alineadas con tu stack y actividad reciente</span>
              <span className="db-dot" />
              <span className="db-meta-hi">24 oportunidades con match alto</span>
            </div>
          </div>

          <div className="db-kpis">
            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcBag /></div>
                <span className="db-kpi-trend">↑ +5 nuevas</span>
              </div>
              <div className="db-kpi-val">24</div>
              <div className="db-kpi-lbl">Empleos compatibles</div>
              <div className="db-kpi-sub">match superior al 70%</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--green"><IcStar /></div>
                <span className="db-kpi-trend">Top 15%</span>
              </div>
              <div className="db-kpi-val">87%</div>
              <div className="db-kpi-lbl">Afinidad promedio</div>
              <div className="db-kpi-sub">según tu perfil técnico</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--blue"><IcDoc /></div>
                <span className="db-kpi-trend">↑ CV listo</span>
              </div>
              <div className="db-kpi-val">6</div>
              <div className="db-kpi-lbl">Postulaciones hechas</div>
              <div className="db-kpi-sub">durante esta semana</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcUsers /></div>
                <span className="db-kpi-trend">↑ +3 puentes</span>
              </div>
              <div className="db-kpi-val">9</div>
              <div className="db-kpi-lbl">Conexiones útiles</div>
              <div className="db-kpi-sub">dentro de tu red profesional</div>
            </div>
          </div>

          <div className="db-grid">
            <div className="db-col">
              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcBag /> Vacantes destacadas
                  </div>
                  <button className="db-card-link">
                    Ver todas <IcChevR />
                  </button>
                </div>

                <div className="db-jobs">
                  {JOBS.map((job) => (
                    <div key={job.title} className="db-job">
                      <div className="db-job-logo">{job.co}</div>

                      <div className="db-job-info">
                        <div className="db-job-title">{job.title}</div>
                        <div className="db-job-meta">
                          <span>{job.company}</span>
                          <span className="db-dot" />
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.25rem' }}>
                            <IcPin />
                            {job.location}
                          </span>
                          <span className="db-dot" />
                          <span className="db-job-salary">{job.salary}</span>
                        </div>

                        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.55rem' }}>
                          {job.tags.map((tag) => (
                            <span key={tag} className="db-pill db-pill--blue">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="db-job-r">
                        <span className={badgeClass(job.tone)}>{job.match}</span>
                        <button className="db-job-btn">Postular</button>
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
                    <IcDoc /> Tu pipeline
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '.75rem' }}>
                  {PIPELINE.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        padding: '1rem 1rem .9rem',
                      }}
                    >
                      <div style={{ fontSize: '.72rem', color: 'var(--text-faint)', marginBottom: '.25rem' }}>
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.65rem',
                          fontWeight: 800,
                          lineHeight: 1,
                          letterSpacing: '-.03em',
                        }}
                      >
                        {item.value}
                      </div>
                      <div style={{ marginTop: '.35rem', fontSize: '.74rem', color: 'var(--text-muted)' }}>
                        {item.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcStar /> Insights
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {ALERTS.map((alert) => (
                    <div
                      key={alert}
                      style={{
                        padding: '.9rem 1rem',
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        fontSize: '.8rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                      }}
                    >
                      {alert}
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcUsers /> Acciones rápidas
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '.75rem' }}>
                  <button className="db-tbtn db-tbtn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Exportar CV
                  </button>
                  <button
                    className="db-tbtn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => navigate('/red')}
                  >
                    Ver red relacionada
                  </button>
                  <button
                    className="db-tbtn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => navigate('/dashboard')}
                  >
                    Ir al dashboard
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