import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore
import Worship from '~/public/images/worship-mock.png'
import { YouTubeIcon } from '~icons/index'

export const Group = () => {
  return (
    <div className='w-full max-w-[425px] mx-auto my-4 relative'>
      <p className='absolute top-1/3 flex mx-12 items-center justify-around text-zinc-200 font-poppins font-medium text-base'>
        <span className='text-center w-1/2'>
          Acompanhe as pregações no nosso canal do YouTube
        </span>
        <Link
          href='https://www.youtube.com/@igrejabatistadaressurreica388'
          target='_blank'
        >
          <YouTubeIcon size='lg' />
        </Link>
      </p>
      <Image src={Worship} alt='Background image' />
    </div>
  )
}
