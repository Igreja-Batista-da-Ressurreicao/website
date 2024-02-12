import Image from 'next/image'
import { ReactNode } from 'react'
import Logo from '~/public/logos/logo-default.svg'

export type HeaderProps = typeof Header
export const Header = (): ReactNode => {
  return (
    <header className='w-full h-20 md:h-24 lg:h-32 flex flex-col justify-center items-center bg-zinc-950 ease-in-out transition-all'>
      <Image
        src={Logo}
        alt='Logo for header'
        className='w-32 h-14 lg:w-36 lg:h-16 ease-in-out transition-all'
      />
    </header>
  )
}
