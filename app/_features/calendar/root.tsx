'use client'
import { ReactNode } from 'react'
import Title from './title'

export default function Root({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <section className='w-full flex flex-col bg-zinc-950 px-12 py-8 md:w-4/5 md:px-24 lg:w-2/3 lg:px-40 md:rounded-md'>
      <Title />
      {children}
    </section>
  )
}
