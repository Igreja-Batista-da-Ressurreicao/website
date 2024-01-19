import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'
import Image from 'next/image'
import GitLabLogo from '~/public/logos/git-lab.svg'
import Logo from '~/public/logos/logo-default.svg'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Igreja Batista da Ressurreição',
  description: 'Website da Igreja Batista da Ressurreição',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${poppins.variable} ${lato.variable}`}>
      <body className='bg-zinc-200'>
        <header className='w-full h-20 flex flex-col justify-center items-center bg-zinc-950'>
          <Image src={Logo} alt='Logo for header' className='w-32 h-14' />
        </header>
        {children}
        <footer className='w-full h-40 flex flex-col justify-start items-start bg-zinc-950 relative'>
          <p className='text-zinc-200 font-lato font-semibold text-xs self-center mt-9'>
            Igreja Batista da Ressurreição{' '}
            <span className='font-light'>1996 - 2024</span>
            <p className='text-zinc-200 font-lato font-light text-xs text-center self-stretch'>
              Todos os direitos reservados.
            </p>
          </p>
          <div className='w-full mt-3 flex justify-center items-center gap-2'>
            <Image src={Logo} alt='Logo for footer' className='w-16 h-7' />
            <span className='text-center text-sm font-lato font-bold text-zinc-500'>
              © 2024
            </span>
          </div>
          <p className='flex text-left font-lato text-zinc-200 text-[10px] font-light absolute bottom-3 left-3'>
            Developed by
            <Image src={GitLabLogo} alt='GitLab logo' className='w-4 h-4' />
          </p>
        </footer>
      </body>
    </html>
  )
}
