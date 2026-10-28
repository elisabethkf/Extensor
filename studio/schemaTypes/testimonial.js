import {defineType, defineField} from 'sanity'
import {faggruppeValg} from './faggrupper'

export default defineType({
  name: 'testimonial',
  title: 'Referanse',
  type: 'document',
  fields: [
    defineField({name: 'navn', title: 'Navn', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'rolle', title: 'Rolle/virksomhet', type: 'string'}),
    defineField({
      name: 'faggruppe',
      title: 'Faggruppe',
      type: 'string',
      description: 'Referansen vises på forsiden og på siden til denne faggruppen.',
      options: {list: faggruppeValg.map((f) => ({title: f, value: f}))},
    }),
    defineField({name: 'sitat', title: 'Sitat', type: 'text', rows: 5, validation: (r) => r.required()}),
    defineField({name: 'bilde', title: 'Bilde/logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'avatarFarge', title: 'Farge (hvis uten bilde)', type: 'string', description: 'F.eks. #d4c8b8'}),
    defineField({name: 'bildeUrl', title: 'Bilde-URL (alternativ)', type: 'url', hidden: true}),
  ],
  preview: {select: {title: 'navn', subtitle: 'faggruppe', media: 'bilde'}},
})
