import type { Metadata } from 'next'
import '@/styles/index.scss'
import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    {
      path: 'fonts/Poppins-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-ExtraBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-ExtraBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: 'fonts/Poppins-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Эвакуатор Москва – Быстро и Надёжно',
  description:
    'Служба эвакуации автомобилей в Москве. Круглосуточная помощь при поломках и ДТП. Быстрый вызов эвакуатора по доступной цене.',
  keywords: [
    'эвакуатор москва',
    'эвакуация автомобилей',
    'вызов эвакуатора',
    'автоэвакуатор',
    'эвакуатор круглосуточно',
    'эвакуатор дешево',
  ],
  authors: [{ name: 'Evakuator Moscow', url: 'https://evakuator-moscow.ru' }],
  creator: 'Evakuator Moscow',
  publisher: 'Evakuator Moscow',
  metadataBase: new URL('https://evakuator-moscow.ru'),
  openGraph: {
    title: 'Эвакуатор Москва – Быстро и Надёжно',
    description: 'Служба эвакуации автомобилей в Москве. Круглосуточная помощь при поломках и ДТП.',
    url: 'https://evakuator-moscow.ru',
    siteName: 'Evakuator Moscow',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evakuator Moscow',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Эвакуатор Москва – Быстро и Надёжно',
    description: 'Служба эвакуации автомобилей в Москве. Круглосуточная помощь при поломках и ДТП.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
