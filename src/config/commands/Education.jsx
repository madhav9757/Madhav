import 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
    return (
        <div className="flex flex-col gap-5 mt-2 mb-3 w-full max-w-3xl">
            <div className="font-bold text-lg border-b-2 border-white pb-1 inline-block w-fit uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={20} />
                Academic Background
            </div>

            <div className="border-l-4 border-white pl-4 hover:border-gray-300 transition-colors group cursor-default">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-lg group-hover:underline underline-offset-4">
                            Savitribai Phule Pune University (SPPU)
                        </span>
                    </div>
                    <span className="text-xs bg-white text-black font-bold px-2 py-0.5 w-fit uppercase tracking-wider">
                        2023 - 2027 (Expected)
                    </span>
                </div>

                <div className="text-gray-300 mt-2 font-mono text-sm leading-relaxed">
                    <span className="text-white font-semibold">Degree:</span> Bachelor of Engineering (B.E.) in Computer Science & Engineering
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Award size={14} className="text-white" />
                    <span>Focus: Systems Engineering, Data Structures, Backend Systems & Networking</span>
                </div>

                <div className="mt-4">
                    <div className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <BookOpen size={14} /> Core Coursework:
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-1">Data Structures & Algorithms</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-1">Operating Systems</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-1">Computer Networks</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-1">Database Management Systems</span>
                        <span className="text-xs border border-gray-500 text-gray-300 px-2 py-1">Software Architecture</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education