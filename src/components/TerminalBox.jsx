export default function TerminalBox({ 
  history, 
  input, 
  hint, 
  hintOffset, 
  onInputChange, 
  onKeyDown, 
  inputRef, 
  mirrorRef, 
  terminalEndRef,
  focusInput
}) {
  return (
    <div 
      // Responsive height and shadow scaling
      className="w-full max-w-3xl h-[70vh] md:h-150 bg-black text-white border-4 border-black shadow-[8px_8px_0px_#ccc] md:shadow-[12px_12px_0px_#ccc] flex flex-col cursor-text relative pt-0 overflow-hidden transition-all duration-300"
      onClick={focusInput}
    >
      {/* Top Window Bar (Brutalist Terminal aesthetic) */}
      <div className="w-full h-8 bg-white border-b-4 border-black flex items-center px-4 justify-between select-none shrink-0">
        <span className="text-black font-bold text-xs md:text-sm tracking-widest uppercase">bash — madhav@portfolio:~</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-black"></div>
          <div className="w-3 h-3 bg-black"></div>
        </div>
      </div>

      {/* Main Terminal Area */}
      <div className="grow overflow-y-auto p-4 md:p-6 pr-2 custom-scrollbar flex flex-col gap-3">
        
        {/* Render History */}
        {history.map((entry) => (
          <div 
            key={entry.id} 
            // Prevents text overflow on small screens
            className={`break-words whitespace-pre-wrap ${entry.type === 'input' ? 'mt-2 text-gray-300' : 'ml-4'}`}
          >
            {entry.type === 'input' && <span className="font-bold mr-2 text-white">λ</span>}
            {entry.content}
          </div>
        ))}
        
        {/* Active Input Line */}
        <div className="flex items-center relative mt-2 w-full">
          {/* Subtle pulse draws attention to the prompt */}
          <span className="font-bold mr-2 text-white animate-pulse">λ</span>
          
          <div className="relative flex-grow flex items-center">
            
            {/* Hidden Mirror for Width Calculation */}
            <span 
              ref={mirrorRef} 
              className="absolute invisible whitespace-pre text-lg pointer-events-none"
            >
              {input}
            </span>
            
            {/* Actual Input */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={onInputChange}
              onKeyDown={onKeyDown}
              // Explicitly set caret-white for visibility
              className="bg-transparent border-none outline-none text-white text-lg w-full z-10 caret-white"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
            
            {/* Ghost Text Hint */}
            {hint && (
              <span 
                className="absolute text-gray-500 text-lg whitespace-pre pointer-events-none"
                style={{ left: hintOffset }}
              >
                {hint}
              </span>
            )}
          </div>
        </div>
        
        {/* Auto-scroll anchor */}
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}