import { IntroComponent } from './_features'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <IntroComponent.Root>
        <IntroComponent.Greetings />
        <IntroComponent.Cover />
      </IntroComponent.Root>
    </main>
  )
}
