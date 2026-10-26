import {defineType, defineField} from 'sanity'
import {kategoriFelt} from './kategoriFelt'

export default defineType({
  name: 'brukermanual',
  title: 'Brukermanual',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    kategoriFelt({name: 'gruppe', title: 'Tema', dokumentType: 'brukermanual'}),
    defineField({name: 'fil', title: 'PDF-fil (last opp)', type: 'file', options: {accept: '.pdf'}}),
    defineField({name: 'url', title: 'Ekstern URL (alternativ til opplastet fil)', type: 'url', hidden: true}),
    defineField({name: 'rekkefolge', title: 'Plassering i listen (valgfritt)', type: 'number', description: 'Lavt tall vises først. La stå tom for å legge den sist.'}),
  ],
  preview: {select: {title: 'tittel', subtitle: 'gruppe'}},
})
