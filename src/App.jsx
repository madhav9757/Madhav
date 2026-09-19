import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { COMMAND_LIST, WELCOME_MESSAGE, THEMES, getCommandResponse } from './config/commands';
import CommandBar from './components/CommandBar';
import TerminalBox from './components/TerminalBox';

export default function App() {
  // Theme state with local storage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('madhav_terminal_theme') || 'default';
  });

  useEffect(() => {
    localStorage.setItem('madhav_terminal_theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    const nextIdx = (THEMES.indexOf(theme) + 1) % THEMES.length;
    setTheme(THEMES[nextIdx]);
  };

  // State
  const [history, setHistory] = useState([{ id: 0, type: 'output', content: WELCOME_MESSAGE }]);
  const [input, setInput] = useState('');
  const [hintOffset, setHintOffset] = useState(0);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  // Refs for DOM manipulation
  const inputRef = useRef(null);
  const mirrorRef = useRef(null);

  // Derive autocomplete hint during render (No state-in-effect warning!)
  const hintMatch = input ? COMMAND_LIST.find(c => c.startsWith(input.toLowerCase())) : null;
  const hint = (input && hintMatch) ? hintMatch.slice(input.length) : '';

  // Calculate hint offset measure synchronously after layout updates
  useLayoutEffect(() => {
    if (input && mirrorRef.current) {
      setHintOffset(mirrorRef.current.offsetWidth);
    } else {
      setHintOffset(0);
    }
  }, [input]);

  // Auto-focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Global key capture for seamless typing & standard bash shortcuts
  useEffect(() => {
    const handleGlobalTyping = (e) => {
      // Ctrl+L shortcut for Clear Screen
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        setHistory([]);
        setInput('');
        return;
      }

      // Seamless typing focus capture
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

  // Core execution logic
  const processCommand = (rawCmd) => {
    const cmdStr = rawCmd.trim();
    if (!cmdStr) return;

    const lowerCmd = cmdStr.toLowerCase();

    // Track command history for up/down arrows
    const newCmdHistory = [...cmdHistory, cmdStr];
    setCmdHistory(newCmdHistory);
    setHistoryIdx(newCmdHistory.length);

    if (lowerCmd === 'clear' || lowerCmd === 'cls') {
      setHistory([]);
      setInput('');
      return;
    }

    // Generate response using context router
    const response = getCommandResponse(cmdStr, {
      onSelectCommand: processCommand,
      theme,
      setTheme,
      cmdHistory: newCmdHistory
    });

    // Append to UI history
    setHistory(prev => [
      ...prev,
      { id: Date.now(), type: 'input', content: rawCmd },
      { id: Date.now() + 1, type: 'output', content: response }
    ]);
    setInput('');
  };

  // Keyboard navigation & Shortcuts
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(input);
    } else if (e.key === 'Tab' || e.key === 'ArrowRight') {
      if (hint) {
        e.preventDefault();
        setInput(input + hint);
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
      // Ctrl+C: Cancel line buffer
      e.preventDefault();
      setHistory(prev => [
        ...prev,
        { id: Date.now(), type: 'input', content: `${input}^C` }
      ]);
      setInput('');
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      } else if (historyIdx === -1 && cmdHistory.length > 0) {
        const nextIdx = cmdHistory.length - 1;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx >= 0 && historyIdx < cmdHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      } else {
        setHistoryIdx(-1);
        setInput('');
      }
    }
  };

  return (
    <div 
      data-theme={theme}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-6 gap-6 md:gap-8 font-mono transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <TerminalBox 
        history={history}
        input={input}
        hint={hint}
        hintOffset={hintOffset}
        onInputChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        mirrorRef={mirrorRef}
        focusInput={() => inputRef.current?.focus()}
        onClear={() => setHistory([])}
        theme={theme}
      />
      <CommandBar 
        onCommand={processCommand} 
        onToggleTheme={cycleTheme}
        currentTheme={theme}
        theme={theme}
      />
    </div>
  );
}