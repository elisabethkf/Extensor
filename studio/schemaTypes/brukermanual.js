import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'brukermanual',
  title: 'Brukermanual',
  type: 'document',
  fields: [
    defineField({name: 'tittel', title: 'Tittel', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'gruppe',
      title: 'Gruppe',
      type: 'string',
      options: {list: [
        'Enkelttema',
        'Hovedmanualer',
        'HELSE: Helse-virksomheter, tverrfaglige klinikker',
        'REHAB: Rehabiliteringssentre',
        'BHT: Bedriftshelsetjenester',
        'FRISKLIV: Frisklivssentraler',
        'TRENING: Treningssentre',
      ]},
      validation: (r) => r.required(),
    }),
    defineField({name: 'fil', title: 'PDF-fil (last opp)', type: 'file', options: {accept: '.pdf'}}),
    defineField({name: 'url', title: 'Ekstern URL (alternativ til opplastet fil)', type: 'url'}),
    defineField({name: 'rekkefolge', title: 'Rekkefølge', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'tittel', subtitle: 'gruppe'}},
})
