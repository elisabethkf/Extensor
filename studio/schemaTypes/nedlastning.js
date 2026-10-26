import {defineType, defineField} from 'sanity'
import {kategoriFelt} from './kategoriFelt'

export default defineType({
  name: 'nedlastning',
  title: 'Nedlastning',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    kategoriFelt({name: 'seksjon', title: 'Seksjon', dokumentType: 'nedlastning', visningsnavn: {oppdateringer: 'Oppdateringer', versjonsnytt: 'Versjonsnytt', programtillegg: 'Programtillegg', filer: 'Filer'}}),
    defineField({name: 'dato', title: 'Datotekst', type: 'string', description: 'F.eks. «07.02.25» eller «Desember 2022»'}),
    defineField({name: 'fil', title: 'Fil (last opp)', type: 'file'}),
    defineField({name: 'url', title: 'Ekstern URL (alternativ til opplastet fil)', type: 'url', hidden: true}),
    defineField({name: 'rekkefolge', title: 'Plassering i listen (valgfritt)', type: 'number', description: 'Lavt tall vises først. La stå tom for å legge den sist.'}),
  ],
  preview: {select: {title: 'tittel', subtitle: 'seksjon'}},
})
