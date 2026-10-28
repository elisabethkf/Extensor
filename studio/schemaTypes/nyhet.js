import {defineType, defineField} from 'sanity'
import {kategoriFelt} from './kategoriFelt'

export default defineType({
  name: 'nyhet',
  title: 'Artikkel',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'dato', title: 'Dato', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10), validation: (r) => r.required()}),
    kategoriFelt({name: 'kategori', title: 'Kategori', dokumentType: 'nyhet', visningsnavn: {kunder: 'Kunder', besok: 'Besøk', produkt: 'Produkt', karriere: 'Karriere', integrasjon: 'Integrasjon'}}),
    defineField({name: 'ingress', title: 'Ingress', type: 'text', rows: 3}),
    defineField({name: 'bilde', title: 'Hovedbilde', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'bildeUrl',
      title: 'Bilde-URL (alternativ til opplastet bilde)',
      type: 'url',
      hidden: true,
      description: 'Brukes hvis ikke bilde er lastet opp — f.eks. eksisterende CDN-lenke.',
    }),
    defineField({
      name: 'lenke',
      title: 'Lenke til artikkelside',
      type: 'string',
      hidden: true,
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
            {title: 'Overskrift', value: 'h2'},
            {title: 'Mellomtittel', value: 'h3'},
            {title: 'Liten overskrift', value: 'h4'},
            {title: 'Sitat', value: 'blockquote'},
          ],
          lists: [
            {title: 'Punktliste', value: 'bullet'},
            {title: 'Nummerert liste', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Fet', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
              {title: 'Understreket', value: 'underline'},
              {title: 'Gjennomstreket', value: 'strike-through'},
              {title: 'Kode', value: 'code'},
            ],
            annotations: [
              {
                name: 'lenke',
                type: 'object',
                title: 'Lenke',
                fields: [
                  {
                    name: 'href',
                    type: 'string',
                    title: 'Adresse',
                    description: 'https://… for andre nettsteder, /side for sider hos oss, mailto:… for e-post, tel:… for telefon.',
                    validation: (r) => r.required(),
                  },
                  {name: 'nyFane', type: 'boolean', title: 'Åpne i ny fane', initialValue: false},
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', type: 'string', title: 'Alternativ tekst', description: 'Beskriver bildet for de som ikke ser det (skjermlesere, søkemotorer).'},
            {name: 'bildetekst', type: 'string', title: 'Bildetekst', description: 'Vises under bildet.'},
          ],
        },
        {type: 'code', title: 'Kodeblokk'},
        {
          name: 'video',
          type: 'object',
          title: 'Video (YouTube/Vimeo)',
          fields: [
            {name: 'url', type: 'url', title: 'Lenke til videoen', validation: (r) => r.required()},
            {name: 'bildetekst', type: 'string', title: 'Bildetekst'},
          ],
          preview: {select: {title: 'url', subtitle: 'bildetekst'}},
        },
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
