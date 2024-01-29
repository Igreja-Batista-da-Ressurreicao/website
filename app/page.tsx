import { CalendarComponent, IntroComponent, MediaComponent } from './_features'
import { SpotifyIcon, YouTubeIcon } from '~icons/index'
import YouTubeCover from '../public/images/worship-mock.png'
import SpotifyCover from '../public/images/listen-music-mock.png'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <IntroComponent.Root>
        <IntroComponent.Greetings />
        <IntroComponent.Cover />
      </IntroComponent.Root>
      <CalendarComponent.Root>
        <CalendarComponent.Schedule
          weekDay='Domingo'
          event={[
            { dateTime: '09h', name: 'Culto e Escola Bíblica Dominical' },
            { dateTime: '19:00h', name: 'Culto de Louvor e Adoração' },
          ]}
        />
        <CalendarComponent.Schedule
          weekDay='Terça'
          event={[{ dateTime: '19:30h', name: 'Reunião de Organizações' }]}
        />
        <CalendarComponent.Schedule
          weekDay='Quinta'
          event={[
            { dateTime: '19:30h', name: 'Culto de Oração e Estudo Bíblico' },
          ]}
        />
        <CalendarComponent.Schedule
          weekDay='Toda Primeira Semana do Mês'
          event={[{ dateTime: 'Seg - Sex 19:30h', name: 'Culto de Oração' }]}
        />
      </CalendarComponent.Root>
      <MediaComponent.Root>
        <MediaComponent.Figure
          captionContent='Acompanhe as pregações no nosso canal do YouTube'
          figureUrl={YouTubeCover}
          mediaLink='https://www.youtube.com/@igrejabatistadaressurreica388'
          icon={YouTubeIcon}
        />
        <MediaComponent.Figure
          captionContent='Ouça nossa playlist no Spotify'
          figureUrl={SpotifyCover}
          mediaLink='https://open.spotify.com/show/476GhnzFkD6uIYSqtVmQAI?si=3be3a3208f8c4d49'
          icon={SpotifyIcon}
        />
      </MediaComponent.Root>
    </main>
  )
}
