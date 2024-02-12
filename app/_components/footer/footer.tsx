import Image from 'next/image'
import { ReactNode } from 'react'
import GitLabLogo from '~/public/logos/git-lab.svg'
import Logo from '~/public/logos/logo-default.svg'

export type FooterProps = typeof Footer
export const Footer = (): ReactNode => {
  return (
    <footer className='w-full h-40 flex flex-col justify-start items-start bg-zinc-950 relative mt-16'>
      <p className='text-zinc-200 font-lato font-semibold text-xs self-center mt-9'>
        Igreja Batista da Ressurreição{' '}
        <span className='font-light'>1996 - 2024</span>
      </p>
      <p className='text-zinc-200 font-lato font-light text-xs text-center self-stretch'>
        Todos os direitos reservados.
      </p>
      <div className='w-full mt-3 flex justify-center items-center gap-2'>
        <Image src={Logo} alt='Logo for footer' className='w-16 h-7' />
        <span className='text-center text-sm font-lato font-bold text-zinc-500'>
          © 2024
        </span>
      </div>
      <p className='flex text-left font-lato text-zinc-200 text-[10px] font-light absolute bottom-3 left-3 md:bottom-4 md:left-4 lg:bottom-6 lg:left-6 ease-in-out transition-all'>
        Developed by
        <Image src={GitLabLogo} alt='GitLab logo' className='w-4 h-4' />
      </p>
    </footer>
  )
}
