import ClickIcon from '~icons/filled/Click'
import {ButtonHTMLAttributes, ReactNode} from 'react'

type OrganizationsCalendarProps = ButtonHTMLAttributes<HTMLButtonElement>
export default function OrganizationsCalendar(
  props: OrganizationsCalendarProps
): ReactNode {
  return (
    <button
      type='button'
      className='w-fit gap-2 flex absolute bottom-6 right-4 xxl:right-6 rounded-md p-2 hover:bg-zinc-700'
      {...props}
    >
      <ClickIcon className='w-4 h-4 fill-zinc-200' />{' '}
      <p className='text-xs font-light text-zinc-200 font-poppins text-right'>
        Agenda das organizações
      </p>
    </button>
  )
}
