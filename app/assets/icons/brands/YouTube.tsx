import { SVGAttributes } from 'react'
import { cn } from '~/app/_utils'

export type YouTubeIconProps = SVGAttributes<SVGSVGElement> & {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light' | 'colored'
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
}

const variantClasses = {
  dark: 'fill-zinc-200',
  light: 'fill-zinc-950',
  colored: 'fill-brand-youtube',
}

export const YouTubeIcon = (props: YouTubeIconProps) => {
  const { size = 'md', variant = 'colored', className, ...rest } = props
  return (
    <svg
      role='img'
      aria-label='YouTube icon'
      viewBox='0 0 55 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        `${sizeClasses[size]} ${variantClasses[variant]}`,
        className
      )}
      {...rest}
    >
      <path
        d='M52.9152 5.94571C52.2937 3.60535 50.4623 1.76215 48.1371 1.13664C43.9225 0 27.0223 0 27.0223 0C27.0223 0 10.1222 0 5.90742 1.13664C3.58219 1.76225 1.75087 3.60535 1.12931 5.94571C0 10.1878 0 19.0384 0 19.0384C0 19.0384 0 27.889 1.12931 32.1311C1.75087 34.4714 3.58219 36.2379 5.90742 36.8634C10.1222 38 27.0223 38 27.0223 38C27.0223 38 43.9224 38 48.1371 36.8634C50.4623 36.2379 52.2937 34.4714 52.9152 32.1311C54.0445 27.889 54.0445 19.0384 54.0445 19.0384C54.0445 19.0384 54.0445 10.1878 52.9152 5.94571ZM21.4949 27.0741V11.0027L35.6202 19.0386L21.4949 27.0741Z'
        fill='inherit'
      />
    </svg>
  )
}
