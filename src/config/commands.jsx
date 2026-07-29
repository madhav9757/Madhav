import {
    Terminal,
    User,
    Mail,
    Briefcase,
    Phone,
    MapPin,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import {
    RiTwitterXFill,
} from "react-icons/ri";

export const COMMAND_LIST = ['help', 'whoami', 'projects', 'skills', 'experience', 'education', 'setup', 'hire', 'contact', 'resume', 'clear', 'github', 'linkedin'];

export const ALIASES = { h: 'help', gh: 'github', ln: 'linkedin', cls: 'clear', exp: 'experience', edu: 'education', cv: 'resume', email: 'contact', uses: 'setup' };

export const WELCOME_MESSAGE = (
    <div className="mb-6 border-b-2 border-gray-800 pb-5 leading-relaxed">
        {/* Scalable ASCII Art Logo */}
        <pre className="text-white font-bold text-[10px] sm:text-xs md:text-sm mb-5 leading-tight cursor-default select-none">
            {`
███╗   ███╗ █████╗  ██████╗ ██╗  ██╗ █████╗  ██╗   ██╗
████╗ ████║ ██╔══██╗██╔══██╗██║  ██║ ██╔══██╗██║   ██║
██╔████╔██║ ███████║██║  ██║███████║ ███████║██║   ██║
██║╚██╔╝██║ ██╔══██║██║  ██║██╔══██║ ██╔══██║╚██╗ ██╔╝
██║ ╚═╝ ██║ ██║  ██║██████╔╝██║  ██║ ██║  ██║ ╚████╔╝ 
╚═╝     ╚═╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═══╝  
      `}
        </pre>

        <div className="text-gray-300">
            <span className="bg-white text-black font-bold px-2 py-0.5 text-xs uppercase tracking-widest mr-2 cursor-default">
                System Online
            </span>
            Session started.<br /><br />

            No fluff. Just shipping scalable backends, clean architectures, and raw developer tooling.<br />
            Currently <span className="text-white font-bold underline decoration-wavy underline-offset-4 decoration-gray-500">locked in</span> on Go, Node.js, and building independent identity systems.<br /><br />

            Type <strong className="text-black bg-white px-1.5 py-0.5 cursor-default hover:bg-gray-300 transition-colors">help</strong> to see what's cooking.<br />
            Hit <strong className="text-black bg-white px-1.5 py-0.5 mt-1 inline-block cursor-default hover:bg-gray-300 transition-colors">projects</strong> to see the receipts.
        </div>
    </div>
);

export const COMMANDS = {
    help: (
        <div className="leading-relaxed mt-2 mb-2">
            <strong className="text-lg text-white flex items-center gap-2">
                <Terminal size={18} />
                System Commands
            </strong>
            <span className="inline-block w-44 font-bold text-white">help / h</span> <span className="text-gray-400">- Display this command directory</span><br />
            <span className="inline-block w-44 font-bold text-white">clear / cls</span> <span className="text-gray-400">- Clear the terminal output</span><br /><br />

            <strong className="text-lg text-white flex items-center gap-2">
                <User size={18} />
                Professional
            </strong>
            <span className="inline-block w-44 font-bold text-white">whoami</span> <span className="text-gray-400">- Display my identity and current focus</span><br />
            <span className="inline-block w-44 font-bold text-white">skills</span> <span className="text-gray-400">- View my technical arsenal (Go, Node.js)</span><br />
            <span className="inline-block w-44 font-bold text-white">experience / exp</span> <span className="text-gray-400">- Review my professional work history</span><br />
            <span className="inline-block w-44 font-bold text-white">projects</span> <span className="text-gray-400">- Explore my engineered backend systems</span><br />
            <span className="inline-block w-44 font-bold text-white">education / edu</span> <span className="text-gray-400">- View my academic background (SPPU)</span><br />
            <span className="inline-block w-44 font-bold text-white">setup / uses</span> <span className="text-gray-400">- Read about this portfolio's architecture</span><br />
            <span className="inline-block w-44 font-bold text-white">resume / cv</span> <span className="text-gray-400">- Download my latest PDF resume</span><br /><br />

            <strong className="text-lg text-white flex items-center gap-2">
                <Mail size={18} />
                Contact & Links
            </strong>
            <span className="inline-block w-44 font-bold text-white">contact / email</span> <span className="text-gray-400">- Get my email and location details</span><br />
            <span className="inline-block w-44 font-bold text-white">hire</span> <span className="text-gray-400">- Check my availability for freelance projects</span><br />
            <span className="inline-block w-44 font-bold text-white">github / gh</span> <span className="text-gray-400">- Open my GitHub profile</span><br />
            <span className="inline-block w-44 font-bold text-white">linkedin / ln</span> <span className="text-gray-400">- Open my LinkedIn profile</span><br />
        </div>
    ),

    whoami: (
        <div className="mt-2 mb-2">
            <div className="mb-3">
                <span className="bg-white text-black font-bold px-2 py-1 text-lg uppercase tracking-widest">
                    Madhav Semwal
                </span>
            </div>

            <div className="font-mono text-gray-300 space-y-1">
                <div>&gt; Backend Engineer</div>
                <div>&gt; Go Developer</div>
                <div>&gt; Systems Programming Enthusiast</div>
                <div>&gt; Computer Engineering Student @ SPPU</div>
            </div>

            <div className="mt-4 border-l-2 border-gray-600 pl-4 text-gray-400 leading-relaxed max-w-2xl">
                I build backend systems, developer tools, authentication platforms,
                and networking applications with a strong focus on performance,
                scalability, and clean architecture. I'm currently building my own
                Git-compatible version control system in Go while exploring distributed
                systems, low-level software design, and open-source development.
            </div>

            <div className="mt-4 text-sm text-gray-500 font-mono">
                Focus: Backend • Systems • Networking • Go • AI • Open Source
            </div>
        </div>
    ),

    experience: (
        <div>
            <strong>Work Experience:</strong><br /><br />
            <strong>Freelance Full-Stack Developer</strong> (2023 - Present)<br />
            • Engineered scalable e-commerce platforms and custom web solutions for retail businesses.<br />
            • Designed API gateways, optimized database queries, and implemented secure payment integrations.<br />
            • Built bespoke content management dashboards using Next.js and Tailwind CSS.<br /><br />

            <strong>Open-Source Developer</strong> @ Independent (2023 - Present)<br />
            • Engineered AuthSphere, a custom OAuth 2.0 multi-tenant authentication engine built with Node.js and Go.<br />
            • Architected Syncra, an end-to-end encrypted zero-knowledge messaging platform utilizing Redis Pub/Sub clusters.<br />
        </div>
    ),

    education: (
        <div>
            <strong>Academic Background:</strong><br /><br />
            <strong>Savitribai Phule Pune University (SPPU)</strong><br />
            B.E. in Computer Science & Engineering (Expected 2027)<br />
            • Coursework: Data Structures & Algorithms, System Architecture, Web Technologies.<br />
        </div>
    ),

    setup: (
        <div className="flex flex-col gap-4 mt-2 mb-2 w-full max-w-2xl">
            <div className="font-bold text-lg border-b-2 border-white pb-1 inline-block w-fit uppercase tracking-widest">
                System Architecture
            </div>
            <div className="text-gray-300 leading-relaxed">
                This terminal is not a pre-built template or library. It is a custom web application engineered from scratch to reflect my design philosophy: high-density, structurally clean interfaces.
            </div>

            <div className="flex flex-col gap-4 mt-2">
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors cursor-default">
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Frontend Engine</span>
                    <div className="text-gray-300 mt-1">Built entirely on React and bundled with Vite for lightning-fast HMR and heavily optimized, minimal production builds.</div>
                </div>

                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors cursor-default">
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Styling & UI</span>
                    <div className="text-gray-300 mt-1">Utility-first styling via Tailwind CSS, enforcing a strict brutalist monochrome aesthetic. The design prioritizes stark contrasts, sharp 0px borders, and raw typography using Fira Code.</div>
                </div>

                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors cursor-default">
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Terminal Mechanics</span>
                    <div className="text-gray-300 mt-1">Engineered with zero external CLI dependencies. Features custom global key trapping, React state-driven history logging, and a hidden DOM mirroring technique to calculate exact pixel widths for the Neovim-style ghost text autocomplete.</div>
                </div>
            </div>
        </div>
    ),

    projects: (
        <div className="flex flex-col gap-6 mt-2 mb-4 w-full max-w-4xl">
            <div className="font-bold text-lg border-b-2 border-white pb-1 inline-block w-fit uppercase tracking-widest">
                Featured Engineering
            </div>

            <div className="flex flex-col gap-7 mt-2">

                {/* MyGit */}
                <div className="border-l-4 border-white pl-4 hover:border-gray-300 transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">
                            MyGit
                        </span>
                        <span className="text-gray-500 text-sm font-mono">
                            [Ongoing]
                        </span>
                    </div>

                    <div className="text-gray-300 mt-2 leading-relaxed">
                        Building a Git-compatible Version Control System completely from
                        scratch in Go. Implementing Git internals including object storage,
                        blobs, trees, commits, SHA-1 hashing, references, staging area,
                        branching, merging and repository management while understanding how
                        Git works under the hood.
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">Go</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">Git Internals</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">SHA-1</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">CLI</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">Version Control</span>
                    </div>
                </div>

                {/* Syncra */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">
                            Syncra
                        </span>
                        <span className="text-gray-500 text-sm font-mono">
                            [2025]
                        </span>
                    </div>

                    <div className="text-gray-300 mt-2 leading-relaxed">
                        Real-time peer-to-peer messaging platform built in Go featuring
                        end-to-end encryption, secure public/private key authentication,
                        WebSockets, PostgreSQL, and automatic peer discovery. Designed with a
                        scalable backend architecture for low-latency communication.
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">Go</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">WebSockets</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">PostgreSQL</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">Cryptography</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">Networking</span>
                    </div>
                </div>

                {/* AuthSphere */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">
                            AuthSphere
                        </span>
                        <span className="text-gray-500 text-sm font-mono">
                            [2025]
                        </span>
                    </div>

                    <div className="text-gray-300 mt-2 leading-relaxed">
                        Enterprise-grade authentication platform implementing OAuth 2.0,
                        PKCE, JWT authentication, refresh token rotation, and developer SDKs.
                        Supports Google, GitHub and Discord authentication with a
                        multi-tenant architecture.
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">Node.js</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">OAuth 2.0</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">JWT</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">TypeScript</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">MongoDB</span>
                    </div>
                </div>

                {/* AICOMM */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">
                            AICOMM
                        </span>
                        <span className="text-gray-500 text-sm font-mono">
                            [2025]
                        </span>
                    </div>

                    <div className="text-gray-300 mt-2 leading-relaxed">
                        AI-powered Git commit assistant that analyzes staged and unstaged diffs
                        to generate Conventional Commit messages using LLMs. Includes dry-run
                        mode, configurable providers, and OpenRouter integration for multiple
                        language models.
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">Go</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">LLMs</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">Git CLI</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">OpenRouter</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">Conventional Commits</span>
                    </div>
                </div>

                {/* RepoSensei */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">
                            RepoSensei
                        </span>
                    </div>

                    <div className="text-gray-300 mt-2 leading-relaxed">
                        AI-powered GitHub repository analyzer that generates documentation,
                        project summaries, README files, and repository insights using LLMs.
                        Built with GitHub OAuth, vector search, and automated code analysis.
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">Next.js</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">GenAI</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">GitHub API</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">OAuth</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-2 py-1">LangChain</span>
                    </div>
                </div>

            </div>
        </div>
    ),

    skills: (
        <div className="flex flex-col gap-4 mt-2 mb-2 w-full max-w-4xl">
            <div className="font-bold text-lg border-b-2 border-white pb-1 inline-block w-fit uppercase tracking-widest">
                Technical Arsenal
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mt-2">

                {/* Programming Languages */}
                <div>
                    <div className="text-gray-500 mb-2 text-sm uppercase tracking-widest">
                        === Programming Languages ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Go</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">TypeScript</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">JavaScript (ES6+)</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">C++</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Python</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">SQL</span>
                    </div>
                </div>

                {/* Backend */}
                <div>
                    <div className="text-gray-500 mb-2 text-sm uppercase tracking-widest">
                        === Backend & APIs ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Node.js</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Express.js</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">REST APIs</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">JWT</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">OAuth 2.0</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Auth0</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">WebSockets</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">SSH</span>
                    </div>
                </div>

                {/* Databases */}
                <div>
                    <div className="text-gray-500 mb-2 text-sm uppercase tracking-widest">
                        === Databases & Storage ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">MongoDB</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">PostgreSQL</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Redis</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Neon</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Mongoose</span>
                    </div>
                </div>

                {/* Frontend */}
                <div>
                    <div className="text-gray-500 mb-2 text-sm uppercase tracking-widest">
                        === Frontend ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">React</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Next.js</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Tailwind CSS</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">shadcn/ui</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Redux Toolkit</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Framer Motion</span>
                    </div>
                </div>

                {/* DevOps & Tools */}
                <div>
                    <div className="text-gray-500 mb-2 text-sm uppercase tracking-widest">
                        === DevOps & Tools ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Git</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Docker</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">Linux</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">GitHub Actions</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Vercel</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Render</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Railway</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Neovim</span>
                    </div>
                </div>

                {/* AI & Systems */}
                <div>
                    <div className="text-gray-500 mb-2 text-sm uppercase tracking-widest">
                        === AI, Systems & Networking ===
                    </div>
                    <div className="flex flex-wrap gap-2 cursor-default">
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">GenAI</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">LLMs</span>
                        <span className="bg-white text-black font-bold px-2 py-1 text-sm">LangChain</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">RAG</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">MCP</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Git Internals</span>
                        <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm hover:bg-white hover:text-black transition-colors">Distributed Systems</span>
                    </div>
                </div>

            </div>
        </div>
    ),

    hire: (
        <div>
            <div className="flex items-center gap-2 font-bold">
                <Briefcase size={18} />
                Available for Freelance Projects
            </div>
            I take on robust backend architecture and full-stack development work:<br />
            • Secure authentication systems & API design<br />
            • High-performance Go microservices<br />
            • Brutalist, minimalist Next.js frontends<br /><br />
            Type <strong>contact</strong> to get in touch.
        </div>
    ),

    contact: (
        <div className="mt-2 max-w-2xl">
            <strong className="text-lg text-white flex items-center gap-2">
                <Mail size={18} />
                Contact & Links
            </strong>

            <div className="mt-4 font-mono text-gray-300 space-y-2">

                <div>
                    <span className="text-white font-bold">❯ <Mail size={16} className="inline mr-2" />
                        Email</span>
                    <span className="text-gray-500"> ........ </span>
                    <a
                        href="mailto:madhavsemwal9@gmail.com"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        madhavsemwal9@gmail.com
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <Phone size={16} className="inline mr-2" />
                        Phone</span>
                    <span className="text-gray-500"> ........ </span>
                    +91 8806799065
                </div>

                <div>
                    <span className="text-white font-bold">❯ <FaGithub size={16} className="inline mr-2" />
                        GitHub</span>
                    <span className="text-gray-500"> ....... </span>
                    <a
                        href="https://github.com/madhav9757"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        github.com/madhav9757
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <FaLinkedin size={16} className="inline mr-2" />
                        LinkedIn</span>
                    <span className="text-gray-500"> ..... </span>
                    <a
                        href="https://linkedin.com/in/madhav-semwal-b40272377/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        linkedin.com/in/madhav-semwal-b40272377/
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <RiTwitterXFill size={16} className="inline mr-2" />
                        (Twitter)</span>
                    <span className="text-gray-500"> .... </span>
                    <a
                        href="https://x.com/semwal_mad92552"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        @semwal_mad92552
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <MapPin size={16} className="inline mr-2" />
                        Location</span>
                    <span className="text-gray-500"> .... </span>
                    Pune, Maharashtra, India
                </div>

            </div>

            <div className="mt-5 border-l-2 border-gray-600 pl-4 text-gray-400 italic">
                Always open to collaborating on backend systems, Go projects,
                developer tools, and open-source contributions.
            </div>
        </div>
    ),

    resume: () => {
        window.open("/MADHAV SEMWAL - Resume.pdf", "_blank");
        return <div>Opening resume in a new tab...</div>;
    },

    github: () => {
        window.open("https://github.com/madhav9757", "_blank");
        return <div>Opening GitHub...</div>;
    },

    linkedin: () => {
        window.open("https://www.linkedin.com/in/madhav-semwal-b40272377/", "_blank");
        return <div>Opening LinkedIn...</div>;
    },

    sudo: <div className="text-red-500">madhav is not in the sudoers file. This incident will be reported.</div>
};