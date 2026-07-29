export default function CommandBar({ onCommand }) {
  // Explicitly curate the quick actions so the UI doesn't get cluttered.
  // Visitors can still type the other commands manually in the terminal.
  const quickActions = ['whoami', 'projects', 'experience', 'setup', 'resume', 'contact'];

  return (
    <div className="flex flex-row md:flex-col gap-3 w-full md:w-48 flex-wrap">
      {quickActions.map((cmd) => {
        // Highlight specific call-to-action buttons by inverting their colors
        const isPrimaryAction = cmd === 'resume' || cmd === 'contact';

        return (
          <button
            key={cmd}
            onClick={() => onCommand(cmd)}
            className={`
              flex-1 md:w-full border-2 border-black font-bold uppercase py-2 px-3 text-sm md:text-base 
              shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 
              hover:shadow-[2px_2px_0px_#000] active:translate-x-1 active:translate-y-1 
              active:shadow-none transition-all duration-100 whitespace-nowrap
              ${isPrimaryAction ? 'bg-black text-white' : 'bg-white text-black'}
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