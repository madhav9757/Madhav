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
            <strong className="text-lg text-white flex items-center gap-2 border-b-2 border-white pb-1 inline-block uppercase tracking-widest">
                <Mail size={18} />
                Contact & Channels
            </strong>

            <div className="mt-4 font-mono text-gray-300 space-y-3">

                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-white font-bold min-w-28 flex items-center gap-1.5">
                        ❯ <Mail size={16} /> Email
                    </span>
                    <span className="text-gray-500 hidden sm:inline">......</span>
                    <a
                        href="mailto:madhavsemwal9@gmail.com"
                        className="underline decoration-2 text-white hover:bg-white hover:text-black transition-colors px-1"
                    >
                        madhavsemwal9@gmail.com
                    </a>
                    <button
                        onClick={() => copyToClipboard('madhavsemwal9@gmail.com', 'email')}
                        className="ml-auto text-xs bg-gray-800 hover:bg-white hover:text-black text-gray-300 px-2 py-0.5 border border-gray-600 transition-colors flex items-center gap-1"
                        title="Copy Email"
                    >
                        {copiedEmail ? (
                            <>
                                <Check size={12} className="text-green-400" />
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
                    <span className="text-white font-bold min-w-28 flex items-center gap-1.5">
                        ❯ <Phone size={16} /> Phone
                    </span>
                    <span className="text-gray-500 hidden sm:inline">......</span>
                    <span className="text-white px-1">+91 8806799065</span>
                    <button
                        onClick={() => copyToClipboard('+918806799065', 'phone')}
                        className="ml-auto text-xs bg-gray-800 hover:bg-white hover:text-black text-gray-300 px-2 py-0.5 border border-gray-600 transition-colors flex items-center gap-1"
                        title="Copy Phone Number"
                    >
                        {copiedPhone ? (
                            <>
                                <Check size={12} className="text-green-400" />
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
                    <span className="text-white font-bold min-w-28 flex items-center gap-1.5">
                        ❯ <FaGithub size={16} /> GitHub
                    </span>
                    <span className="text-gray-500 hidden sm:inline">.....</span>
                    <a
                        href="https://github.com/madhav9757"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 text-white hover:bg-white hover:text-black transition-colors px-1"
                    >
                        github.com/madhav9757
                    </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-white font-bold min-w-28 flex items-center gap-1.5">
                        ❯ <FaLinkedin size={16} /> LinkedIn
                    </span>
                    <span className="text-gray-500 hidden sm:inline">...</span>
                    <a
                        href="https://linkedin.com/in/madhav-semwal-b40272377/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 text-white hover:bg-white hover:text-black transition-colors px-1"
                    >
                        linkedin.com/in/madhav-semwal-b40272377
                    </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-white font-bold min-w-28 flex items-center gap-1.5">
                        ❯ <RiTwitterXFill size={16} /> Twitter
                    </span>
                    <span className="text-gray-500 hidden sm:inline">....</span>
                    <a
                        href="https://x.com/semwal_mad92552"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 text-white hover:bg-white hover:text-black transition-colors px-1"
                    >
                        @semwal_mad92552
                    </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-white font-bold min-w-28 flex items-center gap-1.5">
                        ❯ <MapPin size={16} /> Location
                    </span>
                    <span className="text-gray-500 hidden sm:inline">...</span>
                    <span className="text-gray-300">Pune, Maharashtra, India</span>
                </div>

            </div>

            <div className="mt-5 border-l-2 border-gray-600 pl-4 text-gray-400 italic text-sm">
                Always open to collaborating on backend systems, Go projects,
                developer tooling, and high-performance open-source infrastructure.
            </div>
        </div>
    )
}

export default Contact