import 'react'

const Skills = () => {
    const primaryBadge = { backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)', fontWeight: 'bold' }
    const secondaryBadge = { border: '1px solid var(--border-dim)', color: 'var(--text-muted)' }
    const secondaryBadgeHover = { backgroundColor: 'var(--text-main)', color: 'var(--bg-main)' }

    const Badge = ({ primary, children }) => (
        <span
            className="px-2 py-1 text-sm cursor-default transition-colors"
            style={primary ? primaryBadge : secondaryBadge}
            onMouseEnter={e => { if (!primary) { Object.assign(e.currentTarget.style, secondaryBadgeHover) } }}
            onMouseLeave={e => { if (!primary) { Object.assign(e.currentTarget.style, secondaryBadge) } }}
        >
            {children}
        </span>
    )

    return (
        <div className="flex flex-col gap-4 mt-2 mb-2 w-full max-w-4xl">
            <div className="font-bold text-lg border-b-2 pb-1 w-fit uppercase tracking-widest"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                Technical Arsenal
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mt-2">

                <div>
                    <div className="mb-2 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        === Programming Languages ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        {['Go', 'TypeScript', 'JavaScript (ES6+)', 'C++'].map(s => <Badge key={s} primary>{s}</Badge>)}
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        === Backend &amp; APIs ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        {['Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth 2.0'].map(s => <Badge key={s} primary>{s}</Badge>)}
                        {['Auth0', 'WebSockets', 'SSH'].map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        === Databases &amp; Storage ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        {['MongoDB', 'PostgreSQL', 'Redis'].map(s => <Badge key={s} primary>{s}</Badge>)}
                        {['Neon', 'Mongoose'].map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        === Frontend ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        {['React', 'Next.js', 'Tailwind CSS'].map(s => <Badge key={s} primary>{s}</Badge>)}
                        {['shadcn/ui', 'Redux Toolkit', 'Framer Motion'].map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        === DevOps &amp; Tools ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        {['Git', 'Docker', 'Linux'].map(s => <Badge key={s} primary>{s}</Badge>)}
                        {['GitHub Actions', 'Vercel', 'Render', 'Railway', 'Neovim'].map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        === AI, Systems &amp; Networking ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        {['GenAI', 'LLMs', 'LangChain'].map(s => <Badge key={s} primary>{s}</Badge>)}
                        {['RAG', 'MCP', 'Git Internals', 'Distributed Systems'].map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills