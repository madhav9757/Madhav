export default function CommandBar({ onCommand, onToggleTheme, currentTheme = 'default', theme = 'default' }) {
  const quickActions = ['whoami', 'skills', 'projects', 'experience', 'setup', 'resume', 'contact'];

  return (
    <div
      data-theme={theme}
      className="flex flex-row md:flex-col gap-3 w-full md:w-52 flex-wrap shrink-0 font-mono"
    >
      {quickActions.map((cmd) => {
        const isPrimaryAction = cmd === 'resume' || cmd === 'contact';

        return (
          <button
            key={cmd}
            onClick={() => onCommand(cmd)}
            className="flex-1 md:w-full border-4 font-bold uppercase py-2.5 md:py-3 px-3 text-xs md:text-sm hover:translate-x-1 hover:translate-y-1 active:translate-x-1.5 active:translate-y-1.5 transition-all duration-100 whitespace-nowrap tracking-wider cursor-pointer"
            style={isPrimaryAction
              ? {
                  backgroundColor: 'var(--text-main)',
                  color: 'var(--bg-main)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '4px 4px 0px var(--shadow-color)',
                }
              : {
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '4px 4px 0px var(--shadow-color)',
                }
            }
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = isPrimaryAction ? 'var(--bg-main)' : 'var(--text-main)';
              e.currentTarget.style.color = isPrimaryAction ? 'var(--text-main)' : 'var(--bg-main)';
              e.currentTarget.style.boxShadow = '2px 2px 0px var(--shadow-color)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = isPrimaryAction ? 'var(--text-main)' : 'var(--bg-main)';
              e.currentTarget.style.color = isPrimaryAction ? 'var(--bg-main)' : 'var(--text-main)';
              e.currentTarget.style.boxShadow = '4px 4px 0px var(--shadow-color)';
            }}
            aria-label={`Run ${cmd} command`}
          >
            {cmd}
          </button>
        );
      })}

      <button
        onClick={onToggleTheme}
        className="flex-1 md:w-full border-4 font-bold uppercase py-2.5 md:py-3 px-3 text-xs md:text-sm hover:translate-x-1 hover:translate-y-1 active:translate-x-1.5 active:translate-y-1.5 transition-all duration-100 whitespace-nowrap tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
        style={{
          backgroundColor: 'var(--border-dim)',
          color: 'var(--text-main)',
          borderColor: 'var(--border-color)',
          boxShadow: '4px 4px 0px var(--shadow-color)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'var(--text-main)';
          e.currentTarget.style.color = 'var(--bg-main)';
          e.currentTarget.style.boxShadow = '2px 2px 0px var(--shadow-color)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'var(--border-dim)';
          e.currentTarget.style.color = 'var(--text-main)';
          e.currentTarget.style.boxShadow = '4px 4px 0px var(--shadow-color)';
        }}
        title="Cycle Terminal Color Theme"
      >
        <span>🎨 Theme:</span>
        <span className="underline uppercase text-xs">{currentTheme}</span>
      </button>
    </div>
  );
}