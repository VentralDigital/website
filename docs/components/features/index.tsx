import { ArrowRightIcon } from '@components/icons'
import cn from 'clsx'
import Link from 'next/link'
import type { ReactNode } from 'react'
import styles from './style.module.css'

export function Feature({
  large,
  centered,
  children,
  lightOnly,
  className,
  href,
  index,
  ...props
}) {
  return (
    <div
      className={cn(
        styles.feature,
        large && styles.large,
        centered && styles.centered,
        lightOnly && styles['light-only'],
        className
      )}
      {...props}
    >
      {children}
      {href ? (
        <Link className={styles.link} href={href} target="_blank">
          <ArrowRightIcon width="1.5em" />
        </Link>
      ) : null}
    </div>
  )
}

export function Features({ children }: { children: ReactNode }) {
  return <div className={styles.features}>{children}</div>
}
