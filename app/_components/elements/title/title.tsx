import { ElementType, HTMLAttributes } from 'react'

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  Icon?: ElementType
  title: string
}
export const Title = (props: TitleProps) => {
  const { title, Icon, ...res } = props
  return (
    <h1
      className='font-semibold font-lato text-xl lg:text-2xl text-zinc-200 text-center mb-8 flex justify-center items-center gap-3'
      {...res}
    >
      {title}
      {Icon && <Icon className='w-6 h-6 fill-zinc-200' />}
    </h1>
  )
}
