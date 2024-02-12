import { ComponentProps } from 'react'
import { Title } from '~/app/_components/elements'
import { ContactIcon } from '~icons/filled'

type IContactProps = ComponentProps<'section'>

const ContactComponent = (props: IContactProps) => {
  return (
    <section className='w-full h-[500px] flex flex-col bg-zinc-950' {...props}>
      <Title title='Contatos' Icon={ContactIcon} variant='light' />
      <div className='w-full items-center flex flex-col gap-4'>
        <p className='font-poppins text-base font-semibold text-zinc-200'>
          secretaria@ibrmoc.org.br
        </p>
        <p className='font-poppins text-base font-semibold text-zinc-200'>
          (38) 3214-0707
        </p>
      </div>
      <div className='w-full flex flex-col items-center'>
        <p>Quero receber um contato</p>
        <div className='w-3/4 h-9 border border-zinc-200 bg-none rounded-lg' />
        <div className='w-3/4 h-9 border border-zinc-200 bg-none rounded-lg' />
        <button
          type='button'
          className='w-11 h-7 bg-none border border-zinc-200 rounded-md'
        >
          Periodo
        </button>
        <button
          type='button'
          className='w-11 h-7 bg-none border border-zinc-200 rounded-md'
        >
          Contato
        </button>
      </div>
    </section>
  )
}

export default ContactComponent
