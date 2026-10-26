import {defineType, defineField} from 'sanity'
import {kategoriFelt} from './kategoriFelt'

export default defineType({
  name: 'faqItem',
  title: 'FAQ-spørsmål',
  type: 'document',
  fields: [
    defineField({name: 'sporsmal', title: 'Spørsmål', type: 'string', validation: (r) => r.required()}),
    kategoriFelt({name: 'kategori', title: 'Kategori', dokumentType: 'faqItem'}),
    defineField({name: 'svar', title: 'Svar', type: 'text', rows: 8, validation: (r) => r.required()}),
    defineField({name: 'rekkefolge', title: 'Plassering i listen (valgfritt)', type: 'number', description: 'Lavt tall vises først. La stå tom for å legge den sist.'}),
  ],
  preview: {select: {title: 'sporsmal', subtitle: 'kategori'}},
})
