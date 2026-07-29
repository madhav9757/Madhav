export default function CommandBar({ onCommand }) {
  // Curated quick actions scaled to match the expanded terminal
  const quickActions = ['whoami', 'skills', 'projects', 'experience', 'setup', 'resume', 'contact'];

  return (
    <div className="flex flex-row md:flex-col gap-3.5 w-full md:w-52 flex-wrap shrink-0">
      {quickActions.map((cmd) => {
        // Highlight CTA buttons by default
        const isPrimaryAction = cmd === 'resume' || cmd === 'contact';

        return (
          <button
            key={cmd}
            onClick={() => onCommand(cmd)}
            className={`
              flex-1 md:w-full border-4 border-black font-bold uppercase py-2.5 md:py-3 px-4 text-sm md:text-base 
              shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] 
              hover:translate-x-1 hover:translate-y-1 
              hover:shadow-[2px_2px_0px_#000] 
              active:translate-x-1.5 active:translate-y-1.5 
              active:shadow-none transition-all duration-100 whitespace-nowrap tracking-wider
              ${isPrimaryAction 
                ? 'bg-black text-white hover:bg-white hover:text-black' 
                : 'bg-white text-black hover:bg-black hover:text-white'}
            `}
            aria-label={`Run ${cmd} command`}
          >
            {cmd}
          </button>
        );
      })}
    </div>
  );
}