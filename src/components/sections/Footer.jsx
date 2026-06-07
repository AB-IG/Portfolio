import { meta, services, footerNav } from '../../data/content'

const DIM = 'rgba(240,237,230,0.45)'
const BRIGHT = '#F0EDE6'

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center cursor-none"
      style={{
        width: 32, height: 32,
        border: '1px solid rgba(240,237,230,0.12)',
        borderRadius: 3,
        color: DIM,
        textDecoration: 'none',
        transition: 'color 0.2s, border-color 0.2s, opacity 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = BRIGHT; e.currentTarget.style.borderColor = 'rgba(240,237,230,0.4)' }}
      onMouseLeave={(e) => { e.currentTarget.style.color = DIM; e.currentTarget.style.borderColor = 'rgba(240,237,230,0.12)' }}
    >
      {children}
    </a>
  )
}

function FootLink({ label, href }) {
  const scroll = () => {
    const el = document.getElementById(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <li>
      <button
        onClick={scroll}
        className="cursor-none"
        style={{
          background: 'none', border: 'none', padding: 0,
          fontSize: '0.82rem',
          color: DIM,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = BRIGHT)}
        onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
      >
        {label}
      </button>
    </li>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#080807', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          style={{ paddingTop: 64, paddingBottom: 48 }}
        >

          {/* Col 1 — Identity */}
          <div className="flex flex-col gap-4">
            <div>
              <div style={{ fontWeight: 700, color: BRIGHT, fontSize: '1rem', letterSpacing: '-0.01em', marginBottom: 5 }}>
                AM
              </div>
              <div style={{ fontSize: '0.8rem', lineHeight: 1.55, color: 'rgba(240,237,230,0.65)', marginBottom: 4 }}>
                {meta.name} — {meta.role}
              </div>
              <div style={{ fontSize: '0.8rem', color: DIM }}>
                Building products that perform.
              </div>
            </div>
            <div className="flex gap-2">
              <SocialIcon href={meta.linkedinHref} label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialIcon>
              <SocialIcon href={meta.github} label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </SocialIcon>
              <SocialIcon href={meta.twitter} label="Twitter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href={meta.instagram} label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: BRIGHT, marginBottom: 16 }}>
              Navigate
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {footerNav.map((l) => (
                <FootLink key={l.href} label={l.label} href={l.href} />
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: BRIGHT, marginBottom: 16 }}>
              Services
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {services.map((s) => (
                <li key={s} style={{ fontSize: '0.82rem', color: DIM }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Availability */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: BRIGHT, marginBottom: 16 }}>
              Availability
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: '📧', text: meta.email,    href: `mailto:${meta.email}` },
                { icon: '📞', text: meta.phone,    href: `tel:+234${meta.phone.replace(/^0/, '')}` },
                { icon: '📍', text: meta.location, href: null },
                { icon: '🔗', text: 'LinkedIn',    href: meta.linkedinHref },
              ].map((c) => (
                <div key={c.text} className="flex items-start gap-2">
                  <span style={{ fontSize: '0.8rem', lineHeight: '1.6', flexShrink: 0 }}>{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="cursor-none break-all"
                      style={{ fontSize: '0.82rem', lineHeight: '1.6', color: DIM, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = BRIGHT)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
                    >
                      {c.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.82rem', lineHeight: '1.6', color: DIM }}>{c.text}</span>
                  )}
                </div>
              ))}
              <div
                className="inline-flex items-center gap-1.5 font-semibold mt-1"
                style={{ fontSize: '0.78rem', color: '#4ADE80' }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block', flexShrink: 0 }} />
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid var(--border)', padding: '18px 0' }}
        >
          <span style={{ fontSize: '0.81rem', color: 'var(--text-muted)' }}>
            © 2026 Abraham Markus. All rights reserved.
          </span>
          <span style={{ fontSize: '0.81rem', color: 'var(--text-muted)' }}>
            Engineered with precision.
          </span>
        </div>

        {/* Roman numeral signature — ozgur-style */}
        <div className="text-center" style={{ paddingBottom: 20 }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
            MMXXIII – MMXXVI
          </span>
        </div>
      </div>
    </footer>
  )
}
