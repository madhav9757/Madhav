import 'react'
import { Terminal, User, Mail, Keyboard } from 'lucide-react' 

const Help = ({ onSelectCommand }) => {
    const handleCommandClick = (cmd) => {
        if (onSelectCommand) {
            onSelectCommand(cmd)
        }
    }

    const CmdBtn = ({ cmd, label }) => (
        <div className="flex items-center gap-2">
            <button
                onClick={() => handleCommandClick(cmd)}
                className="font-bold px-1.5 py-0.5 border transition-colors cursor-pointer text-left font-mono"
                style={{ color: 'var(--text-main)', borderColor: 'var(--border-dim)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-main)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.borderColor = 'var(--border-dim)'; }}
            >
                {cmd}
            </button>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</span>
        </div>
    )

    return (
        <div className="leading-relaxed mt-2 mb-3 max-w-3xl font-mono">
            
            <div className="mb-4">
                <strong className="border-b pb-1 flex items-center gap-2 uppercase tracking-wider text-sm mb-2.5"
                    style={{ color: 'var(--text-main)', borderColor: 'var(--border-dim)' }}>
                    <Terminal size={16} /> System Operations
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <CmdBtn cmd="help / h" label="- Show directory" />
                    <CmdBtn cmd="clear / cls" label="- Clear output" />
                    <CmdBtn cmd="theme [name]" label="- Switch color scheme" />
                    <CmdBtn cmd="history" label="- View command log" />
                </div>
            </div>

            <div className="mb-4">
                <strong className="border-b pb-1 flex items-center gap-2 uppercase tracking-wider text-sm mb-2.5"
                    style={{ color: 'var(--text-main)', borderColor: 'var(--border-dim)' }}>
                    <User size={16} /> Portfolio Directory
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <CmdBtn cmd="whoami" label="- Developer identity" />
                    <CmdBtn cmd="skills" label="- Technical arsenal" />
                    <CmdBtn cmd="projects" label="- Backend systems" />
                    <CmdBtn cmd="experience / exp" label="- Work history" />
                    <CmdBtn cmd="education / edu" label="- Academic degree" />
                    <CmdBtn cmd="setup / uses" label="- System architecture" />
                    <CmdBtn cmd="resume / cv" label="- Download PDF" />
                    <CmdBtn cmd="hire" label="- Freelance status" />
                </div>
            </div>

            <div className="mb-4">
                <strong className="border-b pb-1 flex items-center gap-2 uppercase tracking-wider text-sm mb-2.5"
                    style={{ color: 'var(--text-main)', borderColor: 'var(--border-dim)' }}>
                    <Mail size={16} /> Links &amp; Contact
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <CmdBtn cmd="contact / email" label="- Email & Phone" />
                    <CmdBtn cmd="github / gh" label="- GitHub profile" />
                    <CmdBtn cmd="linkedin / ln" label="- LinkedIn network" />
                </div>
            </div>

            <div className="border-t pt-3 mt-4 text-xs" style={{ borderColor: 'var(--border-dim)', color: 'var(--text-muted)' }}>
                <strong className="flex items-center gap-1.5 mb-2 uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>
                    <Keyboard size={14} /> Keyboard Navigation:
                </strong>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono">
                    <span><kbd className="px-1 border" style={{ backgroundColor: 'var(--border-dim)', color: 'var(--text-muted)', borderColor: 'var(--border-dim)' }}>Tab</kbd> / <kbd className="px-1 border" style={{ backgroundColor: 'var(--border-dim)', color: 'var(--text-muted)', borderColor: 'var(--border-dim)' }}>→</kbd> Autocomplete</span>
                    <span><kbd className="px-1 border" style={{ backgroundColor: 'var(--border-dim)', color: 'var(--text-muted)', borderColor: 'var(--border-dim)' }}>↑ / ↓</kbd> History</span>
                    <span><kbd className="px-1 border" style={{ backgroundColor: 'var(--border-dim)', color: 'var(--text-muted)', borderColor: 'var(--border-dim)' }}>Ctrl+L</kbd> Clear Screen</span>
                    <span><kbd className="px-1 border" style={{ backgroundColor: 'var(--border-dim)', color: 'var(--text-muted)', borderColor: 'var(--border-dim)' }}>Ctrl+C</kbd> Cancel Line</span>
                </div>
            </div>

        </div>
    )
}

export default Help