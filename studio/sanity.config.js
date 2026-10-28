import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool, defineLocations, defineDocuments} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {extensorTheme} from './theme'
import {ExtensorIkon} from './ExtensorIkon'

// Sider finnes ett sted hver og skal ikke opprettes, dupliseres eller slettes
const sideTyper = ['side', 'sideForside', 'sideSupport']

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
  plugins: [
    structureTool({
      structure: (S) => {
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
          S.listItem()
            .title('Ansatte')
            .id('ansatt')
            .schemaType('ansatt')
            .child(
              S.documentTypeList('ansatt')
                .title('Ansatte')
                .defaultOrdering([{field: 'rekkefolge', direction: 'asc'}])
            ),
          liste('Artikler', 'nyhet'),
          S.divider(),
          // Tekster og bilder på de øvrige sidene
          S.listItem().title('Sider').id('sider').child(
            S.list()
              .title('Sider')
              .items([
                sideItem(forsiden),
                sideItem(omOss),
                S.listItem().title('Faggrupper').id('faggrupper').child(
                  S.list().title('Faggrupper').items(faggruppeSider.map(sideItem))
                ),
                S.divider(),
                ...andreSider.map(sideItem),
              ])
          ),
        ]

        return S.list().title('Innhold').items(items)
      },
    }),
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
          sideForside: defineLocations({locations: [{title: 'Forsiden', href: '/'}]}),
          sideSupport: defineLocations({locations: [{title: 'Support', href: '/support'}]}),
          side: defineLocations({
            select: {id: '_id', navn: 'navn'},
            resolve: (doc) => ({
              locations: [{title: doc?.navn || 'Side', href: '/' + String(doc?.id || '').replace(/^drafts\./, '').replace(/^side-/, '')}],
            }),
          }),
        },
        // Åpner siden i redigeringsruten når man navigerer til den inne i forhåndsvisningen
        mainDocuments: defineDocuments([
          {route: '/', filter: '_id == "side-forside"'},
          {route: '/support', filter: '_id == "side-support"'},
          {route: '/:sti', filter: '_type == "side" && _id == "side-" + $sti'},
        ]),
      },
      previewUrl: {
        initial: window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://extensor-production-ec65.up.railway.app',
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // «Opprett»-menyen: aldri sider
    newDocumentOptions: (prev) => prev.filter((o) => !sideTyper.includes(o.templateId)),
    // Sidene skal kunne redigeres, men ikke slettes, kopieres eller avpubliseres
    actions: (prev, {schemaType}) =>
      sideTyper.includes(schemaType)
        ? prev.filter(({action}) => ['publish', 'discardChanges', 'restore'].includes(action))
        : prev,
  },
})
