'use client'
export default function contentfulLoader({ src, width, quality }) {
    const url = new URL(`https://images.ctfassets.net/${src}`)
    url.searchParams.set('fm', 'webp')
    url.searchParams.set('w', width.toString())
    url.searchParams.set('q', (quality || 75).toString())
    return url.href
  }