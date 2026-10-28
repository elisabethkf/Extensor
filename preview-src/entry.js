// Lastes kun når nettsiden vises inni Sanity-studioets Presentation-fane (se script.js).
// Studioet henter utkastene selv (innlogget som redaktøren) og sender dem hit,
// så det ligger ingen token i nettsiden.
import {createClient} from '@sanity/client'
import {createQueryStore} from '@sanity/core-loader'
import {enableVisualEditing} from '@sanity/visual-editing'

const cfg = window.__SANITY_CFG
const client = createClient({projectId: cfg.projectId, dataset: cfg.dataset, apiVersion: cfg.apiVersion, useCdn: true})
const store = createQueryStore({client, ssr: false})

let connected = false
let onReady
const ready = new Promise((resolve) => { onReady = resolve })
// Studioet sender perspektivet (utkast) rett etter tilkoblingen. Spørringer som kjøres før det er mottatt,
// leser bare publisert innhold og finner ikke utkast som ikke er publisert ennå.
let onPerspektiv
const perspektiv = new Promise((resolve) => { onPerspektiv = resolve })
store.enableLiveMode({
  client,
  onConnect: () => {
    connected = true
    Promise.race([perspektiv, new Promise((r) => setTimeout(r, 2000))]).then(() => onReady(true))
  },
  onDisconnect: () => { connected = false },
  onPerspective: () => onPerspektiv(true),
})
// Ingen studio svarer (siden ligger bare i en vilkårlig iframe): fall tilbake til vanlig visning
// Presentation legger perspektivet på adressen; da skal studioet svare, selv om tilkoblingen er treg etter en omlasting
const iStudio = /[?&]sanity-preview-perspective=/.test(location.search)
setTimeout(() => onReady(false), iStudio ? 20000 : 3000)

let reloadTimer
const reloadSoon = () => {
  clearTimeout(reloadTimer)
  reloadTimer = setTimeout(() => location.reload(), 500)
}

enableVisualEditing({
  refresh: () => { reloadSoon(); return new Promise(() => {}) },
})

window.__extensorPreview = {
  ready,
  // Samme signatur som sanityQuery i script.js; endringer i utkast laster siden på nytt
  query(query) {
    return new Promise((resolve, reject) => {
      // Studioet husker spørringer det allerede svarer på og sender ikke resultatet på nytt når siden lastes om.
      // En unik kommentar gir hver innlasting sin egen spørring, så utkastet kommer også etter omlasting.
      const $q = store.createFetcherStore(`${query}\n// ${Math.random().toString(36).slice(2)}`)
      let resolved = false
      let last
      let grace
      const finish = (data) => {
        if (resolved) return
        resolved = true
        clearTimeout(grace)
        last = JSON.stringify(data)
        resolve(data)
      }
      $q.subscribe((s) => {
        if (s.loading) return
        if (s.error) { if (!resolved) { resolved = true; reject(s.error) } return }
        if (!resolved) {
          // Tomt svar: gi studioet litt tid til å sende utkastet før vi gir opp
          if (s.data == null) { if (!grace) grace = setTimeout(() => finish(null), 2500); return }
          finish(s.data)
          return
        }
        const json = JSON.stringify(s.data)
        if (json !== last) { last = json; reloadSoon() }
      })
    })
  },
}
