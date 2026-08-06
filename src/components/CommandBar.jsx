export default function CommandBar({ onCommand, onToggleTheme, currentTheme = 'default' }) {
  const quickActions = ['whoami', 'skills', 'projects', 'experience', 'setup', 'resume', 'contact'];

  return (
    <div className="flex flex-row md:flex-col gap-3 w-full md:w-52 flex-wrap shrink-0 font-mono">
      {quickActions.map((cmd) => {
        const isPrimaryAction = cmd === 'resume' || cmd === 'contact';

        return (
          <button
            key={cmd}
            onClick={() => onCommand(cmd)}
            className={`
              flex-1 md:w-full border-4 border-black font-bold uppercase py-2.5 md:py-3 px-3 text-xs md:text-sm 
              shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] 
              hover:translate-x-1 hover:translate-y-1 
              hover:shadow-[2px_2px_0px_#000] 
              active:translate-x-1.5 active:translate-y-1.5 
              active:shadow-none transition-all duration-100 whitespace-nowrap tracking-wider cursor-pointer
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

      <button
        onClick={onToggleTheme}
        className="flex-1 md:w-full border-4 border-black font-bold uppercase py-2.5 md:py-3 px-3 text-xs md:text-sm bg-gray-900 text-white hover:bg-white hover:text-black shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-100 whitespace-nowrap tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
        title="Cycle Terminal Color Theme"
      >
        <span>🎨 Theme:</span>
        <span className="underline uppercase text-xs">{currentTheme}</span>
      </button>
    </div>
  );
}