import localFont from 'next/font/local'
import { Roboto, DM_Mono } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const dm_mono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

// Font files can be colocated inside of `app`
export const digit2000 = localFont({
  src: 'rawFiles/01_Digit2000.otf',
  display: 'swap',
})

export const abstract = localFont({
  src: 'rawFiles/ABSTRACT.otf',
  display: 'swap',
})

export const pixelOperator = localFont({
  src: 'rawFiles/PixelOperatorMono.ttf',
  display: 'swap',
})

export const argentPixel = localFont({
  src: 'rawFiles/ArgentPixelCF.otf',
  display: 'swap',
})

export const argentPixelItalic = localFont({
  src: 'rawFiles/ArgentPixelCF-Italic.otf',
  display: 'swap',
})

export const planetKosmos = localFont({
  src: 'rawFiles/PLANK___.ttf',
  display: 'swap',
})
