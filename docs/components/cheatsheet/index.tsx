import styles from './style.module.css'
import type { ReactNode } from 'react'
import { Bleed } from 'nextra-theme-docs'

export function More({
  children,
}: {children: ReactNode}) {
  return (
    <details className="group">
      <summary className="bg-gradient-to-b from-white bg-slate-100 h-6 flex items-center justify-center list-none cursor-pointer"></summary>
      <div className="bg-slate-100 pl-2 pb-5 pt-1">{children}</div>
    </details>
  )
}

export function MoreMore({
  children,
}: {children: ReactNode}) {
  return (
    <details className="group ml-5 mr-1 mt-0">
      <summary className="bg-gradient-to-t from-white bg-slate-100 h-6 flex items-center justify-center list-none cursor-pointer"></summary>
      <div className="bg-white pl-2 pb-1 pt-1">{children}</div>
    </details>
  )
}

export function Entry({
  subject,
  alt,
  children,
}: {subject: string, alt: string, children: ReactNode}) {
  const anchor = `${subject.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z-]/g, '')}`
  const anchorLink = `#${anchor}`
  return (
    <tr
      key={subject}
      id={anchor}
      className="border-b border-gray-100 dark:border-neutral-700/50"
    >
      <td className="w-1/4">
        <a className="lg:whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500" href={anchorLink}>{subject}</a>
        <br/>
        <span className="py-2 italic text-xs text-slate-400 dark:text-slate-300">{alt}</span>
      </td>
      <td className="w-3/4 py-2 pl-6 pb-0">{children}</td>
    </tr>
  )
}

export function Cheatsheet({ children }: { children: ReactNode }) {
  return (
    <Bleed full={false}>
    <div
      className={
        '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm table-fixed">
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
        {children}
        </tbody>
      </table>
    </div>
    </Bleed>
  )
}

