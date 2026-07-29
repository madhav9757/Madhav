// 1. Added new commands to the list
export const COMMAND_LIST = ['help', 'whoami', 'projects', 'skills', 'experience', 'education', 'setup', 'hire', 'contact', 'resume', 'clear', 'github', 'linkedin'];

// 2. Added new aliases (e.g., typing 'cv' triggers 'resume')
export const ALIASES = { h: 'help', gh: 'github', ln: 'linkedin', cls: 'clear', exp: 'experience', edu: 'education', cv: 'resume', email: 'contact', uses: 'setup' };

export const WELCOME_MESSAGE = (
    <div className="mb-4 border-b-2 border-gray-800 pb-4 leading-relaxed">
        <span className="font-bold">λ</span> whoami<br />
        <strong>Madhav Semwal</strong> — Backend-focused Software Engineer & Developer Tooling Enthusiast.<br /><br />
        I build scalable web systems, secure authentication services, and automated developer tools using <strong>Go, Node.js, and Redis</strong>.
        Currently engineering identity infrastructure and LLM-powered CLI utilities.<br /><br />
        <strong>Available for freelance projects</strong> — type <strong>hire</strong> to work with me.<br /><br />
        Type <strong>help</strong> to explore. Try: <strong>projects</strong>, <strong>setup</strong>, <strong>experience</strong>.
    </div>
);

export const COMMANDS = {
    help: (
        <div>
            <strong>💻 System Commands:</strong><br />
            <strong>help / h</strong>        - Show available commands<br />
            <strong>clear / cls</strong>     - Clear the terminal<br /><br />

            <strong>👤 Professional:</strong><br />
            <strong>whoami</strong>          - Display my identity<br />
            <strong>skills</strong>          - Show my technical stack<br />
            <strong>experience / exp</strong> - Professional work history<br />
            <strong>projects</strong>        - List featured engineering work<br />
            <strong>education / edu</strong>  - Academic background<br />
            <strong>setup / uses</strong>     - My development environment (Neovim, etc.)<br />
            <strong>resume / cv</strong>       - Download my resume<br /><br />

            <strong>✉️ Contact & Links:</strong><br />
            <strong>contact / email</strong>  - Get in touch<br />
            <strong>hire</strong>           - Freelance availability<br />
            <strong>github / gh</strong>    - Open GitHub<br />
            <strong>linkedin / ln</strong>  - Open LinkedIn<br />
        </div>
    ),

    whoami: <div><strong>Madhav Semwal</strong> — Computer Engineering student at SPPU and freelance web developer building end-to-end architectures.</div>,

    // NEW: Experience Section
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

    // NEW: Education Section
    education: (
        <div>
            <strong>Academic Background:</strong><br /><br />
            <strong>Savitribai Phule Pune University (SPPU)</strong><br />
            B.E. in Computer Science & Engineering (Expected 2027)<br />
            • Coursework: Data Structures & Algorithms, System Architecture, Web Technologies.<br />
        </div>
    ),

    // NEW: Setup/Uses Section (Highly recommended for Neovim users)
    setup: (
        <div>
            <strong>Development Environment (/uses):</strong><br /><br />
            • <strong>Editor:</strong> Neovim (Custom LazyVim distribution) with Telescope and Tree-sitter.<br />
            • <strong>Terminal:</strong> Windows Terminal + tmux.<br />
            • <strong>OS:</strong> WSL2 on Windows.<br />
            • <strong>Theme:</strong> Brutalist Monochrome.<br />
            • <strong>Hardware:</strong> [Your Keyboard/Laptop Specs - optional but fun].<br />
        </div>
    ),

    projects: (
        <div className="flex flex-col gap-6 mt-2 mb-4 w-full max-w-3xl">
            <div className="font-bold text-lg border-b-2 border-white pb-1 inline-block w-fit uppercase tracking-widest">
                Featured Engineering
            </div>

            <div className="flex flex-col gap-6 mt-2">

                {/* AuthSphere */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">AuthSphere</span>
                        <span className="text-gray-500 text-sm font-mono">[Winter 2025]</span>
                    </div>
                    <div className="text-gray-300 mt-1 leading-relaxed">
                        Centralized multi-tenant authentication engine. Implements OAuth 2.0 with PKCE for secure login flows and provides a plug-and-play developer SDK.
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-1.5 py-0.5">Node.js</span>
                        <span className="text-xs bg-white text-black font-bold px-1.5 py-0.5">Go</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">OAuth 2.0</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">TypeScript</span>
                    </div>
                </div>

                {/* AICOMM */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">AICOMM</span>
                        <span className="text-gray-500 text-sm font-mono">[Summer 2025]</span>
                    </div>
                    <div className="text-gray-300 mt-1 leading-relaxed">
                        AI-powered CLI utility that parses Git diffs to generate context-aware Conventional Commit messages using LLMs and dry-run execution.
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-1.5 py-0.5">LLMs</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">CLI Architecture</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">Git Internals</span>
                    </div>
                </div>

                {/* Syncra */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">Syncra</span>
                    </div>
                    <div className="text-gray-300 mt-1 leading-relaxed">
                        End-to-end encrypted zero-knowledge communication platform structured around a stateless relay cluster and message buses.
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-white text-black font-bold px-1.5 py-0.5">Go</span>
                        <span className="text-xs bg-white text-black font-bold px-1.5 py-0.5">Redis Pub/Sub</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">Cryptography</span>
                    </div>
                </div>

                {/* NexChat & Discussly (Combined for compact layout) */}
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-bold text-white text-lg">NexChat & Discussly</span>
                    </div>
                    <div className="text-gray-300 mt-1 leading-relaxed">
                        Real-time messaging platform with concurrent Go CLI clients, alongside a minimalist open-source forum system backed by PostgreSQL.
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">Socket.io</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">PostgreSQL</span>
                        <span className="text-xs border border-gray-500 text-gray-400 px-1.5 py-0.5">WebSockets</span>
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
            <strong>💼 Available for Freelance Projects</strong><br /><br />
            I take on robust backend architecture and full-stack development work:<br />
            • Secure authentication systems & API design<br />
            • High-performance Go microservices<br />
            • Brutalist, minimalist Next.js frontends<br /><br />
            Type <strong>contact</strong> to get in touch.
        </div>
    ),

    // NEW: Dedicated Contact Section
    contact: (
        <div>
            <strong>Get in Touch:</strong><br />
            • <strong>Email:</strong> <a href="mailto:madhavsemwal9@gmail.com" className="underline decoration-2 hover:bg-white hover:text-black transition-colors">madhavsemwal9@gmail.com</a><br />
            • <strong>Phone:</strong> +91 8806799065<br />
            • <strong>Twitter/X:</strong> <a href="https://x.com/semwal_mad92552" target="_blank" className="underline decoration-2 hover:bg-white hover:text-black transition-colors">@semwal_mad92552</a><br />
            • <strong>Location:</strong> Pune, India<br />
        </div>
    ),

    // NEW: Resume Download Function
    resume: () => {
        // Make sure to put your actual PDF in the 'public' folder of your Vite project
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

    // NEW: Easter Egg
    sudo: <div className="text-red-500">madhav is not in the sudoers file. This incident will be reported.</div>
};