import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'videoguide',
  title: 'Videoguide',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'beskrivelse', title: 'Beskrivelse', type: 'text', rows: 3}),
    defineField({name: 'videoUrl', title: 'Lenke til YouTube-video', type: 'url', validation: (r) => r.required()}),
    defineField({name: 'rekkefolge', title: 'Plassering i listen (valgfritt)', type: 'number', description: 'Lavt tall vises først. La stå tom for å legge den sist.'}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'tittel', subtitle: 'videoUrl'}},
})
