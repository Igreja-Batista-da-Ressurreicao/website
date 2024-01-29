import {ReactNode} from 'react'
import {Title} from '~/app/_components/elements'
import PlayIcon from '~icons/filled/Play'

export const Root = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactNode => {
  return (
    <section className='flex flex-col w-full max-w-[1100px] lg:rounded-md bg-zinc-950 py-10 mb-12 ease-in-out transition-all'>
      <Title title='Media' Icon={PlayIcon} />
      {children}
    </section>
  )
}
