import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const IcGrid = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
const IcGithub = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
const IcDoc = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
const IcBag = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
const IcUsers = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
const IcUser = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
const IcStar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IcBell = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
const IcSync = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
const IcDown = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
const IcChevR = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
const IcMenu = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
const IcActivity = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>

const REPOS = [
  { name: 'devroom-backend', lang: 'Java', dot: '#f59e0b', commits: 142, score: 92, lvl: 'high', ago: 'hace 2 días' },
  { name: 'portfolio-react', lang: 'TypeScript', dot: '#38bdf8', commits: 87, score: 88, lvl: 'high', ago: 'hace 5 días' },
  { name: 'ml-classifier', lang: 'Python', dot: '#10b981', commits: 63, score: 74, lvl: 'mid', ago: 'hace 2 sem' },
  { name: 'devroom-frontend', lang: 'React/JSX', dot: '#38bdf8', commits: 210, score: 90, lvl: 'high', ago: 'hace 1 día' },
  { name: 'fiber-api', lang: 'Go', dot: '#a78bfa', commits: 31, score: 58, lvl: 'low', ago: 'hace 1 mes' },
]

const JOBS = [
  { co: 'F', title: 'Backend Engineer · Java / Spring Boot', company: 'Falabella Tech', mode: 'Remoto', salary: '$4.000K–5.200K CLP', match: 92, lvl: 'high' },
  { co: 'B', title: 'Full Stack Developer · React + Node', company: 'Bci Digital', mode: 'Santiago', salary: '$3.500K CLP', match: 84, lvl: 'high' },
  { co: 'C', title: 'Software Engineer · Microservices', company: 'Cornershop', mode: 'Remoto LATAM', salary: '$3.800K CLP', match: 78, lvl: 'mid' },
  { co: 'R', title: 'Java Developer · Fintech', company: 'Ripley Corp', mode: 'Santiago', salary: '$3.200K CLP', match: 71, lvl: 'mid' },
]

const SKILLS = [
  { name: 'Java', pct: 92, lvl: 'high' },
  { name: 'Spring Boot', pct: 88, lvl: 'high' },
  { name: 'React', pct: 80, lvl: 'high' },
  { name: 'TypeScript', pct: 74, lvl: 'mid' },
  { name: 'PostgreSQL', pct: 70, lvl: 'mid' },
  { name: 'Docker', pct: 60, lvl: 'low' },
]

const ACTIVITY = [30, 70, 50, 90, 60, 40, 20]
const DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

