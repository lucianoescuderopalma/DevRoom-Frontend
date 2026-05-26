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

const IcCode = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const IcActivity = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const REPOS = [
  { name: 'devroom-backend', lang: 'Java', dot: '#f59e0b', commits: 142, score: 92, level: 'high', updated: 'hace 2 días' },
  { name: 'portfolio-react', lang: 'TypeScript', dot: '#38bdf8', commits: 87, score: 88, level: 'high', updated: 'hace 5 días' },
  { name: 'ml-classifier', lang: 'Python', dot: '#10b981', commits: 63, score: 74, level: 'mid', updated: 'hace 2 sem' },
  { name: 'devroom-frontend', lang: 'React/JSX', dot: '#38bdf8', commits: 210, score: 90, level: 'high', updated: 'hace 1 día' },
  { name: 'fiber-api', lang: 'Go', dot: '#a78bfa', commits: 31, score: 58, level: 'low', updated: 'hace 1 mes' },
  { name: 'infra-scripts', lang: 'Shell', dot: '#94a3b8', commits: 28, score: 61, level: 'low', updated: 'hace 3 sem' },
]

const TOP_LANGS = [
  { name: 'Java', pct: 34, level: 'high' },
  { name: 'React/JSX', pct: 26, level: 'mid' },
  { name: 'TypeScript', pct: 18, level: 'mid' },
  { name: 'Python', pct: 14, level: 'mid' },
  { name: 'Go', pct: 8, level: 'low' },
]

const INSIGHTS = [
  'Tus repositorios con mejor score combinan backend Java y frontend React.',
  'Los proyectos con más commits son los que más empujan tu perfil técnico.',
  'Conviene destacar 3 repositorios principales con README y stack claro.',
]

function badgeClass(level) {
  if (level === 'high') return 'db-badge db-badge--high'
  if (level === 'mid') return 'db-badge db-badge--mid'
  return 'db-badge db-badge--low'
}

function fillClass(level) {
  if (level === 'high') return 'db-skill-fill db-skill-fill--high'
  if (level === 'mid') return 'db-skill-fill db-skill-fill--mid'
  return 'db-skill-fill db-skill-fill--low'
}

function pctClass(level) {
  if (level === 'high') return 'db-skill-pct db-skill-pct--high'
  if (level === 'mid') return 'db-skill-pct db-skill-pct--mid'
  return 'db-skill-pct db-skill-pct--low'
}

export default function ReposPage() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const NAV = [
    { icon: <IcGrid />, label: 'Dashboard', to: '/dashboard', active: false },
    { icon: <IcGithub />, label: 'Repositorios', to: '/repositorios', active: true },
    { icon: <IcDoc />, label: 'Mi CV', to: '/cv', active: false },
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
              onClick={() => {
                setMobileOpen(false)
                if (item.to) navigate(item.to)
              }}
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
              <span className="db-bc-cur">Repositorios</span>
            </div>
          </div>

          <div className="db-topbar-r">
            <button className="db-tbtn">
              <IcSync />
              <span>Sincronizar</span>
            </button>

            <button className="db-tbtn db-tbtn--primary">
              <IcDown />
              <span>Exportar</span>
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
            <h1 className="db-page-title">Repositorios</h1>
            <div className="db-page-meta">
              <span>Seguimiento técnico de proyectos conectados</span>
              <span className="db-dot" />
              <span className="db-meta-hi">12 analizados por IA</span>
            </div>
          </div>

          <div className="db-kpis">
            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcGithub /></div>
                <span className="db-kpi-trend">↑ +2</span>
              </div>
              <div className="db-kpi-val">12</div>
              <div className="db-kpi-lbl">Repos conectados</div>
              <div className="db-kpi-sub">sincronizados con tu perfil</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--green"><IcActivity /></div>
                <span className="db-kpi-trend">↑ 561</span>
              </div>
              <div className="db-kpi-val">561</div>
              <div className="db-kpi-lbl">Commits totales</div>
              <div className="db-kpi-sub">en repos priorizados</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--blue"><IcStar /></div>
                <span className="db-kpi-trend">↑ 90 prom.</span>
              </div>
              <div className="db-kpi-val">90</div>
              <div className="db-kpi-lbl">Top score IA</div>
              <div className="db-kpi-sub">en proyectos mejor evaluados</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcCode /></div>
                <span className="db-kpi-trend">↑ 5</span>
              </div>
              <div className="db-kpi-val">5</div>
              <div className="db-kpi-lbl">Stacks detectados</div>
              <div className="db-kpi-sub">Java, TS, React, Python, Go</div>
            </div>
          </div>

          <div className="db-grid">
            <div className="db-col">
              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcGithub /> Repositorios analizados
                  </div>

                  <button className="db-card-link">
                    Ver GitHub <IcChevR />
                  </button>
                </div>

                <div className="db-tbl-wrap">
                  <table className="db-tbl">
                    <thead>
                      <tr>
                        <th>Repositorio</th>
                        <th>Lenguaje</th>
                        <th>Commits</th>
                        <th>Score IA</th>
                        <th>Actualizado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {REPOS.map((repo) => (
                        <tr key={repo.name}>
                          <td>
                            <span className="db-repo">{repo.name}</span>
                          </td>
                          <td>
                            <span className="db-lang">
                              <span className="db-lang-dot" style={{ background: repo.dot }} />
                              {repo.lang}
                            </span>
                          </td>
                          <td className="db-tnum">{repo.commits}</td>
                          <td>
                            <span className={badgeClass(repo.level)}>{repo.score}</span>
                          </td>
                          <td className="db-tmuted">{repo.updated}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcStar /> Insights del análisis
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {INSIGHTS.map((item) => (
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
              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title">
                    <IcCode /> Lenguajes dominantes
                  </div>
                </div>

                <div className="db-skills">
                  {TOP_LANGS.map((lang) => (
                    <div key={lang.name} className="db-skill">
                      <div className="db-skill-name">{lang.name}</div>

                      <div className="db-skill-bg">
                        <div
                          className={fillClass(lang.level)}
                          style={{ width: `${lang.pct}%` }}
                        />
                      </div>

                      <div className={pctClass(lang.level)}>{lang.pct}%</div>
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
                    Exportar análisis
                  </button>

                  <button
                    className="db-tbtn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => navigate('/cv')}
                  >
                    Usar en mi CV
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