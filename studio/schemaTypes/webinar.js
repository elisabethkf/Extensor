import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'webinar',
  title: 'Webinar',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'dato', title: 'Dato', type: 'date'}),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {list: [
        {title: 'Opptak', value: 'opptak'},
        {title: 'Kommende', value: 'kommende'},
      ], layout: 'radio'},
      initialValue: 'opptak',
    }),
    defineField({name: 'beskrivelse', title: 'Beskrivelse', type: 'text', rows: 4}),
    defineField({name: 'videoUrl', title: 'Video-URL (YouTube)', type: 'url'}),
    defineField({name: 'bilde', title: 'Bilde', type: 'image', options: {hotspot: true}}),
    defineField({name: 'bildeUrl', title: 'Bilde-URL (alternativ)', type: 'url'}),
    defineField({name: 'lenke', title: 'Lenke til webinar-side', type: 'string', description: 'F.eks. webinar-extensor-ki.html'}),
    defineField({name: 'fremhevet', title: 'Vis som «Siste webinar»', type: 'boolean', initialValue: false}),
  ],
  orderings: [{title: 'Nyeste først', name: 'datoDesc', by: [{field: 'dato', direction: 'desc'}]}],
  preview: {select: {title: 'tittel', subtitle: 'dato', media: 'bilde'}},
})
