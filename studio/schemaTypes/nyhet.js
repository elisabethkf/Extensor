import {defineType, defineField} from 'sanity'
import {kunUtvikler} from '../utvikler'

export default defineType({
  name: 'nyhet',
  title: 'Artikkel',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'dato', title: 'Dato', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10), validation: (r) => r.required()}),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {list: [
        {title: 'Kunder', value: 'kunder'},
        {title: 'Besøk', value: 'besok'},
        {title: 'Produkt', value: 'produkt'},
        {title: 'Karriere', value: 'karriere'},
        {title: 'Integrasjon', value: 'integrasjon'},
      ]},
      validation: (r) => r.required(),
    }),
    defineField({name: 'ingress', title: 'Ingress', type: 'text', rows: 3}),
    defineField({name: 'bilde', title: 'Hovedbilde', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'bildeUrl',
      title: 'Bilde-URL (alternativ til opplastet bilde)',
      type: 'url',
      hidden: kunUtvikler,
      description: 'Brukes hvis ikke bilde er lastet opp — f.eks. eksisterende CDN-lenke.',
    }),
    defineField({
      name: 'lenke',
      title: 'Lenke til artikkelside',
      type: 'string',
      hidden: kunUtvikler,
      description: 'F.eks. ny-kunde-i-extensor.html — til artikkelsidene er CMS-drevet.',
    }),
    defineField({
      name: 'brodtekst',
      title: 'Brødtekst',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Vanlig tekst', value: 'normal'},
            {title: 'Mellomtittel', value: 'h2'},
          ],
          lists: [{title: 'Punktliste', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Fet', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
            ],
            annotations: [
              {name: 'lenke', type: 'object', title: 'Lenke', fields: [{name: 'href', type: 'url', title: 'Adresse'}]},
            ],
          },
        },
        {type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'erAktivStilling',
      title: 'Aktiv stillingsutlysning',
      description: 'Vis denne øverst på Karriere-siden som en utlyst stilling. Kun relevant for kategorien Karriere.',
      type: 'boolean',
      initialValue: false,
      hidden: ({document}) => document?.kategori !== 'karriere',
    }),
    defineField({
      name: 'soknadsfrist',
      title: 'Søknadsfrist',
      type: 'date',
      hidden: ({document}) => document?.kategori !== 'karriere' || !document?.erAktivStilling,
    }),
  ],
  orderings: [{title: 'Nyeste først', name: 'datoDesc', by: [{field: 'dato', direction: 'desc'}]}],
  preview: {select: {title: 'tittel', subtitle: 'dato', media: 'bilde'}},
})