const CV_CHECKS = [
  { st: 'ok', txt: '12 repositorios conectados' },
  { st: 'ok', txt: 'Skills extraídas por IA' },
  { st: 'ok', txt: 'Perfil público activo' },
  { st: 'warn', txt: 'Descripción personal' },
  { st: 'pending', txt: 'Proyectos destacados' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const circ = 2 * Math.PI * 50
  const offset = circ - 0.87 * circ

  const navItems = [
    { icon: <IcGrid />, label: 'Dashboard', active: true, to: null },
    { icon: <IcGithub />, label: 'Repositorios', to: '/repositorios', active: true },
    { icon: <IcDoc />, label: 'Mi CV', active: false, to: '/cv' },
    { icon: <IcBag />, label: 'Empleos', active: false, to: '/empleos' },
    { icon: <IcUsers />, label: 'Red', active: false, to: '/red' },
    { icon: <IcUser />, label: 'Perfil público', active: false, to: '/perfil' },
  ]

  const scoreClass = (lvl) => {
    if (lvl === 'high') return 'db-badge db-badge--high'
    if (lvl === 'mid') return 'db-badge db-badge--mid'
    return 'db-badge db-badge--low'
  }

  const pillClass = (lvl) => {
    if (lvl === 'high') return 'db-pill db-pill--green'
    if (lvl === 'mid') return 'db-pill db-pill--amber'
    return 'db-pill db-pill--blue'
  }

  return (
    <div className={`db-wrap${collapsed ? ' db-wrap--col' : ''}`}>
      {mobileOpen && <div className="db-overlay" onClick={() => setMobileOpen(false)} />}

      <aside className={`db-side${collapsed ? ' db-side--col' : ''}${mobileOpen ? ' db-side--open' : ''}`}>
        <div className="db-side-logo">
          <div className="db-side-logo-icon">{'</>'}</div>
          <span className="db-side-logo-txt">DevRoom</span>
        </div>

        <nav className="db-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`db-nav-item${item.active ? ' db-nav-item--on' : ''}`}
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

        <button className="db-side-toggle" onClick={() => setCollapsed(v => !v)}>
          <IcChevR />
        </button>
      </aside>

      <div className="db-main">
        <header className="db-topbar">
          <div className="db-topbar-l">
            <button className="db-topbar-menu" onClick={() => setMobileOpen(v => !v)}>
              <IcMenu />
            </button>
            <div className="db-breadcrumb">
              <span className="db-bc-root">DevRoom</span>
              <IcChevR />
              <span className="db-bc-cur">Dashboard</span>
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
            <button className="db-tbtn-ico">
              <IcBell />
              <span className="db-notif-dot" />
            </button>
            <div className="db-topbar-av">LE</div>
          </div>
        </header>

        <div className="db-body">
          <div className="db-page-hd">
            <h1 className="db-page-title">Bienvenido, Luciano 👋</h1>
            <div className="db-page-meta">
              <span>Último análisis hace 2 días</span>
              <span className="db-dot" />
              <span>12 repositorios</span>
              <span className="db-dot" />
              <span className="db-meta-hi">Top 15% en tu stack</span>
            </div>
          </div>

          <div className="db-kpis">
            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcGithub /></div>
                <span className="db-kpi-trend">↑ +2</span>
              </div>
              <div className="db-kpi-val">12</div>
              <div className="db-kpi-lbl">Repositorios</div>
              <div className="db-kpi-sub">analizados por IA</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--green"><IcStar /></div>
                <span className="db-kpi-trend">↑ Top 15%</span>
              </div>
              <div className="db-kpi-val">87%</div>
              <div className="db-kpi-lbl">Score del perfil</div>
              <div className="db-kpi-sub">7 skills detectadas</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--blue"><IcBag /></div>
                <span className="db-kpi-trend">↑ +5 nuevos</span>
              </div>
              <div className="db-kpi-val">24</div>
              <div className="db-kpi-lbl">Empleos compatibles</div>
              <div className="db-kpi-sub">match &gt; 70%</div>
            </div>

            <div className="db-kpi">
              <div className="db-kpi-top">
                <div className="db-kpi-ico db-kpi-ico--amber"><IcDoc /></div>
                <span className="db-kpi-trend">↑ 87%</span>
              </div>
              <div className="db-kpi-val">CV</div>
              <div className="db-kpi-lbl">Generado por IA</div>
              <div className="db-kpi-sub">listo para exportar</div>
            </div>
          </div>

          <div className="db-grid">
            <div className="db-col">
              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title"><IcGithub /> Repositorios analizados</div>
                  <button className="db-card-link">Ver todos <IcChevR /></button>
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
                      {REPOS.map((r) => (
                        <tr key={r.name}>
                          <td><span className="db-repo">{r.name}</span></td>
                          <td>
                            <span className="db-lang">
                              <span className="db-lang-dot" style={{ backgroundColor: r.dot }} />
                              {r.lang}
                            </span>
                          </td>
                          <td className="db-tnum">{r.commits}</td>
                          <td><span className={scoreClass(r.lvl)}>{r.score}</span></td>
                          <td className="db-tmuted">{r.ago}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title"><IcBag /> Empleos recomendados</div>
                  <span className="db-pill db-pill--blue">24 nuevos</span>
                </div>

                <div className="db-jobs">
                  {JOBS.map((job) => (
                    <div className="db-job" key={job.title}>
                      <div className="db-job-logo">{job.co}</div>
                      <div className="db-job-info">
                        <div className="db-job-title">{job.title}</div>
                        <div className="db-job-meta">
                          <span>{job.company}</span>
                          <span className="db-dot" />
                          <span>{job.mode}</span>
                          <span className="db-dot" />
                          <span className="db-job-salary">{job.salary}</span>
                        </div>
                      </div>
                      <div className="db-job-r">
                        <span className={pillClass(job.lvl)}>{job.match}%</span>
                        <button className="db-job-btn" onClick={() => navigate('/empleos')}>Postular</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="db-col">
              <div className="db-card db-card--center">
                <div className="db-card-hd db-card-hd--full">
                  <div className="db-card-title"><IcDoc /> Score del CV</div>
                  <span className="db-pill db-pill--green">87 / 100</span>
                </div>

                <div className="db-ring">
                  <svg width="126" height="126" viewBox="0 0 120 120">
                    <defs>
                      <linearGradient id="cvg" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="10" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#cvg)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={circ}
                      strokeDashoffset={offset}
                      transform="rotate(-90 60 60)"
                    />
                    <text x="60" y="56" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="22" fontWeight="800" fill="#e2e8f0">87</text>
                    <text x="60" y="72" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="8" fill="#7c8db5">COMPLETITUD</text>
                  </svg>
                </div>

                <div className="db-cv-checks">
                  {CV_CHECKS.map((item) => (
                    <div className={`db-cv-check${item.st === 'pending' ? ' db-cv-pending' : ''}`} key={item.txt}>
                      <span className={`db-cv-dot${item.st === 'ok' ? ' db-cv-dot--ok' : item.st === 'warn' ? ' db-cv-dot--warn' : ''}`} />
                      <span>{item.txt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title"><IcStar /> Top skills</div>
                </div>

                <div className="db-skills">
                  {SKILLS.map((s) => (
                    <div className="db-skill" key={s.name}>
                      <span className="db-skill-name">{s.name}</span>
                      <div className="db-skill-bg">
                        <div className={`db-skill-fill db-skill-fill--${s.lvl}`} style={{ width: `${s.pct}%` }} />
                      </div>
                      <span className={`db-skill-pct db-skill-pct--${s.lvl}`}>{s.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title"><IcActivity /> Actividad semanal</div>
                  <span className="db-pill db-pill--amber">47 commits</span>
                </div>

                <div className="db-activity">
                  {ACTIVITY.map((v, i) => (
                    <div className="db-act-col" key={DAYS[i]}>
                      <div className="db-act-bar-wrap">
                        <div className="db-act-bar" style={{ height: `${v}%` }} />
                      </div>
                      <div className="db-act-day">{DAYS[i]}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <div className="db-card-hd">
                  <div className="db-card-title"><IcUsers /> Resumen</div>
                </div>

                <div className="db-jobs">
                  <div className="db-job">
                    <div className="db-job-logo">#</div>
                    <div className="db-job-info">
                      <div className="db-job-title">Ranking del perfil</div>
                      <div className="db-job-meta">
                        <span>Top 15%</span>
                        <span className="db-dot" />
                        <span>stack Java</span>
                      </div>
                    </div>
                    <div className="db-job-r">
                      <span className="db-pill db-pill--amber">TOP</span>
                    </div>
                  </div>

                  <div className="db-job">
                    <div className="db-job-logo">AI</div>
                    <div className="db-job-info">
                      <div className="db-job-title">Actividad detectada</div>
                      <div className="db-job-meta">
                        <span>12 repos</span>
                        <span className="db-dot" />
                        <span>7 skills</span>
                      </div>
                    </div>
                    <div className="db-job-r">
                      <span className="db-pill db-pill--green">Activo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}