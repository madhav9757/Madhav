import 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
    return (
        <div className="flex flex-col gap-5 mt-2 mb-3 w-full max-w-3xl">
            <div className="font-bold text-lg border-b-2 pb-1 w-fit uppercase tracking-widest flex items-center gap-2"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                <GraduationCap size={20} />
                Academic Background
            </div>

            <div className="border-l-4 pl-4 transition-colors group cursor-default"
                style={{ borderColor: 'var(--border-color)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-muted)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg group-hover:underline underline-offset-4"
                            style={{ color: 'var(--text-main)' }}>
                            Savitribai Phule Pune University (SPPU)
                        </span>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 w-fit uppercase tracking-wider"
                        style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                        2023 - 2027 (Expected)
                    </span>
                </div>

                <div className="mt-2 font-mono text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    <span className="font-semibold" style={{ color: 'var(--text-main)' }}>Degree:</span> Bachelor of Engineering (B.E.) in Computer Science &amp; Engineering
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    <Award size={14} style={{ color: 'var(--text-main)' }} />
                    <span>Focus: Systems Engineering, Data Structures, Backend Systems &amp; Networking</span>
                </div>

                <div className="mt-4">
                    <div className="text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5"
                        style={{ color: 'var(--text-muted)' }}>
                        <BookOpen size={14} /> Core Coursework:
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'Database Management Systems', 'Software Architecture'].map(course => (
                            <span key={course} className="text-xs border px-2 py-1"
                                style={{ borderColor: 'var(--border-dim)', color: 'var(--text-muted)' }}>
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education