import { Title } from '~/app/_components/elements'
import { Hourglass } from '~/app/assets/icons/outline/Hourglass'

const Bulletin = () => {
  // Your component logic here

  return (
    <div className='flex flex-col w-1/2 bg-zinc-950 rounded-md py-4 items-center mb-12'>
      <Title title='Boletim dominical' />
      <p className='flex font-poppins font-light text-xl text-zinc-200 mb-6'>
        Em breve...
        <Hourglass />
      </p>
    </div>
  )
}

export default Bulletin
