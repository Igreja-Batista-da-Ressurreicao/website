import { ComponentProps, ElementType } from 'react'
import { cn } from '~/app/_utils'

export type TitleProps = ComponentProps<'h1'> & {
  Icon?: ElementType
  title: string
}
export const Title = (props: TitleProps) => {
  const { title, Icon, className, ...res } = props
  return (
    <h1
      className={cn(
        'font-semibold font-lato text-xl lg:text-2xl text-zinc-200 text-center mb-8 flex justify-center items-center gap-3',
        className
      )}
      {...res}
    >
      {title}
      {Icon && <Icon className='w-6 h-6 fill-zinc-200' />}
    </h1>
  )
}
