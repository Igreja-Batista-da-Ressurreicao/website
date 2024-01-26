import './globals.css'
import type {Metadata} from 'next'
import {Lato, Poppins} from 'next/font/google'
import {Footer} from './_components/footer'
import {Header} from "~/app/_components/header";
import {ReactNode} from "react";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Igreja Batista da Ressurreição',
  description: 'Website da Igreja Batista da Ressurreição',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' className={`${poppins.variable} ${lato.variable}`}>
      <body className='bg-zinc-200'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
