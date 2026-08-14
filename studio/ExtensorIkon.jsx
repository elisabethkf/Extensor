import React from 'react'
import ikon from './static/extensor-ikon.png'

// Heksagon-merket fra Extensor-logoen, vises øverst til venstre i Studio
export function ExtensorIkon() {
  return (
    <img
      src={ikon}
      alt="Extensor"
      style={{width: '1em', height: '1em', objectFit: 'contain'}}
    />
  )
}
