import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'addonProdukt',
  title: 'Tilleggsprodukt',
  type: 'document',
  fields: [
    defineField({name: 'tag', title: 'Tag/kategori', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'beskrivelse', title: 'Beskrivelse', type: 'text', rows: 3, validation: (r) => r.required()}),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'tittel', subtitle: 'tag'}},
})
