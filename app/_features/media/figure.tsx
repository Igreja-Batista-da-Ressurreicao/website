import {ComponentPropsWithRef, ElementType, forwardRef, SVGAttributes,} from 'react'
import Link from 'next/link'
import Image, {StaticImageData} from 'next/image'

type FigureProps = ComponentPropsWithRef<'figure'> & {
  captionContent: string
  figureUrl: StaticImageData
  mediaLink: string
  icon:  ElementType<SVGAttributes<SVGSVGElement>>
}

type Ref = HTMLElement

export const Figure = forwardRef<Ref, FigureProps>((props, ref) => {
  const { captionContent, figureUrl, mediaLink, icon: Icon, ...rest } = props
  return (
    <figure className='w-full max-w-[425px] mx-auto my-4 relative lg:max-w-full lg:flex lg:justify-around lg:last:flex-row-reverse'>
      <figcaption className='absolute max-w-[325px] top-1/3 lg:static lg:flex-col flex mx-12 items-center justify-around lg:justify-center text-zinc-200 font-poppins font-medium text-base'>
        <span className='text-center w-1/2 lg:w-full lg:mb-3'>
          {captionContent}
        </span>
          <Link href={mediaLink} target='_blank' >
            <Icon />
          </Link>
      </figcaption>
      <Image
        src={figureUrl}
        alt='Caption image for figure element'
        className='rounded-sm shadow-md max-h-[266px]'
      />
    </figure>
  )
})
