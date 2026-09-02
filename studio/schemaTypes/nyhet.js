import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'nyhet',
  title: 'Nyhet',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'dato', title: 'Dato', type: 'date', validation: (r) => r.required()}),
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
    defineField({name: 'bilde', title: 'Bilde', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'bildeUrl',
      title: 'Bilde-URL (alternativ til opplastet bilde)',
      type: 'url',
      description: 'Brukes hvis ikke bilde er lastet opp — f.eks. eksisterende CDN-lenke.',
    }),
    defineField({
      name: 'lenke',
      title: 'Lenke til artikkelside',
      type: 'string',
      description: 'F.eks. ny-kunde-i-extensor.html — til artikkelsidene er CMS-drevet.',
    }),
    defineField({name: 'brodtekst', title: 'Brødtekst', type: 'array', of: [{type: 'block'}, {type: 'image'}]}),
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
