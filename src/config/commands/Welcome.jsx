import 'react'

const Welcome = () => {
    return (
        <div className="mb-6 border-b-2 border-gray-800 pb-5 leading-relaxed">
            {/* Scalable ASCII Art Logo */}
            <pre className="text-white font-bold text-[10px] sm:text-xs md:text-sm mb-5 leading-tight cursor-default select-none">
                {`
███╗   ███╗  █████╗  ██████╗  ██╗  ██╗  █████╗  ██╗   ██╗
████╗ ████║ ██╔══██╗ ██╔══██╗ ██║  ██║ ██╔══██╗ ██║   ██║
██╔████╔██║ ███████║ ██║  ██║ ███████║ ███████║ ██║   ██║
██║╚██╔╝██║ ██╔══██║ ██║  ██║ ██╔══██║ ██╔══██║ ╚██╗ ██╔╝
██║ ╚═╝ ██║ ██║  ██║ ██████╔╝ ██║  ██║ ██║  ██║  ╚████╔╝ 
╚═╝     ╚═╝ ╚═╝  ╚═╝ ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝   ╚═══╝
      `}
            </pre>

            <div className="text-gray-300">
                <span className="bg-white text-black font-bold px-2 py-0.5 text-xs uppercase tracking-widest mr-2 cursor-default">
                    System Online
                </span>
                Session started.<br /><br />

                No fluff. Just shipping scalable backends, clean architectures, and raw developer tooling.<br />
                Currently <span className="text-white font-bold underline decoration-wavy underline-offset-4 decoration-gray-500">locked in</span> on Go, Node.js, and building independent identity systems.<br /><br />

                Type <strong className="text-black bg-white px-1.5 py-0.5 cursor-default hover:bg-gray-300 transition-colors">help</strong> to see what's cooking.<br />
                Hit <strong className="text-black bg-white px-1.5 py-0.5 mt-1 inline-block cursor-default hover:bg-gray-300 transition-colors">projects</strong> to see the receipts.
            </div>
        </div>
    )
}

export default Welcome