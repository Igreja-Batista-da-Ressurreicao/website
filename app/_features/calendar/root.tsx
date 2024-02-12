'use client'
import { ReactNode } from 'react'
import { Title } from '~/app/_components/elements'
import OrganizationsCalendar from '~/app/_features/calendar/organizations'
import CalendarIcon from '~icons/filled/Calendar'

export default function Root({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <section className='relative w-full flex flex-col bg-zinc-950 mb-12 px-12 pt-8 pb-16 xxl:pb-12 md:w-4/5 md:px-24 lg:w-2/3 lg:px-40 md:rounded-md'>
      <Title title='Nossa Programação' Icon={CalendarIcon} />
      {children}
      <OrganizationsCalendar />
    </section>
  )
}
