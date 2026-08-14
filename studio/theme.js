import {buildLegacyTheme} from 'sanity'

// Extensor-fargene fra nettsidens styles.css
const farger = {
  white: '#ffffff',
  off: '#f5f3ef',
  teal: '#2D4B50',
  tealDk: '#24454B',
  ink: '#1a1a18',
  muted: '#6e6c66',
  yellow: '#f0d84a',
  danger: '#a94442',
}

export const extensorTheme = buildLegacyTheme({
  // Grunnfarger
  '--black': farger.ink,
  '--white': farger.white,
  '--gray': farger.muted,
  '--gray-base': farger.muted,

  '--component-bg': farger.white,
  '--component-text-color': farger.ink,

  // Merkevare
  '--brand-primary': farger.teal,

  // Knapper
  '--default-button-color': farger.muted,
  '--default-button-primary-color': farger.teal,
  '--default-button-success-color': farger.teal,
  '--default-button-warning-color': farger.yellow,
  '--default-button-danger-color': farger.danger,

  // Tilstander
  '--state-info-color': farger.teal,
  '--state-success-color': farger.teal,
  '--state-warning-color': farger.yellow,
  '--state-danger-color': farger.danger,

  // Toppmeny — mørk teal som boksene på nettsiden
  '--main-navigation-color': farger.tealDk,
  '--main-navigation-color--inverted': farger.off,

  '--focus-color': farger.teal,
})
