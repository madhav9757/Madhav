import 'react'

const Skills = () => {
    return (
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
    )
}

export default Skills