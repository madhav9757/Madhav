import 'react'
import { Terminal, User, Mail } from 'lucide-react' 

const Help = () => {
    return (
        <div className="leading-relaxed mt-2 mb-2">
            <strong className="text-lg text-white flex items-center gap-2">
                <Terminal size={18} />
                System Commands
            </strong>
            <span className="inline-block w-44 font-bold text-white">help / h</span> <span className="text-gray-400">- Display this command directory</span><br />
            <span className="inline-block w-44 font-bold text-white">clear / cls</span> <span className="text-gray-400">- Clear the terminal output</span><br /><br />

            <strong className="text-lg text-white flex items-center gap-2">
                <User size={18} />
                Professional
            </strong>
            <span className="inline-block w-44 font-bold text-white">whoami</span> <span className="text-gray-400">- Display my identity and current focus</span><br />
            <span className="inline-block w-44 font-bold text-white">skills</span> <span className="text-gray-400">- View my technical arsenal (Go, Node.js)</span><br />
            <span className="inline-block w-44 font-bold text-white">experience / exp</span> <span className="text-gray-400">- Review my professional work history</span><br />
            <span className="inline-block w-44 font-bold text-white">projects</span> <span className="text-gray-400">- Explore my engineered backend systems</span><br />
            <span className="inline-block w-44 font-bold text-white">education / edu</span> <span className="text-gray-400">- View my academic background (SPPU)</span><br />
            <span className="inline-block w-44 font-bold text-white">setup / uses</span> <span className="text-gray-400">- Read about this portfolio's architecture</span><br />
            <span className="inline-block w-44 font-bold text-white">resume / cv</span> <span className="text-gray-400">- Download my latest PDF resume</span><br /><br />

            <strong className="text-lg text-white flex items-center gap-2">
                <Mail size={18} />
                Contact & Links
            </strong>
            <span className="inline-block w-44 font-bold text-white">contact / email</span> <span className="text-gray-400">- Get my email and location details</span><br />
            <span className="inline-block w-44 font-bold text-white">hire</span> <span className="text-gray-400">- Check my availability for freelance projects</span><br />
            <span className="inline-block w-44 font-bold text-white">github / gh</span> <span className="text-gray-400">- Open my GitHub profile</span><br />
            <span className="inline-block w-44 font-bold text-white">linkedin / ln</span> <span className="text-gray-400">- Open my LinkedIn profile</span><br />
        </div>
    )
}

export default Help