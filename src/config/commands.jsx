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

// Define available commands for the autocomplete hint system
export const COMMAND_LIST = [
    'help', 'whoami', 'skills', 'projects', 'experience', 'education',
    'setup', 'hire', 'contact', 'resume', 'clear', 'github', 'linkedin'
];

// Map shortcut aliases to full commands
export const ALIASES = {
    h: 'help',
    cls: 'clear',
    exp: 'experience',
    edu: 'education',
    uses: 'setup',
    cv: 'resume',
    email: 'contact',
    gh: 'github',
    ln: 'linkedin'
};

// The initial greeting when the terminal boots up
export const WELCOME_MESSAGE = <Welcome />;

// The central command router
export const COMMANDS = {
    help: <Help />,
    whoami: <Whoami />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <Experience />,
    education: <Education />,
    setup: <Setup />,
    contact: <Contact />,

    // Inline text response for hiring
    hire: (
        <div className="mt-2 mb-2">
            <strong className="text-white text-lg">💼 Available for Freelance Projects</strong><br /><br />
            <div className="text-gray-300">
                I take on robust backend architecture, independent identity systems, and custom software engineering work.<br />
                Type <strong className="bg-white text-black px-1.5 py-0.5">contact</strong> to get in touch.
            </div>
        </div>
    ),

    // Action commands
    resume: () => {
        window.open("/Madhav-Semwal-Resume.pdf", "_blank");
        return <div className="text-gray-300">Opening resume in a new tab...</div>;
    },

    github: () => {
        window.open("https://github.com/madhav9757", "_blank");
        return <div className="text-gray-300">Opening GitHub/madhav9757...</div>;
    },

    linkedin: () => {
        window.open("https://linkedin.com/in/madhavsemwal", "_blank");
        return <div className="text-gray-300">Opening LinkedIn...</div>;
    },

    // Easter eggs
    sudo: <div className="text-red-500 font-bold mt-2 mb-2">madhav is not in the sudoers file. This incident will be reported.</div>
};