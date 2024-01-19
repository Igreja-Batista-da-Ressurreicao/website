import { ReactNode } from 'react'

export default function Root({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <section className='flex flex-col items-center py-11 gap-11 md:flex-row md:pr-20 md:pl-16 md:gap-9 ease-in-out transition-all'>
      {children}
    </section>
  )
}
