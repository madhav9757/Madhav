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
      className={`w-full ${isMaximized ? 'max-w-7xl h-[88vh]' : 'max-w-5xl h-[75vh] md:h-195'} bg-black text-white border-4 border-black shadow-[8px_8px_0px_#ccc] md:shadow-[12px_12px_0px_#ccc] flex flex-col cursor-text relative pt-0 overflow-hidden transition-all duration-300`}
      onClick={focusInput}
      style={{
        backgroundColor: 'var(--bg-main, #000000)',
        color: 'var(--text-main, #ffffff)',
        borderColor: 'var(--border-color, #ffffff)',
        boxShadow: `12px 12px 0px var(--shadow-color, #ccc)`
      }}
    >
      <div 
        className="w-full h-9 border-b-4 flex items-center px-4 justify-between select-none shrink-0"
        style={{ 
          backgroundColor: 'var(--badge-bg, #ffffff)', 
          color: 'var(--badge-text, #000000)',
          borderColor: 'var(--border-color, #ffffff)' 
        }}
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: 'var(--badge-text, #000000)' }}></span>
          <span className="font-extrabold text-xs md:text-sm tracking-widest uppercase font-mono truncate">
            bash — madhav@portfolio:~ [{theme}]
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-wider mr-2 hidden sm:inline opacity-80">
            {currentTime}
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            className="w-5 h-5 border-2 border-black hover:opacity-80 transition-opacity flex items-center justify-center text-xs font-bold leading-none cursor-pointer"
            style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}
            title={isMinimized ? "Expand Terminal" : "Minimize Terminal"}
          >
            _
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
            className="w-5 h-5 border-2 border-black hover:opacity-80 transition-opacity flex items-center justify-center text-xs font-bold leading-none cursor-pointer"
            style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}
            title={isMaximized ? "Restore Size" : "Maximize Terminal"}
          >
            □
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); if (onClear) onClear(); }}
            className="w-5 h-5 border-2 border-black hover:opacity-80 transition-opacity flex items-center justify-center text-xs font-bold leading-none cursor-pointer"
            style={{ backgroundColor: 'var(--badge-text)', color: 'var(--badge-bg)' }}
            title="Clear Terminal Output"
          >
            ×
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div 
          ref={containerRef}
          className="grow overflow-y-auto p-4 md:p-6 pr-2 custom-scrollbar flex flex-col gap-3 font-mono"
        >
          {history.map((entry) => (
            <div
              key={entry.id}
              className={`wrap-break-word whitespace-pre-wrap ${entry.type === 'input' ? 'mt-2 opacity-90' : 'ml-2 sm:ml-4'}`}
            >
              {entry.type === 'input' && <span className="font-bold mr-2 text-white">λ</span>}
              {entry.content}
            </div>
          ))}

          <div className="flex items-center relative mt-2 w-full">
            <span className="font-bold mr-2 text-white animate-pulse">λ</span>

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
                className="bg-transparent border-none outline-none text-lg w-full z-10 font-mono caret-white"
                style={{ color: 'var(--text-main, #ffffff)' }}
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />

              {hint && (
                <span
                  className="absolute text-gray-500 text-lg whitespace-pre pointer-events-none font-mono opacity-60"
                  style={{ left: hintOffset }}
                >
                  {hint}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {isMinimized && (
        <div className="p-4 text-center text-gray-400 font-mono text-sm">
          Terminal session minimized. Click <button onClick={() => setIsMinimized(false)} className="underline text-white font-bold">Expand (_)</button> to restore.
        </div>
      )}
    </div>
  );
}