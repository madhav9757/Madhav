import 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

function Contact() {
    return (

        <div className="mt-2 max-w-2xl">
            <strong className="text-lg text-white flex items-center gap-2">
                <Mail size={18} />
                Contact & Links
            </strong >

            <div className="mt-4 font-mono text-gray-300 space-y-2">

                <div>
                    <span className="text-white font-bold">❯ <Mail size={16} className="inline mr-2" />
                        Email</span>
                    <span className="text-gray-500"> ........ </span>
                    <a
                        href="mailto:madhavsemwal9@gmail.com"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        madhavsemwal9@gmail.com
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <Phone size={16} className="inline mr-2" />
                        Phone</span>
                    <span className="text-gray-500"> ........ </span>
                    +91 8806799065
                </div>

                <div>
                    <span className="text-white font-bold">❯ <FaGithub size={16} className="inline mr-2" />
                        GitHub</span>
                    <span className="text-gray-500"> ....... </span>
                    <a
                        href="https://github.com/madhav9757"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        github.com/madhav9757
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <FaLinkedin size={16} className="inline mr-2" />
                        LinkedIn</span>
                    <span className="text-gray-500"> ..... </span>
                    <a
                        href="https://linkedin.com/in/madhav-semwal-b40272377/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        linkedin.com/in/madhav-semwal-b40272377/
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <RiTwitterXFill size={16} className="inline mr-2" />
                        (Twitter)</span>
                    <span className="text-gray-500"> .... </span>
                    <a
                        href="https://x.com/semwal_mad92552"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 hover:bg-white hover:text-black transition-colors"
                    >
                        @semwal_mad92552
                    </a>
                </div>

                <div>
                    <span className="text-white font-bold">❯ <MapPin size={16} className="inline mr-2" />
                        Location</span>
                    <span className="text-gray-500"> .... </span>
                    Pune, Maharashtra, India
                </div>

            </div>

            <div className="mt-5 border-l-2 border-gray-600 pl-4 text-gray-400 italic">
                Always open to collaborating on backend systems, Go projects,
                developer tools, and open-source contributions.
            </div>
        </div >

    )
}

export default Contact