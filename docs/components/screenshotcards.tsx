import cn from 'clsx'
import type { ComponentProps, CSSProperties, ReactNode } from 'react'

const classes = {
  cards: cn(
    'nextra-cards nx-mt-4 nx-gap-4 nx-grid',
    'nx-not-prose' // for nextra-theme-docs
  ),
  card: cn(
    'nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200',
    'nx-text-current nx-no-underline dark:nx-shadow-none',
  ),
  description: cn(
    'nx-flex italic nx-items-start nx-gap-2 nx-p-4 nx-text-gray-900'
  )
}

export function ScreenshotCard({
  children,
  description,
  ...props
}: {
  children: ReactNode
  description: string
}) {

  return (
    <span
      className={cn(
        classes.card,
        'dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50'
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          classes.description,
          'dark:nx-text-gray-100'
        )}
      >
        <span className="nx-flex nx-gap-1">
          <span className="text-xs">
            {description}
          </span>
        </span>
      </span>
    </span>
  )
}

function _ScreenshotCards({
  children,
  num = 3,
  className,
  style,
  ...props
}: { num?: number } & ComponentProps<'div'>) {
  return (
    <div
      className={cn(classes.cards, className)}
      {...props}
      style={
        {
          ...style,
          '--rows': num
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}

export const ScreenshotCards = Object.assign(_ScreenshotCards, { displayName: 'ScreenshotCards', ScreenshotCard })
