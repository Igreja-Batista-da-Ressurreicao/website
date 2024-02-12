export const MapElement = () => {
  return (
    <iframe
      title='Map'
      referrerPolicy='no-referrer-when-downgrade'
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_API_KEY}&q=Av.+Osmane+Barbosa,1639-Conj.Res.Jk,Montes+Claros-MG,39404-006`}
      allowFullScreen
      className='w-72 h-48 rounded-md mb-8 lg:mb-0 lg:w-96 lg:h-64 xl:w-[425px] 2xl:h-72 2xl:mb-8'
    />
  )
}
