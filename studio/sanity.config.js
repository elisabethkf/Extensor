import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool, defineLocations, defineDocuments} from 'sanity/presentation'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {codeInput} from '@sanity/code-input'
import {useRouter} from 'sanity/router'
import {useEffect} from 'react'
import {EyeOpenIcon} from '@sanity/icons'
import {schemaTypes} from './schemaTypes'
import {extensorTheme} from './theme'
import {ExtensorIkon} from './ExtensorIkon'
import {Navbar} from './Navbar'

// Sider finnes ett sted hver og skal ikke opprettes, dupliseres eller slettes
const sideTyper = ['side', 'sideForside', 'sideSupport']
// Typer som ikke skal opprettes av redaktører
const skjulteTyper = [...sideTyper, 'partner', 'addonProdukt']

// Hvilken side på nettstedet et dokument vises på (brukes av forhåndsvisningen)
const sideForType = {
  driftsmelding: '/support#driftsmeldinger',
  ansatt: '/om-oss',
  webinar: '/webinar',
  kurs: '/kurs',
  videoguide: '/videoguider',
  brukermanual: '/brukermanualer',
  faqItem: '/faq',
  nedlastning: '/nedlastninger',
  testimonial: '/',
  kundelogo: '/',
  sideForside: '/',
  sideSupport: '/support',
}
const stiForDokument = (type, id, doc) => {
  if (type === 'nyhet') return doc?.kategori === 'karriere' ? '/karriere' : '/nyheter'
  if (type === 'side') return '/' + String(id || '').replace(/^drafts\./, '').replace(/^side-/, '')
  return sideForType[type] || null
}

const SISTE_STI = 'extensor:forhandsvisning-sti'
const nettsted = () =>
  window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://extensor-production-ec65.up.railway.app'

// Knapp i dokumentmenyen: åpner forhåndsvisningen direkte på siden dokumentet hører til
function ForhandsvisningAction(props) {
  const router = useRouter()
  const sti = stiForDokument(props.type, props.id, props.draft || props.published)
  useEffect(() => {
    if (!sti) return
    try { sessionStorage.setItem(SISTE_STI, sti) } catch (e) { /* uten lagring faller fanen tilbake til forsiden */ }
  }, [sti])
  if (!sti) return null
  return {
    label: 'Forhåndsvisning',
    icon: EyeOpenIcon,
    onHandle: () => {
      router.navigateUrl({path: `/presentation/${props.type}/${String(props.id).replace(/^drafts\./, '')}?preview=${encodeURIComponent(sti)}`})
      props.onComplete()
    },
  }
}

const side = (tittel, type, id) => ({tittel, type, id})

const forsiden = side('Forsiden', 'sideForside', 'side-forside')
const omOss = side('Om oss', 'side', 'side-om-oss')

const faggruppeSider = [
  side('Oversikt over faggrupper', 'side', 'side-faggrupper'),
  side('Bedriftshelsetjenester', 'side', 'side-bedriftshelsetjenester'),
  side('Rehabilitering', 'side', 'side-rehabilitering'),
  side('Rus og psykiatri', 'side', 'side-rus-og-psykiatri'),
  side('Omsorg og barnevern', 'side', 'side-omsorg-og-barnevern'),
  side('Private sykehus', 'side', 'side-private-sykehus'),
  side('Leger', 'side', 'side-leger'),
  side('Fysio- og manuellterapeuter', 'side', 'side-fysio-og-manuellterapeuter'),
  side('Psykologer', 'side', 'side-psykologer'),
  side('Kiropraktorer', 'side', 'side-kiropraktorer'),
  side('Andre behandlere', 'side', 'side-andre-behandlere'),
]

const andreSider = [
  side('Extensor KI', 'side', 'side-extensor-ki'),
  side('Tilleggsprodukter', 'side', 'side-tilleggsprodukter'),
  side('Webinar', 'side', 'side-webinar'),
  side('Nyheter', 'side', 'side-nyheter'),
  side('Karriere', 'side', 'side-karriere'),
  side('Kontakt', 'side', 'side-kontakt'),
  side('Kurs', 'side', 'side-kurs'),
  side('Videoguider', 'side', 'side-videoguider'),
  side('Brukermanualer', 'side', 'side-brukermanualer'),
  side('FAQ', 'side', 'side-faq'),
  side('Nedlastninger', 'side', 'side-nedlastninger'),
]

