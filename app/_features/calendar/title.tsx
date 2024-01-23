import { CalendarIcon } from '~icons/index'

export default function Title() {
  return (
    <h1 className='font-semibold font-lato text-xl text-zinc-200 text-center mb-8 flex justify-center items-center gap-3'>
      Nossa Programação <CalendarIcon className='fill-zinc-200 w-3 h-3' />
    </h1>
  )
}
