import { ReactNode } from 'react'

export default function Root({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <section
      aria-label='intro section'
      className='flex flex-col items-center py-11 gap-11 md:flex-row md:px-8 md:gap-9 ease-in-out transition-all'
    >
      {children}
    </section>
  )
}
