import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'driftsmelding',
  title: 'Driftsmelding',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'dato', title: 'Dato', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10), validation: (r) => r.required()}),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {list: [
        {title: 'Info', value: 'info'},
        {title: 'Viktig', value: 'viktig'},
        {title: 'Kritisk (rød bar)', value: 'kritisk'},
      ], layout: 'radio'},
      initialValue: 'info',
    }),
    defineField({name: 'tekst', title: 'Tekst', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({
      name: 'visPaForsiden',
      title: 'Vis i den gule baren øverst på forsiden',
      description: 'Kun den nyeste meldingen med dette valget på vises i baren. Slå av når driftsforstyrrelsen er over.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [{title: 'Nyeste først', name: 'datoDesc', by: [{field: 'dato', direction: 'desc'}]}],
  preview: {select: {title: 'tittel', subtitle: 'dato', vis: 'visPaForsiden'}, prepare: ({title, subtitle, vis}) => ({title, subtitle: `${subtitle || ''}${vis ? '  ·  Vises på forsiden nå' : ''}`})},
})
