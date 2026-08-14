import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'side',
  title: 'Side',
  type: 'document',
  fields: [
    defineField({name: 'navn', title: 'Sidenavn', type: 'string', readOnly: true}),
    defineField({name: 'heroEyebrow', title: 'Liten tekst over overskriften', type: 'string'}),
    defineField({name: 'heroTittel', title: 'Overskrift', type: 'text', rows: 2, description: 'Linjeskift gir linjeskift på siden. *ord* gir uthevet ord.'}),
    defineField({name: 'heroLead', title: 'Ingress', type: 'text', rows: 4}),
    defineField({
      name: 'seksjoner', title: 'Seksjoner på siden',
      description: 'Rekkefølgen tilsvarer rekkefølgen på siden. Ikke legg til eller fjern seksjoner — rediger tekstene.',
      type: 'array',
      of: [{type: 'object', name: 'seksjon', fields: [
        {name: 'etikett', title: 'Seksjon (til orientering)', type: 'string', readOnly: true},
        {name: 'tittel', title: 'Overskrift', type: 'text', rows: 2},
        {name: 'intro', title: 'Introtekst', type: 'text', rows: 3},
      ], preview: {select: {title: 'etikett', subtitle: 'tittel'}}}],
    }),
    defineField({name: 'ctaTittel', title: 'Kontakt-seksjon: overskrift', type: 'string'}),
    defineField({name: 'ctaLead', title: 'Kontakt-seksjon: ingress', type: 'text', rows: 3}),
  ],
  preview: {select: {title: 'navn'}},
})
