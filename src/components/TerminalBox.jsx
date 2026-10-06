import { useState, useEffect, useRef } from 'react'

export default function TerminalBox({
  history,
  input,
  hint,
  hintOffset,
  onInputChange,
  onKeyDown,
  inputRef,
  mirrorRef,
  focusInput,
  onClear,
  theme = 'default'
}) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [history])

  return (
    <div
      data-theme={theme}
      className={`w-full ${isMaximized ? 'max-w-7xl h-[85dvh]' : 'max-w-5xl h-[62dvh] md:h-[min(780px,calc(100vh-5rem))]'} text-white border-2 md:border-4 flex flex-col cursor-text relative pt-0 overflow-hidden transition-all duration-300 glow-ring`}
      onClick={focusInput}
      style={{
        backgroundColor: 'var(--bg-main, #000000)',
        color: 'var(--text-main, #ffffff)',
        borderColor: 'var(--border-color, #ffffff)',
        boxShadow: `6px 6px 0px var(--shadow-color, #ccc)`
      }}
    >
      <div 
        className="w-full h-9 md:h-12 border-b-2 md:border-b-4 flex items-center px-2 md:px-4 justify-between select-none shrink-0"
        style={{ 
          backgroundColor: 'var(--badge-bg, #ffffff)', 
          color: 'var(--badge-text, #000000)',
          borderColor: 'var(--border-color, #ffffff)' 
        }}
      >
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <span className="size-2 md:size-2.5 shrink-0 rounded-full animate-pulse inline-block" style={{ backgroundColor: 'var(--badge-text, #000000)' }}></span>
          <span className="min-w-0 truncate font-extrabold text-[10px] md:text-sm tracking-widest uppercase font-mono">
            bash — madhav@portfolio:~ [{theme}]
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-wider mr-2 hidden sm:inline opacity-80">
            {currentTime}
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            className="w-4 h-4 md:w-5 md:h-5 border md:border-2 hover:opacity-80 transition-opacity flex items-center justify-center text-[9px] md:text-xs font-bold leading-none cursor-pointer"
            style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)', borderColor: 'var(--badge-text)' }}
            title={isMinimized ? "Expand Terminal" : "Minimize Terminal"}
          >
            _
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
            className="w-4 h-4 md:w-5 md:h-5 border md:border-2 hover:opacity-80 transition-opacity flex items-center justify-center text-[9px] md:text-xs font-bold leading-none cursor-pointer"
            style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)', borderColor: 'var(--badge-text)' }}
            title={isMaximized ? "Restore Size" : "Maximize Terminal"}
          >
            □
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); if (onClear) onClear(); }}
            className="w-4 h-4 md:w-5 md:h-5 border md:border-2 hover:opacity-80 transition-opacity flex items-center justify-center text-[9px] md:text-xs font-bold leading-none cursor-pointer"
            style={{ backgroundColor: 'var(--badge-text)', color: 'var(--badge-bg)', borderColor: 'var(--badge-text)' }}
            title="Clear Terminal Output"
          >
            ×
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div 
          ref={containerRef}
          className="grow min-h-0 min-w-0 overflow-y-auto overflow-x-hidden p-3 md:p-7 pr-1 md:pr-2 flex flex-col gap-3 md:gap-4 font-mono text-xs sm:text-sm md:text-base custom-scrollbar"
        >
          {history.map((entry) => (
            <div
              key={entry.id}
              className={`wrap-break-word whitespace-pre-wrap ${entry.type === 'input' ? 'mt-2 opacity-90' : 'ml-2 sm:ml-4'}`}
            >
              {entry.type === 'input' && <span className="font-bold mr-2" style={{ color: 'var(--text-main)' }}>λ</span>}
              {entry.type === 'input' ? entry.content : <div className="output-reveal">{entry.content}</div>}
            </div>
          ))}

          <div className="flex items-center relative mt-2 w-full">
            <span className="font-bold mr-2 animate-pulse" style={{ color: 'var(--text-main)' }}>λ</span>

            <div className="relative grow flex items-center">
              <span
                ref={mirrorRef}
                className="absolute invisible whitespace-pre text-lg pointer-events-none font-mono"
              >
                {input}
              </span>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                className="bg-transparent border-none outline-none text-lg w-full z-10 font-mono"
                style={{ color: 'var(--text-main, #ffffff)', caretColor: 'transparent' }}
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />

              <span
                aria-hidden="true"
                className="cursor-block absolute pointer-events-none z-20 top-1/2 -translate-y-1/2"
                style={{ left: hintOffset, color: 'var(--text-accent)' }}
              />

              {hint && (
                <span
                  className="absolute text-lg whitespace-pre pointer-events-none font-mono opacity-50"
                  style={{ left: `calc(${hintOffset}px + 12px)`, color: 'var(--text-muted)' }}
                >
                  {hint}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {isMinimized && (
        <div className="p-4 text-center font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          Terminal session minimized. Click <button onClick={() => setIsMinimized(false)} className="underline font-bold" style={{ color: 'var(--text-main)' }}>Expand (_)</button> to restore.
        </div>
      )}
    </div>
  );
}