export default defineConfig({
  name: 'default',
  title: 'Extensor',
  icon: ExtensorIkon,
  projectId: '79jm8nbd',
  dataset: 'production',
  theme: extensorTheme,
  studio: {components: {navbar: Navbar}},
  releases: {enabled: false},
  plugins: [
    structureTool({
      structure: (S, context) => {
        const sideItem = (s) =>
          S.listItem()
            .title(s.tittel)
            .id(s.id)
            .child(S.document().schemaType(s.type).documentId(s.id))

        const liste = (tittel, type, id) =>
          S.listItem()
            .title(tittel)
            .id(id || type)
            .schemaType(type)
            .child(S.documentTypeList(type).title(tittel))

        const items = [
          // Det redaktørene bruker mest, øverst
          S.listItem().title('Support-siden').id('support').child(
            S.list()
              .title('Support-siden')
              .items([
                sideItem(side('Tekster og bilde på Support-siden', 'sideSupport', 'side-support')),
                S.divider(),
                liste('Spørsmål og svar (FAQ)', 'faqItem'),
                liste('Videoguider', 'videoguide'),
                liste('Brukermanualer', 'brukermanual'),
                liste('Nedlastninger', 'nedlastning'),
                liste('Webinarer', 'webinar'),
                liste('Kurs', 'kurs'),
              ])
          ),
          liste('Driftsmeldinger', 'driftsmelding'),
          orderableDocumentListDeskItem({type: 'ansatt', title: 'Ansatte (dra for å endre rekkefølge)', id: 'ansatt', S, context}),
          liste('Artikler', 'nyhet'),
          S.divider(),
          liste('Referanser', 'testimonial'),
          orderableDocumentListDeskItem({type: 'kundelogo', title: 'Kundelogoer på forsiden (dra for å endre rekkefølge)', id: 'kundelogo', S, context}),
          S.listItem().title('Faggrupper').id('faggrupper').child(
            S.list().title('Faggrupper').items(faggruppeSider.map(sideItem))
          ),
          S.divider(),
          // Tekster og bilder på de øvrige sidene
          S.listItem().title('Sider').id('sider').child(
            S.list()
              .title('Sider')
              .items([
                sideItem(forsiden),
                sideItem(omOss),
                ...andreSider.map(sideItem),
              ])
          ),
        ]

        return S.list().title('Innhold').items(items)
      },
    }),
    codeInput(),
    presentationTool({
      title: 'Forhåndsvisning',
      resolve: {
        // Siden som vises i forhåndsvisningen når et dokument er åpent
        locations: {
          driftsmelding: defineLocations({locations: [{title: 'Support – Driftsmeldinger', href: '/support#driftsmeldinger'}]}),
          ansatt: defineLocations({locations: [{title: 'Om oss – Teamet', href: '/om-oss'}]}),
          webinar: defineLocations({locations: [{title: 'Webinar', href: '/webinar'}]}),
          kurs: defineLocations({locations: [{title: 'Kurs', href: '/kurs'}]}),
          videoguide: defineLocations({locations: [{title: 'Videoguider', href: '/videoguider'}]}),
          brukermanual: defineLocations({locations: [{title: 'Brukermanualer', href: '/brukermanualer'}]}),
          faqItem: defineLocations({locations: [{title: 'FAQ', href: '/faq'}]}),
          nedlastning: defineLocations({locations: [{title: 'Nedlastninger', href: '/nedlastninger'}]}),
          nyhet: defineLocations({
            select: {tittel: 'tittel', kategori: 'kategori'},
            resolve: (doc) => ({
              locations: [
                {title: doc?.tittel || 'Artikkel', href: doc?.kategori === 'karriere' ? '/karriere' : '/nyheter'},
              ],
            }),
          }),
          testimonial: defineLocations({locations: [{title: 'Forsiden og faggruppesidene', href: '/'}]}),
          kundelogo: defineLocations({locations: [{title: 'Forsiden', href: '/'}]}),
          sideForside: defineLocations({locations: [{title: 'Forsiden', href: '/'}]}),
          sideSupport: defineLocations({locations: [{title: 'Support', href: '/support'}]}),
          side: defineLocations({
            select: {id: '_id', navn: 'navn'},
            resolve: (doc) => ({
              locations: [{title: doc?.navn || 'Side', href: '/' + String(doc?.id || '').replace(/^drafts\./, '').replace(/^side-/, '')}],
            }),
          }),
        },
      },
      previewUrl: {
        // Fanen «Forhåndsvisning» åpner på siden til dokumentet som sist var åpent i strukturen
        initial: () => {
          let sti = ''
          try { sti = sessionStorage.getItem(SISTE_STI) || '' } catch (e) { /* ignorer */ }
          return nettsted() + sti
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // «Opprett»-menyen: aldri sider
    newDocumentOptions: (prev) => prev.filter((o) => !skjulteTyper.includes(o.templateId)),
    // Sidene skal kunne redigeres, men ikke slettes, kopieres eller avpubliseres
    actions: (prev, {schemaType}) => [
      ForhandsvisningAction,
      ...(sideTyper.includes(schemaType)
        ? prev.filter(({action}) => ['publish', 'discardChanges', 'restore'].includes(action))
        : prev),
    ],
  },
})
