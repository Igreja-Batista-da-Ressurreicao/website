import { ReactNode } from 'react'

export const Root = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactNode => {
  return <section className='flex flex-col w-full bg-zinc-950 pt-8'>{children}</section>
}
