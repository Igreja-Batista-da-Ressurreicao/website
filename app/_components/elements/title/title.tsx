import { ComponentProps, ElementType } from 'react'
import { cn } from '~/app/_utils'

export type TitleProps = ComponentProps<'h1'> & {
  Icon?: ElementType
  title: string
  variant?: 'light' | 'dark'
}
export const Title = (props: TitleProps) => {
  const { title, variant, Icon, className, ...res } = props
  return (
    <h1
      className={cn(
        'font-semibold font-lato text-xl lg:text-2xl text-center mb-8 flex justify-center items-center gap-3',
        `${variant === 'light' ? 'text-zinc-200' : 'text-zinc-950'}`,
        className
      )}
      {...res}
    >
      {title}
      {Icon && (
        <Icon
          className={cn(
            'w-6 h-6',
            `${variant === 'light' ? 'fill-zinc-200' : 'fill-zinc-950'}`
          )}
        />
      )}
    </h1>
  )
}
