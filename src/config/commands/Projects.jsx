import 'react'

const Projects = () => {
    return (
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
                        <span className="text-xs bg-white text-black font-bold px-2 py-1">JavaScript</span>
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
    )
}

export default Projects