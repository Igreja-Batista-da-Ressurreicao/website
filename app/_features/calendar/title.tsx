import CalendarIcon from "~icons/filled/Calendar";
export default function Title() {
  return (
    <h1 className='font-semibold font-lato text-xl lg:text-2xl text-zinc-200 text-center mb-8 flex justify-center items-center gap-3'>
      Nossa Programação <CalendarIcon className='w-6 h-6 fill-zinc-200' />
    </h1>
  )
}
