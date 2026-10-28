import {defineType, defineField} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'

export default defineType({
  name: 'ansatt',
  title: 'Ansatt',
  type: 'document',
  fields: [
    orderRankField({type: 'ansatt'}),
    defineField({name: 'navn', title: 'Navn', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'rolle', title: 'Rolle', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'bilde', title: 'Portrettbilde', type: 'image', options: {hotspot: true}}),
  ],
  preview: {select: {title: 'navn', subtitle: 'rolle', media: 'bilde'}},
})
