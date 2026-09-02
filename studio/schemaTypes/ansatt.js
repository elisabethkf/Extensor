import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ansatt',
  title: 'Ansatt',
  type: 'document',
  fields: [
    defineField({name: 'navn', title: 'Navn', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'rolle', title: 'Rolle', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'bilde', title: 'Bilde', type: 'image', options: {hotspot: true}}),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'navn', subtitle: 'rolle', media: 'bilde'}},
})
