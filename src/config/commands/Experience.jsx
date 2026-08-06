import 'react'
import { Briefcase } from 'lucide-react'

const Experience = () => {
    return (
        <div className="flex flex-col gap-6 mt-2 mb-4 w-full max-w-4xl">
            <div className="font-bold text-lg border-b-2 border-white pb-1 inline-block w-fit uppercase tracking-widest flex items-center gap-2">
                <Briefcase size={20} />
                Work History & Contributions
            </div>

            <div className="flex flex-col gap-6">

                <div className="border-l-4 border-white pl-4 hover:border-gray-300 transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                        <div className="flex flex-col">
                            <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">
                                Freelance Full-Stack Developer
                            </span>
                            <span className="text-gray-400 text-xs font-mono">
                                Independent Client Projects
                            </span>
                        </div>
                        <span className="text-xs bg-white text-black font-bold px-2 py-0.5 w-fit uppercase tracking-wider">
                            2023 — Present
                        </span>
                    </div>

                    <ul className="text-gray-300 mt-3 space-y-2 font-mono text-sm leading-relaxed">
                        <li className="flex items-start gap-2">
                            <span className="text-white font-bold select-none">❯</span>
                            <span>Engineered scalable e-commerce platforms and custom web solutions for retail & business clients.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-white font-bold select-none">❯</span>
                            <span>Designed RESTful API gateways, optimized PostgreSQL/MongoDB database queries, and implemented payment integrations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-white font-bold select-none">❯</span>
                            <span>Built bespoke content management dashboards utilizing Next.js, React, and Tailwind CSS.</span>
                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-3.5">
                        <span className="text-xs bg-white text-black font-bold px-2 py-0.5">Node.js</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-0.5">Next.js</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-0.5">PostgreSQL</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-0.5">REST APIs</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-0.5">Tailwind CSS</span>
                    </div>
                </div>

                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors group cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                        <div className="flex flex-col">
                            <span className="font-bold text-white text-lg group-hover:underline underline-offset-4 flex items-center gap-2">
                                Open-Source Developer & Systems Builder
                            </span>
                            <span className="text-gray-400 text-xs font-mono">
                                Community & Self-Directed Software Engineering
                            </span>
                        </div>
                        <span className="text-xs bg-white text-black font-bold px-2 py-0.5 w-fit uppercase tracking-wider">
                            2023 — Present
                        </span>
                    </div>

                    <ul className="text-gray-300 mt-3 space-y-2 font-mono text-sm leading-relaxed">
                        <li className="flex items-start gap-2">
                            <span className="text-white font-bold select-none">❯</span>
                            <span>Engineered <strong className="text-white">AuthSphere</strong>, a multi-tenant OAuth 2.0 authentication engine and Identity-as-a-Service infrastructure.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-white font-bold select-none">❯</span>
                            <span>Architected <strong className="text-white">Syncra</strong>, a zero-knowledge peer-to-peer communication engine built with Go and WebSockets.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-white font-bold select-none">❯</span>
                            <span>Developing <strong className="text-white">MyGit</strong>, a Git-compatible version control system written entirely from scratch in Go.</span>
                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-3.5">
                        <span className="text-xs bg-white text-black font-bold px-2 py-0.5">Go</span>
                        <span className="text-xs bg-white text-black font-bold px-2 py-0.5">OAuth 2.0</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-0.5">WebSockets</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-0.5">Redis</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-0.5">Git Internals</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience