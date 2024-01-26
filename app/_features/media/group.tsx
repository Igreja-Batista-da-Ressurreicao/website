import Image from "next/image";
import Worship from '~/public/images/worship-mock.png'

export const Group = () => {
  return (
    <div>
      <div>
        <p>Acompanhe as pregações no nosso canal do YouTube</p>
        <button type='button'>YouTube Logo</button>
      </div>
      <Image src={Worship} alt='Background image' />
    </div>
  )
}
