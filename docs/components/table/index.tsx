import styles from './style.module.css'
import type { ReactNode } from 'react'

export function OptionTable({ optionTitle = "Option", head = true, children }: { options: [string, string, any], optionTitle: string, head: boolean, children: ReactNode }) {
  return (
    <div
      className={
        '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        {head && (
          <thead>
            <tr className="border-b py-4 text-left dark:border-neutral-700">
              <th className="py-2 font-semibold">{optionTitle}</th>
              <th className="py-2 pl-6 font-semibold">Type</th>
              <th className="px-6 py-2 font-semibold">Description</th>
            </tr>
          </thead>
        )}
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {children}
        </tbody>
      </table>
    </div>
  )
}

export function Option({
  option,
  type,
  children,
}: {option: string, type: string, children: ReactNode}) {
  return (
    <tr
      key={option}
      className="border-b border-gray-100 dark:border-neutral-700/50"
    >
      <td className="whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500">
        {option}
      </td>
      {type && (
        <td className="whitespace-pre py-2 pl-6 font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
          {type}
        </td>
      )}
      <td className="py-2 pl-6">{children}</td>
    </tr>
  )
}
