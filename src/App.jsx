import { useState, useEffect, useRef } from 'react';
import { COMMAND_LIST, ALIASES, WELCOME_MESSAGE, COMMANDS } from './config/commands';
import CommandBar from './components/CommandBar';
import TerminalBox from './components/TerminalBox';

export default function App() {
  // State
  const [history, setHistory] = useState([{ id: 0, type: 'output', content: WELCOME_MESSAGE }]);
  const [input, setInput] = useState('');
  const [hint, setHint] = useState('');
  const [hintOffset, setHintOffset] = useState(0);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  // Refs for DOM manipulation
  const inputRef = useRef(null);
  const mirrorRef = useRef(null);
  const terminalEndRef = useRef(null);

  // --- NEW: Auto-focus on initial load ---
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // --- NEW: Global key capture for seamless keyboard-driven UX ---
  useEffect(() => {
    const handleGlobalTyping = (e) => {
      // If user types a normal character and isn't focused on the input, focus it instantly
      if (
        !e.ctrlKey && 
        !e.metaKey && 
        e.key.length === 1 && 
        document.activeElement !== inputRef.current
      ) {
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleGlobalTyping);
    return () => window.removeEventListener('keydown', handleGlobalTyping);
  }, []);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Calculate autocomplete hint text and offset dynamically
  useEffect(() => {
    if (!input) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHint('');
      return;
    }
    const match = COMMAND_LIST.find(c => c.startsWith(input.toLowerCase()));
    if (match) {
      setHint(match.slice(input.length));
      if (mirrorRef.current) {
        setHintOffset(mirrorRef.current.offsetWidth);
      }
    } else {
      setHint('');
    }
  }, [input]);

  // Core execution logic
  const processCommand = (rawCmd) => {
    const cmdStr = rawCmd.trim().toLowerCase();
    if (!cmdStr) return;

    // Track command history for up/down arrows
    const newCmdHistory = [...cmdHistory, cmdStr];
    setCmdHistory(newCmdHistory);
    setHistoryIdx(newCmdHistory.length);

    // Resolve aliases (e.g. 'gh' -> 'github')
    const resolvedCmd = ALIASES[cmdStr] || cmdStr;

    if (resolvedCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    // Generate output
    let response;
    if (typeof COMMANDS[resolvedCmd] === 'function') {
      response = COMMANDS[resolvedCmd]();
    } else if (COMMANDS[resolvedCmd]) {
      response = COMMANDS[resolvedCmd];
    } else {
      const closestMatch = COMMAND_LIST.find(c => c.startsWith(resolvedCmd));
      response = closestMatch 
        ? <div>Did you mean <strong>{closestMatch}</strong>?</div> 
        : <div className="text-red-400">Command not found: {cmdStr}</div>;
    }

    // Append to UI
    setHistory(prev => [
      ...prev,
      { id: Date.now(), type: 'input', content: rawCmd },
      { id: Date.now() + 1, type: 'output', content: response }
    ]);
    setInput('');
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(input);
    } else if (e.key === 'Tab' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (hint) setInput(input + hint);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx < cmdHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      } else {
        setHistoryIdx(cmdHistory.length);
        setInput('');
      }
    }
  };

  return (
    <div className="max-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6 gap-8 font-mono">
      <TerminalBox 
        history={history}
        input={input}
        hint={hint}
        hintOffset={hintOffset}
        onInputChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        mirrorRef={mirrorRef}
        terminalEndRef={terminalEndRef}
        focusInput={() => inputRef.current?.focus()}
      />
      <CommandBar onCommand={processCommand} />
    </div>
  );
}