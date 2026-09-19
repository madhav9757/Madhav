import 'react'

const Whoami = () => {
    return (
        <div className="mt-2 mb-2">
            <div className="mb-3">
                <span className="font-bold px-2 py-1 text-lg uppercase tracking-widest"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                    Madhav Semwal
                </span>
            </div>

            <div className="font-mono space-y-1" style={{ color: 'var(--text-muted)' }}>
                <div>&gt; Backend Engineer</div>
                <div>&gt; Go Developer</div>
                <div>&gt; Systems Programming Enthusiast</div>
                <div>&gt; Computer Engineering Student @ SPPU</div>
            </div>

            <div className="mt-4 border-l-2 pl-4 leading-relaxed max-w-2xl"
                style={{ borderColor: 'var(--border-dim)', color: 'var(--text-muted)' }}>
                I build backend systems, developer tools, authentication platforms,
                and networking applications with a strong focus on performance,
                scalability, and clean architecture. I&apos;m currently building my own
                Git-compatible version control system in Go while exploring distributed
                systems, low-level software design, and open-source development.
            </div>

            <div className="mt-4 text-sm font-mono" style={{ color: 'var(--border-dim)' }}>
                Focus: Backend • Systems • Networking • Go • AI • Open Source
            </div>
        </div>
    )
}

export default Whoami