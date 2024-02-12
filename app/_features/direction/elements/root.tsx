import { ComponentProps, ReactNode } from 'react'

type IDirectionRootProps = ComponentProps<'section'> & {
  children: Readonly<ReactNode>
}

export const RootElement = (props: IDirectionRootProps): ReactNode => {
  const { children, ...res } = props
  return (
    <section
      className='w-full h-80 lg:h-96 flex flex-col items-center py-4 2xl:h-96'
      {...res}
    >
      {children}
    </section>
  )
}
