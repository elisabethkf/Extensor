import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'kundelogo',
  title: 'Kundelogo',
  type: 'document',
  fields: [
    defineField({name: 'navn', title: 'Kundenavn', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'logo',
      title: 'Logo (transparent bakgrunn)',
      type: 'image',
      description: 'SVG eller PNG med transparent bakgrunn. Uten logo vises navnet som tekst.',
    }),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Rekkefølge', name: 'rekkefolge', by: [{field: 'rekkefolge', direction: 'asc'}]}],
  preview: {select: {title: 'navn', media: 'logo'}},
})
