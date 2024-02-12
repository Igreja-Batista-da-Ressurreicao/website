import { ReactNode } from 'react'
import { Title } from '~/app/_components/elements'
import PinnedIcon from '~/app/assets/icons/filled/Pinned'
import { AddressElement, MapElement, RootElement } from './elements'

const DirectionComponent = (): ReactNode => {
  return (
    <RootElement>
      <Title title='Como chegar?' Icon={PinnedIcon} />
      <div className='w-full h-full flex flex-col items-center justify-center lg:flex-row-reverse 2xl:flex-col lg:px-9 lg:justify-center lg:gap-10 2xl:gap-0'>
        <MapElement />
        <AddressElement />
      </div>
    </RootElement>
  )
}

export default DirectionComponent
