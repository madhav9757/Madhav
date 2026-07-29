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
      className="w-full max-w-5xl h-[75vh] md:h-195 bg-black text-white border-4 border-black shadow-[8px_8px_0px_#ccc] md:shadow-[12px_12px_0px_#ccc] flex flex-col cursor-text relative pt-0 overflow-hidden transition-all duration-300"
      onClick={focusInput}
    >
      <div className="w-full h-8 bg-white border-b-4 border-black flex items-center px-4 justify-between select-none shrink-0">
        <div className="flex items-center gap-2">
          {/* Status dot */}
          <span className="w-2 h-2 bg-black rounded-none animate-pulse inline-block"></span>
          <span className="text-black font-extrabold text-xs md:text-sm tracking-widest uppercase">
            bash — madhav@portfolio:~
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="w-4 h-4 border-2 border-black bg-white hover:bg-black transition-colors flex items-center justify-center text-[10px] font-bold text-black hover:text-white leading-none">
            -
          </button>
          <button className="w-4 h-4 border-2 border-black bg-white hover:bg-black transition-colors flex items-center justify-center text-[10px] font-bold text-black hover:text-white leading-none">
            □
          </button>
          <button className="w-4 h-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center text-[10px] font-bold leading-none">
            ×
          </button>
        </div>
      </div>
      <div className="grow overflow-y-auto p-4 md:p-6 pr-2 custom-scrollbar flex flex-col gap-3">

        {history.map((entry) => (
          <div
            key={entry.id}
            // Prevents text overflow on small screens
            className={`wrap-break-word whitespace-pre-wrap ${entry.type === 'input' ? 'mt-2 text-gray-300' : 'ml-4'}`}
          >
            {entry.type === 'input' && <span className="font-bold mr-2 text-white">λ</span>}
            {entry.content}
          </div>
        ))}

        <div className="flex items-center relative mt-2 w-full">
          {/* Subtle pulse draws attention to the prompt */}
          <span className="font-bold mr-2 text-white animate-pulse">λ</span>

          <div className="relative grow flex items-center">

            <span
              ref={mirrorRef}
              className="absolute invisible whitespace-pre text-lg pointer-events-none"
            >
              {input}
            </span>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={onInputChange}
              onKeyDown={onKeyDown}
              className="bg-transparent border-none outline-none text-white text-lg w-full z-10 caret-white"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />

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

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}