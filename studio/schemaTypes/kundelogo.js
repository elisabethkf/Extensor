import {defineType, defineField} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'

export default defineType({
  name: 'kundelogo',
  title: 'Kundelogo',
  type: 'document',
  fields: [
    orderRankField({type: 'kundelogo'}),
    defineField({name: 'navn', title: 'Kundenavn', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'logo',
      title: 'Logo (transparent bakgrunn)',
      type: 'image',
      description: 'SVG eller PNG med transparent bakgrunn. Uten logo vises navnet som tekst.',
    }),
  ],
  preview: {select: {title: 'navn', media: 'logo'}},
})
