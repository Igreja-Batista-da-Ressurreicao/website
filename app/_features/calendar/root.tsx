'use client'
import {ReactNode} from 'react'
import Title from './title'
import OrganizationsCalendar from "~/app/_features/calendar/organizations";

export default function Root({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <section className='relative mb-32 w-full flex flex-col bg-zinc-950 px-12 pt-8 pb-16 xxl:pb-12 md:w-4/5 md:px-24 lg:w-2/3 lg:px-40 md:rounded-md'>
      <Title />
      {children}
      <OrganizationsCalendar />
    </section>
  )
}
