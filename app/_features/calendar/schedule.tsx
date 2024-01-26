type ScheduleProps = {
  weekDay: string
  event: {
    name: string
    dateTime: string
  }[]
}

export default function Schedule(props: ScheduleProps) {
  const { weekDay, event } = props
  return (
    <div className='mb-3'>
      <p className='text-sm lg:text-base font-poppins font-semibold text-zinc-300'>
        {weekDay}
      </p>
      {event.map(item => {
        return (
          <p className='text-sm lg:text-base font-poppins font-regular text-zinc-300/70'>
            {item.dateTime} - {item.name}
          </p>
        )
      })}
    </div>
  )
}
