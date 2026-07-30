import 'react'

const Whoami = () => {
    return (
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
    )
}

export default Whoami