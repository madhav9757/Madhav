import 'react'

const Setup = () => {
    return (
        <div className="flex flex-col gap-4 mt-2 mb-2 w-full max-w-2xl">
            <div className="font-bold text-lg border-b-2 pb-1 w-fit uppercase tracking-widest"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                System Architecture
            </div>
            <div className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                This terminal is not a pre-built template or library. It is a custom web application engineered from scratch to reflect my design philosophy: high-density, structurally clean interfaces.
            </div>

            <div className="flex flex-col gap-4 mt-2">
                <div className="border-l-4 pl-4 transition-colors cursor-default"
                    style={{ borderColor: 'var(--border-dim)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-dim)'}
                >
                    <span className="font-bold uppercase tracking-wider text-sm" style={{ color: 'var(--text-main)' }}>Frontend Engine</span>
                    <div className="mt-1" style={{ color: 'var(--text-muted)' }}>Built entirely on React and bundled with Vite for lightning-fast HMR and heavily optimized, minimal production builds.</div>
                </div>

                <div className="border-l-4 pl-4 transition-colors cursor-default"
                    style={{ borderColor: 'var(--border-dim)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-dim)'}
                >
                    <span className="font-bold uppercase tracking-wider text-sm" style={{ color: 'var(--text-main)' }}>Styling &amp; UI</span>
                    <div className="mt-1" style={{ color: 'var(--text-muted)' }}>Utility-first styling via Tailwind CSS, enforcing a strict brutalist monochrome aesthetic. The design prioritizes stark contrasts, sharp 0px borders, and raw typography using Fira Code.</div>
                </div>

                <div className="border-l-4 pl-4 transition-colors cursor-default"
                    style={{ borderColor: 'var(--border-dim)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-dim)'}
                >
                    <span className="font-bold uppercase tracking-wider text-sm" style={{ color: 'var(--text-main)' }}>Terminal Mechanics</span>
                    <div className="mt-1" style={{ color: 'var(--text-muted)' }}>Engineered with zero external CLI dependencies. Features custom global key trapping, React state-driven history logging, and a hidden DOM mirroring technique to calculate exact pixel widths for the Neovim-style ghost text autocomplete.</div>
                </div>
            </div>
        </div>
    )
}

export default Setup