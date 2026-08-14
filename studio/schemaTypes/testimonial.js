import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Kundesitat',
  type: 'document',
  fields: [
    defineField({name: 'navn', title: 'Navn', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'rolle', title: 'Rolle/virksomhet', type: 'string'}),
    defineField({name: 'faggruppe', title: 'Faggruppe', type: 'string'}),
    defineField({name: 'sitat', title: 'Sitat', type: 'text', rows: 5, validation: (r) => r.required()}),
    defineField({name: 'bilde', title: 'Bilde/logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'bildeUrl', title: 'Bilde-URL (alternativ)', type: 'url'}),
    defineField({name: 'avatarFarge', title: 'Avatarfarge (hvis ikke bilde)', type: 'string', description: 'Hex, f.eks. #d4c8b8'}),
  ],
  preview: {select: {title: 'navn', subtitle: 'rolle', media: 'bilde'}},
})
