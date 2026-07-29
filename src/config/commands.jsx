// 1. Added new commands to the list
export const COMMAND_LIST = ['help', 'whoami', 'projects', 'skills', 'experience', 'education', 'setup', 'hire', 'contact', 'resume', 'clear', 'github', 'linkedin'];

// 2. Added new aliases (e.g., typing 'cv' triggers 'resume')
export const ALIASES = { h: 'help', gh: 'github', ln: 'linkedin', cls: 'clear', exp: 'experience', edu: 'education', cv: 'resume', email: 'contact', uses: 'setup' };

export const WELCOME_MESSAGE = (
  <div className="mb-4 border-b-2 border-gray-800 pb-4 leading-relaxed">
    <span className="font-bold">λ</span> whoami<br />
    <strong>Madhav Semwal</strong> — Full-Stack Software Engineer & Open-Source Developer.<br /><br />
    I build high-performance web systems and automated agent pipelines using <strong>Go, Node.js, and Next.js</strong>. 
    Currently engineering identity infrastructure and zero-knowledge communication platforms.<br /><br />
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
    <div>
      <strong>Featured Engineering:</strong><br />
      • <strong>AuthSphere</strong> — Open-source, multi-tenant OAuth 2.0 authentication engine (Node.js, Go, TS).<br />
      • <strong>Syncra</strong> — End-to-end encrypted zero-knowledge communication platform (Go, Redis Pub/Sub).<br />
      • <strong>NexChat</strong> — Real-time messaging app with concurrent CLI terminal client (Node.js, Socket.io, Go).<br />
      • <strong>Discussly</strong> — Minimalist open-source community forum platform (PostgreSQL).<br />
    </div>
  ),
  
  skills: (
    <div>
      <strong>Technical Arsenal:</strong><br />
      • <strong>Core:</strong> Go, C++, TypeScript, JavaScript<br />
      • <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Framer Motion, shadcn/ui<br />
      • <strong>Backend:</strong> Node.js, Express, REST APIs, OAuth 2.0<br />
      • <strong>Databases:</strong> PostgreSQL, Redis, Neon<br />
      • <strong>Environment:</strong> Linux, Neovim, Git, Docker<br />
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