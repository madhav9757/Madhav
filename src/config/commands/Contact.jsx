import { useState } from 'react'
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false)
    const [copiedPhone, setCopiedPhone] = useState(false)

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text)
        if (type === 'email') {
            setCopiedEmail(true)
            setTimeout(() => setCopiedEmail(false), 2000)
        } else if (type === 'phone') {
            setCopiedPhone(true)
            setTimeout(() => setCopiedPhone(false), 2000)
        }
    }

    return (
        <div className="mt-2 max-w-2xl">
            <strong className="text-lg flex items-center gap-2 border-b-2 pb-1 uppercase tracking-widest"
                style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
                <Mail size={18} />
                Contact &amp; Channels
            </strong>

            <div className="mt-4 font-mono space-y-3" style={{ color: 'var(--text-muted)' }}>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold min-w-28 flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                        ❯ <Mail size={16} /> Email
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--border-dim)' }}>......</span>
                    <a
                        href="mailto:madhavsemwal9@gmail.com"
                        className="underline decoration-2 px-1 transition-colors"
                        style={{ color: 'var(--text-main)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-main)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--text-main)'; }}
                    >
                        madhavsemwal9@gmail.com
                    </a>
                    <button
                        onClick={() => copyToClipboard('madhavsemwal9@gmail.com', 'email')}
                        className="ml-auto text-xs px-2 py-0.5 border transition-colors flex items-center gap-1"
                        style={{ backgroundColor: 'var(--border-dim)', color: 'var(--text-muted)', borderColor: 'var(--border-dim)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-main)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--border-dim)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                        title="Copy Email"
                    >
                        {copiedEmail ? (
                            <>
                                <Check size={12} style={{ color: 'var(--text-accent)' }} />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={12} />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold min-w-28 flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                        ❯ <Phone size={16} /> Phone
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--border-dim)' }}>......</span>
                    <span className="px-1" style={{ color: 'var(--text-main)' }}>+91 8806799065</span>
                    <button
                        onClick={() => copyToClipboard('+918806799065', 'phone')}
                        className="ml-auto text-xs px-2 py-0.5 border transition-colors flex items-center gap-1"
                        style={{ backgroundColor: 'var(--border-dim)', color: 'var(--text-muted)', borderColor: 'var(--border-dim)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-main)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--border-dim)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                        title="Copy Phone Number"
                    >
                        {copiedPhone ? (
                            <>
                                <Check size={12} style={{ color: 'var(--text-accent)' }} />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={12} />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold min-w-28 flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                        ❯ <FaGithub size={16} /> GitHub
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--border-dim)' }}>.....</span>
                    <a
                        href="https://github.com/madhav9757"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 px-1 transition-colors"
                        style={{ color: 'var(--text-main)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-main)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--text-main)'; }}
                    >
                        github.com/madhav9757
                    </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold min-w-28 flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                        ❯ <FaLinkedin size={16} /> LinkedIn
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--border-dim)' }}>...</span>
                    <a
                        href="https://linkedin.com/in/madhav-semwal-b40272377/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 px-1 transition-colors"
                        style={{ color: 'var(--text-main)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-main)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--text-main)'; }}
                    >
                        linkedin.com/in/madhav-semwal-b40272377
                    </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold min-w-28 flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                        ❯ <RiTwitterXFill size={16} /> Twitter
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--border-dim)' }}>...</span>
                    <a
                        href="https://x.com/semwal_mad92552"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 px-1 transition-colors"
                        style={{ color: 'var(--text-main)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-main)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--text-main)'; }}
                    >
                        @semwal_mad92552
                    </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold min-w-28 flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                        ❯ <MapPin size={16} /> Location
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--border-dim)' }}>...</span>
                    <span style={{ color: 'var(--text-muted)' }}>Pune, Maharashtra, India</span>
                </div>

            </div>

            <div className="mt-5 border-l-2 pl-4 italic text-sm" style={{ borderColor: 'var(--border-dim)', color: 'var(--text-muted)' }}>
                Always open to collaborating on backend systems, Go projects,
                developer tooling, and high-performance open-source infrastructure.
            </div>
        </div>
    )
}

export default Contact