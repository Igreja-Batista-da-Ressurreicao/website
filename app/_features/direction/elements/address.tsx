import { ComponentProps, ReactNode } from 'react'

type IAddressProps = ComponentProps<'p'>

export const AddressElement = (props: IAddressProps): ReactNode => {
  return (
    <p
      className='font-poppins text-center text-zinc-950 font-medium text-xs lg:text-xl w-fit'
      {...props}
    >
      Av. Osmani Barbosa Nº 1639 <br />
      Bairro JK <br />
      Montes Claros - MG
    </p>
  )
}
