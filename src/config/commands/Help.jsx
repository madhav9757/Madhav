import 'react'
import { Terminal, User, Mail, Keyboard } from 'lucide-react' 

const Help = ({ onSelectCommand }) => {
    const handleCommandClick = (cmd) => {
        if (onSelectCommand) {
            onSelectCommand(cmd)
        }
    }

    return (
        <div className="leading-relaxed mt-2 mb-3 max-w-3xl font-mono">
            
            <div className="mb-4">
                <strong className="text-white border-b border-gray-700 pb-1 flex items-center gap-2 uppercase tracking-wider text-sm mb-2.5">
                    <Terminal size={16} /> System Operations
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('help')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">help / h</button>
                        <span className="text-gray-400 text-xs">- Show directory</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('clear')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">clear / cls</button>
                        <span className="text-gray-400 text-xs">- Clear output</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('theme')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">theme [name]</button>
                        <span className="text-gray-400 text-xs">- Switch color scheme</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('history')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">history</button>
                        <span className="text-gray-400 text-xs">- View command log</span>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <strong className="text-white border-b border-gray-700 pb-1 flex items-center gap-2 uppercase tracking-wider text-sm mb-2.5">
                    <User size={16} /> Portfolio Directory
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('whoami')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">whoami</button>
                        <span className="text-gray-400 text-xs">- Developer identity</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('skills')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">skills</button>
                        <span className="text-gray-400 text-xs">- Technical arsenal</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('projects')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">projects</button>
                        <span className="text-gray-400 text-xs">- Backend systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('experience')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">experience / exp</button>
                        <span className="text-gray-400 text-xs">- Work history</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('education')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">education / edu</button>
                        <span className="text-gray-400 text-xs">- Academic degree</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('setup')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">setup / uses</button>
                        <span className="text-gray-400 text-xs">- System architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('resume')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">resume / cv</button>
                        <span className="text-gray-400 text-xs">- Download PDF</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('hire')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">hire</button>
                        <span className="text-gray-400 text-xs">- Freelance status</span>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <strong className="text-white border-b border-gray-700 pb-1 flex items-center gap-2 uppercase tracking-wider text-sm mb-2.5">
                    <Mail size={16} /> Links & Contact
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('contact')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">contact / email</button>
                        <span className="text-gray-400 text-xs">- Email & Phone</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('github')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">github / gh</button>
                        <span className="text-gray-400 text-xs">- GitHub profile</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleCommandClick('linkedin')} className="font-bold text-white hover:bg-white hover:text-black px-1.5 py-0.5 border border-gray-700 hover:border-white transition-colors cursor-pointer text-left font-mono">linkedin / ln</button>
                        <span className="text-gray-400 text-xs">- LinkedIn network</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-3 mt-4 text-xs text-gray-400">
                <strong className="text-white flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                    <Keyboard size={14} /> Keyboard Navigation:
                </strong>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono">
                    <span><kbd className="bg-gray-800 text-gray-200 px-1 border border-gray-600">Tab</kbd> / <kbd className="bg-gray-800 text-gray-200 px-1 border border-gray-600">→</kbd> Autocomplete</span>
                    <span><kbd className="bg-gray-800 text-gray-200 px-1 border border-gray-600">↑ / ↓</kbd> History</span>
                    <span><kbd className="bg-gray-800 text-gray-200 px-1 border border-gray-600">Ctrl+L</kbd> Clear Screen</span>
                    <span><kbd className="bg-gray-800 text-gray-200 px-1 border border-gray-600">Ctrl+C</kbd> Cancel Line</span>
                </div>
            </div>

        </div>
    )
}

export default Help