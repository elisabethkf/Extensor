import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'videoguide',
  title: 'Videoguide',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'beskrivelse', title: 'Beskrivelse', type: 'text', rows: 3}),
    defineField({name: 'videoUrl', title: 'Video-URL (YouTube)', type: 'url', validation: (r) => r.required()}),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'tittel', subtitle: 'videoUrl'}},
})
