import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ-spørsmål',
  type: 'document',
  fields: [
    defineField({name: 'sporsmal', title: 'Spørsmål', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {list: ['Installasjon og oppdatering', 'Diverse', 'Helfo']},
      validation: (r) => r.required(),
    }),
    defineField({name: 'svar', title: 'Svar', type: 'text', rows: 8, validation: (r) => r.required()}),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'sporsmal', subtitle: 'kategori'}},
})
