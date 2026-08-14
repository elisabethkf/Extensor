import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {extensorTheme} from './theme'

// «Sider»-gruppen: ett dokument per underside, i samme rekkefølge som menyen
const sider = [
  {tittel: 'Forsiden', type: 'sideForside', id: 'side-forside'},
  {tittel: 'Support', type: 'sideSupport', id: 'side-support'},
  {tittel: 'Om oss', type: 'side', id: 'side-om-oss'},
  {tittel: 'Faggrupper', type: 'side', id: 'side-faggrupper'},
  {tittel: 'Leger', type: 'side', id: 'side-leger'},
  {tittel: 'Extensor KI', type: 'side', id: 'side-extensor-ki'},
  {tittel: 'Tilleggsprodukter', type: 'side', id: 'side-tilleggsprodukter'},
  {tittel: 'Webinar', type: 'side', id: 'side-webinar'},
  {tittel: 'Nyheter', type: 'side', id: 'side-nyheter'},
  {tittel: 'Karriere', type: 'side', id: 'side-karriere'},
  {tittel: 'Kontakt', type: 'side', id: 'side-kontakt'},
  {tittel: 'Kurs', type: 'side', id: 'side-kurs'},
  {tittel: 'Videoguider', type: 'side', id: 'side-videoguider'},
  {tittel: 'Brukermanualer', type: 'side', id: 'side-brukermanualer'},
  {tittel: 'FAQ', type: 'side', id: 'side-faq'},
  {tittel: 'Nedlastninger', type: 'side', id: 'side-nedlastninger'},
]

export default defineConfig({
  name: 'default',
  title: 'Extensor',
  projectId: '79jm8nbd',
  dataset: 'production',
  theme: extensorTheme,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Innhold')
          .items([
            S.listItem()
              .title('Sider')
              .id('sider')
              .child(
                S.list()
                  .title('Sider')
                  .items(
                    sider.map((s) =>
                      S.listItem()
                        .title(s.tittel)
                        .id(s.id)
                        .child(S.document().schemaType(s.type).documentId(s.id))
                    )
                  )
              ),
            S.divider(),
            S.listItem()
              .title('CMS')
              .id('cms')
              .child(
                S.list()
                  .title('CMS')
                  .items(
                    S.documentTypeListItems().filter(
                      (li) => !['side', 'sideForside', 'sideSupport'].includes(li.getId())
                    )
                  )
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
