import 'react'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    const projectData = [
        {
            title: "MyGit",
            status: "Ongoing",
            statusType: "active",
            github: "https://github.com/madhav9757",
            description: "Building a Git-compatible Version Control System completely from scratch in Go. Implementing Git internals including object storage, blobs, trees, commits, SHA-1 hashing, references, staging area, branching, merging and repository management.",
            tags: ["Go", "Git Internals", "SHA-1", "CLI", "Version Control"]
        },
        {
            title: "Syncra",
            status: "2025",
            statusType: "completed",
            github: "https://github.com/madhav9757",
            description: "Real-time peer-to-peer messaging platform built in Go featuring end-to-end encryption, secure public/private key authentication, WebSockets, PostgreSQL, and automatic peer discovery. Designed for low-latency concurrent communication.",
            tags: ["Go", "WebSockets", "PostgreSQL", "Cryptography", "Networking"]
        },
        {
            title: "AuthSphere",
            status: "2025",
            statusType: "completed",
            github: "https://github.com/madhav9757",
            description: "Enterprise-grade authentication platform implementing OAuth 2.0, PKCE, JWT authentication, refresh token rotation, and developer SDKs. Multi-tenant architecture supporting OAuth providers like Google, GitHub, and Discord.",
            tags: ["Node.js", "OAuth 2.0", "JWT", "TypeScript", "MongoDB"]
        },
        {
            title: "AICOMM",
            status: "2025",
            statusType: "completed",
            github: "https://github.com/madhav9757",
            description: "AI-powered Git commit assistant that analyzes staged and unstaged diffs to generate Conventional Commit messages using LLMs. Includes dry-run mode, configurable providers, and OpenRouter integration.",
            tags: ["JavaScript", "LLMs", "Git CLI", "OpenRouter", "Conventional Commits"]
        },
        {
            title: "RepoSensei",
            status: "2025",
            statusType: "completed",
            github: "https://github.com/madhav9757",
            description: "AI-powered GitHub repository analyzer that generates documentation, project summaries, README files, and repository insights using LLMs. Built with GitHub OAuth, vector search, and automated code analysis.",
            tags: ["Next.js", "GenAI", "GitHub API", "OAuth", "LangChain"]
        }
    ]

    return (
        <div className="flex flex-col gap-6 mt-2 mb-4 w-full max-w-4xl">
            <div className="font-bold text-lg border-b-2 pb-1 w-fit uppercase tracking-widest flex items-center gap-2"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                <FolderGit2 size={20} />
                Featured Systems &amp; Projects
            </div>

            <div className="flex flex-col gap-6 mt-1">
                {projectData.map((project, idx) => (
                    <div
                        key={idx}
                        className="border-l-4 pl-4 transition-colors group cursor-default"
                        style={{ borderColor: idx === 0 ? 'var(--border-color)' : 'var(--border-dim)' }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = idx === 0 ? 'var(--border-color)' : 'var(--border-dim)'}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-lg group-hover:underline underline-offset-4 flex items-center gap-1.5"
                                    style={{ color: 'var(--text-main)' }}>
                                    {project.title}
                                </span>
                                <span className="text-xs px-2 py-0.5 font-mono uppercase tracking-wider"
                                    style={project.statusType === 'active'
                                        ? { backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)', fontWeight: 'bold' }
                                        : { color: 'var(--text-muted)', border: '1px solid var(--border-dim)' }
                                    }>
                                    [{project.status}]
                                </span>
                            </div>

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-1 hover:underline underline-offset-2 transition-colors font-mono"
                                    style={{ color: 'var(--text-muted)' }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-main)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    <FaGithub size={13} />
                                    <span>view source</span>
                                    <ExternalLink size={11} />
                                </a>
                            )}
                        </div>

                        <div className="mt-2 text-sm font-mono leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                            {project.description}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3 font-mono">
                            {project.tags.map((tag, tIdx) => (
                                <span
                                    key={tIdx}
                                    className="text-xs px-2 py-0.5"
                                    style={tIdx < 2
                                        ? { backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)', fontWeight: 'bold' }
                                        : { border: '1px solid var(--border-dim)', color: 'var(--text-muted)' }
                                    }
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects