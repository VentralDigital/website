import styles from './style.module.css'
import type { ReactNode } from 'react'

export function Year({
  year,
  children,
}: {year: string, children: ReactNode}) {
  return (
    <tr
      key={year}
      className="shadow-inner"
    >
      <td className="whitespace-pre py-2 pl-3 font-semibold leading-6  text-slate-500 dark:text-slate-400 text-center text-xl">
        {year}
      </td>
      <td className="py-2 pl-4">{children}</td>
    </tr>
  )
}

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse">
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
        {children}
        </tbody>
      </table>
    </div>
  )
}

