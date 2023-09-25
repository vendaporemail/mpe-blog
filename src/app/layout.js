import './globals.css'
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })

const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" })

export const metadata = {
  title: 'Email Marketing Rulez',
  description: 'Criado por Petrus Technology Inc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-dark`}>
        {children}
      </body>
    </html>
  )
}
