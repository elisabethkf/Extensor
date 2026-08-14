import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'kurs',
  title: 'Kurs',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'tidspunkt', title: 'Tidspunkt', type: 'string', description: 'F.eks. «16. april kl. 09.00»'}),
    defineField({name: 'varighet', title: 'Varighet', type: 'string', description: 'F.eks. «60 min»'}),
    defineField({name: 'beskrivelse', title: 'Beskrivelse', type: 'text', rows: 4}),
    defineField({name: 'malgruppe', title: 'Målgruppe', type: 'string'}),
    defineField({name: 'aktiv', title: 'Vis på kurssiden', type: 'boolean', initialValue: true}),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'tittel', subtitle: 'tidspunkt'}},
})
