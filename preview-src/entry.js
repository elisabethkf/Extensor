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
store.enableLiveMode({
  client,
  onConnect: () => { connected = true; onReady(true) },
  onDisconnect: () => { connected = false },
})
// Ingen studio svarer (siden ligger bare i en vilkårlig iframe): fall tilbake til vanlig visning
setTimeout(() => onReady(false), 3000)

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
      const $q = store.createFetcherStore(query)
      let first = true
      let last
      $q.subscribe((s) => {
        if (s.loading) return
        if (s.error) { if (first) { first = false; reject(s.error) } return }
        const json = JSON.stringify(s.data)
        if (first) { first = false; last = json; resolve(s.data); return }
        if (json !== last) { last = json; reloadSoon() }
      })
    })
  },
}
