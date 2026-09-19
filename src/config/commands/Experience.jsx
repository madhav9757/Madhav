import 'react'
import { Briefcase } from 'lucide-react'

const Experience = () => {
    return (
        <div className="flex flex-col gap-6 mt-2 mb-4 w-full max-w-4xl">
            <div className="font-bold text-lg border-b-2 pb-1 w-fit uppercase tracking-widest flex items-center gap-2"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                <Briefcase size={20} />
                Work History &amp; Contributions
            </div>

            <div className="flex flex-col gap-6">

                <div className="border-l-4 pl-4 transition-colors group cursor-default"
                    style={{ borderColor: 'var(--border-color)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-muted)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg group-hover:underline underline-offset-4"
                                style={{ color: 'var(--text-main)' }}>
                                Freelance Full-Stack Developer
                            </span>
                            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                                Independent Client Projects
                            </span>
                        </div>
                        <span className="text-xs font-bold px-2 py-0.5 w-fit uppercase tracking-wider"
                            style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                            2023 — Present
                        </span>
                    </div>

                    <ul className="mt-3 space-y-2 font-mono text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        <li className="flex items-start gap-2">
                            <span className="font-bold select-none" style={{ color: 'var(--text-main)' }}>❯</span>
                            <span>Engineered scalable e-commerce platforms and custom web solutions for retail &amp; business clients.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold select-none" style={{ color: 'var(--text-main)' }}>❯</span>
                            <span>Designed RESTful API gateways, optimized PostgreSQL/MongoDB database queries, and implemented payment integrations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold select-none" style={{ color: 'var(--text-main)' }}>❯</span>
                            <span>Built bespoke content management dashboards utilizing Next.js, React, and Tailwind CSS.</span>
                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-3.5">
                        {['Node.js', 'Next.js'].map(tag => (
                            <span key={tag} className="text-xs font-bold px-2 py-0.5"
                                style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>{tag}</span>
                        ))}
                        {['PostgreSQL', 'REST APIs', 'Tailwind CSS'].map(tag => (
                            <span key={tag} className="text-xs border px-2 py-0.5"
                                style={{ borderColor: 'var(--border-dim)', color: 'var(--text-muted)' }}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="border-l-4 pl-4 transition-colors group cursor-default"
                    style={{ borderColor: 'var(--border-dim)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-dim)'}
                >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg group-hover:underline underline-offset-4 flex items-center gap-2"
                                style={{ color: 'var(--text-main)' }}>
                                Open-Source Developer &amp; Systems Builder
                            </span>
                            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                                Community &amp; Self-Directed Software Engineering
                            </span>
                        </div>
                        <span className="text-xs font-bold px-2 py-0.5 w-fit uppercase tracking-wider"
                            style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                            2023 — Present
                        </span>
                    </div>

                    <ul className="mt-3 space-y-2 font-mono text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        <li className="flex items-start gap-2">
                            <span className="font-bold select-none" style={{ color: 'var(--text-main)' }}>❯</span>
                            <span>Engineered <strong style={{ color: 'var(--text-main)' }}>AuthSphere</strong>, a multi-tenant OAuth 2.0 authentication engine and Identity-as-a-Service infrastructure.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold select-none" style={{ color: 'var(--text-main)' }}>❯</span>
                            <span>Architected <strong style={{ color: 'var(--text-main)' }}>Syncra</strong>, a zero-knowledge peer-to-peer communication engine built with Go and WebSockets.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold select-none" style={{ color: 'var(--text-main)' }}>❯</span>
                            <span>Developing <strong style={{ color: 'var(--text-main)' }}>MyGit</strong>, a Git-compatible version control system written entirely from scratch in Go.</span>
                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-3.5">
                        {['Go', 'OAuth 2.0'].map(tag => (
                            <span key={tag} className="text-xs font-bold px-2 py-0.5"
                                style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>{tag}</span>
                        ))}
                        {['WebSockets', 'Redis', 'Git Internals'].map(tag => (
                            <span key={tag} className="text-xs border px-2 py-0.5"
                                style={{ borderColor: 'var(--border-dim)', color: 'var(--text-muted)' }}>{tag}</span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience