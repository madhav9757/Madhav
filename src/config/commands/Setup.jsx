import 'react'

const Setup = () => {
    return (
        <div className="flex flex-col gap-4 mt-2 mb-2 w-full max-w-2xl">
            <div className="font-bold text-lg border-b-2 border-white pb-1 inline-block w-fit uppercase tracking-widest">
                System Architecture
            </div>
            <div className="text-gray-300 leading-relaxed">
                This terminal is not a pre-built template or library. It is a custom web application engineered from scratch to reflect my design philosophy: high-density, structurally clean interfaces.
            </div>

            <div className="flex flex-col gap-4 mt-2">
                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors cursor-default">
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Frontend Engine</span>
                    <div className="text-gray-300 mt-1">Built entirely on React and bundled with Vite for lightning-fast HMR and heavily optimized, minimal production builds.</div>
                </div>

                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors cursor-default">
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Styling & UI</span>
                    <div className="text-gray-300 mt-1">Utility-first styling via Tailwind CSS, enforcing a strict brutalist monochrome aesthetic. The design prioritizes stark contrasts, sharp 0px borders, and raw typography using Fira Code.</div>
                </div>

                <div className="border-l-4 border-gray-700 pl-4 hover:border-white transition-colors cursor-default">
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Terminal Mechanics</span>
                    <div className="text-gray-300 mt-1">Engineered with zero external CLI dependencies. Features custom global key trapping, React state-driven history logging, and a hidden DOM mirroring technique to calculate exact pixel widths for the Neovim-style ghost text autocomplete.</div>
                </div>
            </div>
        </div>
    )
}

export default Setup