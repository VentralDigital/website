import { ReactNode } from 'react'

export function OptionalText({ children }: { children: ReactNode }) {
  return (
    <details className="group my-4">
      <summary className="list-none">
        {/* First line with fade - visible when collapsed */}
        <div className="group-open:hidden relative overflow-hidden h-6 mb-1">
          <div className="pr-4">
            {children}
          </div>
          {/* Gradient fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-white dark:via-gray-900/60 dark:to-gray-900 pointer-events-none" />
        </div>
        
        {/* Arrow button bar */}
        <div className="bg-gradient-to-b from-white to-slate-100 dark:from-gray-900 dark:to-slate-800 h-6 flex items-center justify-center cursor-pointer hover:to-slate-200 dark:hover:to-slate-700 transition-colors">
          <svg 
            className="w-4 h-4 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </summary>
      
      {/* Full content when expanded */}
      <div className="pt-1">
        {children}
      </div>
    </details>
  )
}