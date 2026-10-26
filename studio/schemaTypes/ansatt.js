import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ansatt',
  title: 'Ansatt',
  type: 'document',
  fields: [
    defineField({name: 'navn', title: 'Navn', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'rolle', title: 'Rolle', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'bilde', title: 'Portrettbilde', type: 'image', options: {hotspot: true}}),
    defineField({name: 'rekkefolge', title: 'Plassering i listen (valgfritt)', type: 'number', description: 'Lavt tall vises først. La stå tom for å legge den sist.'}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'navn', subtitle: 'rolle', media: 'bilde'}},
})
