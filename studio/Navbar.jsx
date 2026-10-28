import {useEffect} from 'react'
import {usePerspective, useSetPerspective} from 'sanity'
import {useRouter} from 'sanity/router'

// Sist åpnede dokument (type|id), satt av «Forhåndsvisning»-knappen i dokumentmenyen
export const SISTE_DOK = 'extensor:siste-dokument'

// Lister som ligger direkte i hovedmenyen har samme id som dokumenttypen;
// innholdet under «Support-siden» ligger ett nivå ned.
const iHovedmeny = ['nyhet', 'testimonial', 'driftsmelding', 'ansatt', 'kundelogo']
const iSupport = ['faqItem', 'videoguide', 'brukermanual', 'nedlastning', 'webinar', 'kurs']

const strukturSti = (type, id) => {
  if (!type || !id) return null
  if (iHovedmeny.includes(type)) return `/structure/${type};${id}`
  if (iSupport.includes(type)) return `/structure/support;${type};${id}`
  return null
}

// Dokumentet redaktøren jobber med i forhåndsvisningen: fra adressen, fra siden som vises, eller sist åpnet
function dokumentIForhandsvisning() {
  const fraSti = /^\/presentation\/([^/]+)\/([^/?;]+)/.exec(window.location.pathname)
  if (fraSti) return {type: fraSti[1], id: decodeURIComponent(fraSti[2]).replace(/^drafts\./, '')}
  const side = new URLSearchParams(window.location.search).get('preview') || ''
  const artikkel = /\/artikkel\/([^/?#]+)/.exec(side)
  if (artikkel) return {type: 'nyhet', id: decodeURIComponent(artikkel[1])}
  try {
    const [type, id] = (sessionStorage.getItem(SISTE_DOK) || '').split('|')
    if (type && id) return {type, id}
  } catch (e) { /* uten lagring faller «Structure» tilbake til hovedmenyen */ }
  return null
}

// Redaktørene skal alltid jobbe i utkast. Velgeren for «Published»/utgivelser skjules,
// og har noen havnet i «Published» (som er skrivebeskyttet) settes de tilbake til utkast.
// Fra forhåndsvisningen tar «Structure» dem tilbake til dokumentet de jobbet med, ikke til hovedmenyen.
export function Navbar(props) {
  const {selectedPerspectiveName} = usePerspective()
  const setPerspective = useSetPerspective()
  const router = useRouter()
  useEffect(() => {
    if (selectedPerspectiveName) setPerspective('drafts')
  }, [selectedPerspectiveName, setPerspective])

  const tilStructure = (e) => {
    if (!window.location.pathname.startsWith('/presentation')) return
    const lenke = e.target.closest && e.target.closest('a[href]')
    if (!lenke) return
    let sti
    try { sti = new URL(lenke.href, window.location.href).pathname.replace(/\/$/, '') } catch (err) { return }
    if (sti !== '/structure') return
    const dok = dokumentIForhandsvisning()
    const mål = dok && strukturSti(dok.type, dok.id)
    if (!mål) return
    e.preventDefault()
    e.stopPropagation()
    router.navigateUrl({path: mål})
  }

  return (
    <div style={{display: 'contents'}} onClickCapture={tilStructure}>
      <style>{'[data-ui="ReleasesNav"] { display: none !important; }'}</style>
      {props.renderDefault(props)}
    </div>
  )
}
