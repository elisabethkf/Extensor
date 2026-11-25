import {defineType, defineField} from 'sanity'

// Opprettes av nettsiden (kontaktskjemaene) via serveren, aldri av redaktører.
export default defineType({
  name: 'henvendelse',
  title: 'Henvendelse',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ny', value: 'ny'},
          {title: 'Under behandling', value: 'underBehandling'},
          {title: 'Besvart', value: 'besvart'},
        ],
        layout: 'radio',
      },
      initialValue: 'ny',
    }),
    defineField({name: 'mottatt', title: 'Mottatt', type: 'datetime', readOnly: true}),
    defineField({name: 'navn', title: 'Navn', type: 'string', readOnly: true}),
    defineField({name: 'virksomhet', title: 'Virksomhet', type: 'string', readOnly: true}),
    defineField({name: 'epost', title: 'E-post', type: 'string', readOnly: true}),
    defineField({name: 'faggruppe', title: 'Faggruppe', type: 'string', readOnly: true}),
    defineField({name: 'melding', title: 'Melding', type: 'text', rows: 6, readOnly: true}),
    defineField({name: 'type', title: 'Type skjema', type: 'string', readOnly: true}),
    defineField({name: 'side', title: 'Sendt fra siden', type: 'string', readOnly: true}),
  ],
  orderings: [{title: 'Nyeste først', name: 'mottattDesc', by: [{field: 'mottatt', direction: 'desc'}]}],
  preview: {
    select: {title: 'navn', virksomhet: 'virksomhet', status: 'status', mottatt: 'mottatt'},
    prepare: ({title, virksomhet, status, mottatt}) => ({
      title: `${status === 'ny' ? '● ' : ''}${title || 'Uten navn'}${virksomhet ? ' – ' + virksomhet : ''}`,
      subtitle: mottatt ? new Date(mottatt).toLocaleString('nb-NO', {dateStyle: 'medium', timeStyle: 'short'}) : '',
    }),
  },
})
