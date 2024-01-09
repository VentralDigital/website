import styles from './style.module.css'
import type { ReactNode } from 'react'

export function R({reference}: {reference: string}) {
  const anchor = `reference-${reference}`
  const anchorLink = `#${anchor}`
  return (
    <sup className="font-mono text.xs text-violet-600 dark:text-violet-500">[<a href={anchorLink}>{reference}</a>]</sup>
  )
}

export function Reference({
  reference,
  children,
}: {reference: string, children: ReactNode}) {
  const anchor = `reference-${reference}`
  const anchorLink = `#${anchor}`
  return (
    <tr
      key={reference}
      id={anchor}
      className="border-b border-gray-100 dark:border-neutral-700/50"
    >
      <td className="whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500">
        [<a href={anchorLink}>{reference}</a>]
      </td>
      <td className="py-2 pl-6">{children}</td>
    </tr>
  )
}

export function References({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
        {children}
        </tbody>
      </table>
    </div>
  )
}

