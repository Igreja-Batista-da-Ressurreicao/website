import Image from 'next/image'
import FrontView from '~/public/images/front-view.png'

export default function Cover() {
  return (
    <Image
      src={FrontView}
      alt='Front view from the building'
      className='w-96 h-fit rounded-sm shadow-md md:w-3/5'
    />
  )
}
