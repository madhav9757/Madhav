import 'react'

const Welcome = () => {
    return (
        <div className="mb-6 border-b-2 pb-5 leading-relaxed" style={{ borderColor: 'var(--border-dim)' }}>
            {/* Scalable ASCII Art Logo */}
            <pre className="max-w-full overflow-hidden break-all font-bold text-[6px] min-[380px]:text-[7px] sm:text-xs md:text-sm mb-5 leading-[0.95] cursor-default select-none"
                style={{ color: 'var(--text-main)' }}>
                {`
███╗   ███╗  █████╗  ██████╗  ██╗  ██╗  █████╗  ██╗   ██╗
████╗ ████║ ██╔══██╗ ██╔══██╗ ██║  ██║ ██╔══██╗ ██║   ██║
██╔████╔██║ ███████║ ██║  ██║ ███████║ ███████║ ██║   ██║
██║╚██╔╝██║ ██╔══██║ ██║  ██║ ██╔══██║ ██╔══██║ ╚██╗ ██╔╝
██║ ╚═╝ ██║ ██║  ██║ ██████╔╝ ██║  ██║ ██║  ██║  ╚████╔╝ 
╚═╝     ╚═╝ ╚═╝  ╚═╝ ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝   ╚═══╝
      `}
            </pre>

            <div style={{ color: 'var(--text-muted)' }}>
                <span className="font-bold px-2 py-0.5 text-xs uppercase tracking-widest mr-2 cursor-default"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                    System Online
                </span>
                Session started.<br /><br />

                No fluff. Just shipping scalable backends, clean architectures, and raw developer tooling.<br />
                Currently <span className="font-bold underline decoration-wavy underline-offset-4"
                    style={{ color: 'var(--text-main)', textDecorationColor: 'var(--text-muted)' }}>locked in</span> on Go, Node.js, and building independent identity systems.<br /><br />

                Type <strong className="px-1.5 py-0.5 cursor-default transition-colors"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>help</strong> to see what&apos;s cooking.<br />
                Hit <strong className="px-1.5 py-0.5 mt-1 cursor-default transition-colors"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>projects</strong> to see the receipts.
            </div>
        </div>
    )
}

export default Welcome
