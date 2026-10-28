import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Samarbeidspartner',
  type: 'document',
  fields: [
    defineField({name: 'navn', title: 'Navn', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'beskrivelse', title: 'Beskrivelse', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({name: 'lenke', title: 'Lenke', type: 'url'}),
    defineField({
      name: 'logo',
      title: 'Logo (transparent bakgrunn)',
      type: 'image',
      description: 'Kun nødvendig hvis partneren skal vises i logostripen på forsiden.',
    }),
    defineField({
      name: 'visIStripe',
      title: 'Vis i logostripen på forsiden',
      description: '«Teknologipartnere & integrasjoner»-stripen øverst på forsiden. Krever logo.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'navn', subtitle: 'beskrivelse', media: 'logo'}},
})
