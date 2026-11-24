import {Moon, Sun} from 'lucide-react';
import type {Theme} from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({theme, onToggle}: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      aria-pressed={isDark}
      className="inline-flex min-h-[36px] items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1.5 text-xs font-medium text-[#374151] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#0B1F4B]/40 hover:text-[#111827] dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#D1D5DB] dark:hover:border-[#3B82F6]/50 dark:hover:text-white"
    >
      {isDark ? (
        <>
          <Sun className="h-3.5 w-3.5 text-[#FBBF24]" aria-hidden="true" />
          <span>Tema claro</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-[#0B1F4B]" aria-hidden="true" />
          <span>Tema oscuro</span>
        </>
      )}
    </button>
  );
}
