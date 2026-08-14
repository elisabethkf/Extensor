import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'nedlastning',
  title: 'Nedlastning',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'seksjon',
      title: 'Seksjon',
      type: 'string',
      options: {list: [
        {title: 'Oppdateringer', value: 'oppdateringer'},
        {title: 'Versjonsnytt', value: 'versjonsnytt'},
        {title: 'Programtillegg', value: 'programtillegg'},
        {title: 'Filer', value: 'filer'},
      ]},
      validation: (r) => r.required(),
    }),
    defineField({name: 'dato', title: 'Datotekst', type: 'string', description: 'F.eks. «07.02.25» eller «Desember 2022»'}),
    defineField({name: 'fil', title: 'Fil (last opp)', type: 'file'}),
    defineField({name: 'url', title: 'Ekstern URL (alternativ til opplastet fil)', type: 'url'}),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'tittel', subtitle: 'seksjon'}},
})
