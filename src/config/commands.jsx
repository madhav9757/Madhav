import 'react';

// Import modular components
import Welcome from './commands/Welcome';
import Help from './commands/Help';
import Whoami from './commands/Whoami';
import Skills from './commands/Skills';
import Projects from './commands/Projects';
import Experience from './commands/Experience';
import Education from './commands/Education';
import Setup from './commands/Setup';
import Contact from './commands/Contact';

export const COMMAND_LIST = [
    'help', 'whoami', 'skills', 'projects', 'experience', 'education',
    'setup', 'hire', 'contact', 'resume', 'clear', 'github', 'linkedin',
    'theme', 'history', 'date', 'time', 'echo', 'banner'
];

export const ALIASES = {
    h: 'help',
    cls: 'clear',
    exp: 'experience',
    edu: 'education',
    uses: 'setup',
    cv: 'resume',
    email: 'contact',
    gh: 'github',
    ln: 'linkedin',
    t: 'theme',
    hist: 'history'
};

export const THEMES = ['default', 'monochrome', 'matrix', 'amber', 'nord', 'cyberpunk'];

export const WELCOME_MESSAGE = <Welcome />;

export const getCommandResponse = (cmdStr, context = {}) => {
    const parts = cmdStr.trim().split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    const resolvedCmd = ALIASES[mainCmd] || mainCmd;

    const { onSelectCommand, theme, setTheme, cmdHistory = [] } = context;

    if (resolvedCmd === 'help') {
        return <Help onSelectCommand={onSelectCommand} />;
    }

    if (resolvedCmd === 'whoami') return <Whoami />;
    if (resolvedCmd === 'skills') return <Skills />;
    if (resolvedCmd === 'projects') return <Projects />;
    if (resolvedCmd === 'experience') return <Experience />;
    if (resolvedCmd === 'education') return <Education />;
    if (resolvedCmd === 'setup') return <Setup />;
    if (resolvedCmd === 'contact') return <Contact />;
    if (resolvedCmd === 'welcome' || resolvedCmd === 'banner') return <Welcome />;

    if (resolvedCmd === 'theme') {
        const targetTheme = args[0]?.toLowerCase();
        if (!targetTheme) {
            return (
                <div className="mt-2 mb-2 font-mono text-sm">
                    <span className="text-white font-bold">Current Theme:</span> <span className="bg-white text-black px-1.5 py-0.5 font-bold uppercase">{theme || 'default'}</span><br />
                    <span className="text-gray-400 mt-2 block">Available Themes:</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        {THEMES.map(t => (
                            <button 
                                key={t} 
                                onClick={() => setTheme && setTheme(t)}
                                className={`px-2 py-0.5 border text-xs cursor-pointer ${theme === t ? 'bg-white text-black font-bold border-white' : 'border-gray-600 text-gray-300 hover:border-white'}`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 mt-2 block">Usage: <code className="text-white">theme [name]</code> (e.g. <code className="text-white">theme matrix</code>)</span>
                </div>
            );
        }
        if (THEMES.includes(targetTheme)) {
            if (setTheme) setTheme(targetTheme);
            return <div className="text-green-400 font-mono mt-1 mb-1">✓ Terminal theme switched to <strong className="uppercase bg-white text-black px-1">{targetTheme}</strong></div>;
        } else {
            return <div className="text-red-400 font-mono mt-1 mb-1">Unknown theme "{targetTheme}". Options: {THEMES.join(', ')}</div>;
        }
    }

    if (resolvedCmd === 'date' || resolvedCmd === 'time') {
        const now = new Date();
        return (
            <div className="font-mono text-sm text-gray-300 mt-1 mb-1">
                <span className="text-white font-bold">System Date & Time:</span> {now.toString()}
            </div>
        );
    }

    if (resolvedCmd === 'history') {
        if (!cmdHistory || cmdHistory.length === 0) {
            return <div className="text-gray-400 font-mono mt-1 mb-1">No commands in history yet.</div>;
        }
        return (
            <div className="font-mono text-sm mt-1 mb-1">
                <div className="text-white font-bold mb-1 border-b border-gray-700 pb-0.5">Session Command History:</div>
                <div className="space-y-0.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {cmdHistory.map((c, i) => (
                        <div key={i} className="text-gray-300 flex items-center gap-3">
                            <span className="text-gray-500 text-xs w-6 text-right font-mono">{i + 1}</span>
                            <span className="text-white font-semibold">{c}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (resolvedCmd === 'echo') {
        return <div className="font-mono text-gray-300 mt-1 mb-1">{args.join(' ')}</div>;
    }

    if (resolvedCmd === 'hire') {
        return (
            <div className="mt-2 mb-2 font-mono">
                <strong className="text-white text-lg">💼 Available for Freelance & Systems Engineering Work</strong><br /><br />
                <div className="text-gray-300">
                    I take on robust backend architecture, independent identity systems, custom developer tooling, and high-performance web systems.<br />
                    Type <button onClick={() => onSelectCommand && onSelectCommand('contact')} className="bg-white text-black px-1.5 py-0.5 font-bold hover:bg-gray-300 transition-colors cursor-pointer">contact</button> to get in touch directly.
                </div>
            </div>
        );
    }

    if (resolvedCmd === 'resume') {
        window.open("/MADHAV SEMWAL - Resume.pdf", "_blank");
        return <div className="text-gray-300 font-mono mt-1 mb-1">Opening PDF resume in a new browser tab...</div>;
    }

    if (resolvedCmd === 'github') {
        window.open("https://github.com/madhav9757", "_blank");
        return <div className="text-gray-300 font-mono mt-1 mb-1">Opening GitHub/madhav9757...</div>;
    }

    if (resolvedCmd === 'linkedin') {
        window.open("https://linkedin.com/in/madhav-semwal-b40272377/", "_blank");
        return <div className="text-gray-300 font-mono mt-1 mb-1">Opening LinkedIn profile...</div>;
    }

    if (resolvedCmd === 'sudo') {
        return <div className="text-red-500 font-bold font-mono mt-2 mb-2">madhav is not in the sudoers file. This incident will be reported to the sysadmin.</div>;
    }

    const closestMatch = COMMAND_LIST.find(c => c.startsWith(resolvedCmd));
    return closestMatch 
        ? <div className="font-mono mt-1 mb-1">Did you mean <button onClick={() => onSelectCommand && onSelectCommand(closestMatch)} className="underline text-white font-bold hover:bg-white hover:text-black px-1">{closestMatch}</button>?</div> 
        : <div className="text-red-400 font-mono mt-1 mb-1">Command not found: "{cmdStr}". Type <button onClick={() => onSelectCommand && onSelectCommand('help')} className="underline text-white">help</button> for available commands.</div>;
};

export const COMMANDS = {
    help: <Help />,
    whoami: <Whoami />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <Experience />,
    education: <Education />,
    setup: <Setup />,
    contact: <Contact />
};