import {defineType, defineField} from 'sanity'

const fs = (name, title) => ({name, title, options: {collapsible: true, collapsed: true}})

export default defineType({
  name: 'sideSupport',
  title: 'Side: Support',
  type: 'document',
  fieldsets: [
    fs('hero', 'Toppseksjon (hero)'),
    fs('kontakt', 'Kontakt support'),
    fs('quicksupport', 'QuickSupport'),
    fs('opplaering', 'Opplæring'),
    fs('nedlastninger', 'Nedlastninger'),
    fs('drift', 'Driftsmeldinger'),
  ],
  fields: [
    defineField({name: 'heroTittel', title: 'Overskrift', type: 'string', fieldset: 'hero'}),
    defineField({name: 'heroLead', title: 'Ingress', type: 'text', rows: 4, fieldset: 'hero'}),
    defineField({name: 'heroBilde', title: 'Hero-bilde (høyre side)', type: 'image', options: {hotspot: true}, fieldset: 'hero'}),
    defineField({name: 'snarveiLabel', title: 'Tekst over snarveiknappene', type: 'string', fieldset: 'hero'}),

    defineField({name: 'kontaktTittel', title: 'Overskrift', type: 'string', fieldset: 'kontakt'}),
    defineField({name: 'kontaktIntro', title: 'Introtekst', type: 'text', rows: 3, fieldset: 'kontakt'}),

    defineField({name: 'quicksupportTittel', title: 'Overskrift', type: 'string', fieldset: 'quicksupport'}),
    defineField({name: 'quicksupportIntro', title: 'Introtekst', type: 'text', rows: 3, fieldset: 'quicksupport'}),

    defineField({name: 'opplaeringTittel', title: 'Overskrift', type: 'string', fieldset: 'opplaering'}),
    defineField({name: 'opplaeringIntro', title: 'Introtekst', type: 'text', rows: 3, fieldset: 'opplaering'}),

    defineField({name: 'nedlastningerTittel', title: 'Overskrift', type: 'string', fieldset: 'nedlastninger'}),
    defineField({name: 'nedlastningerIntro', title: 'Introtekst', type: 'text', rows: 3, fieldset: 'nedlastninger'}),

    defineField({name: 'driftTittel', title: 'Overskrift', type: 'string', fieldset: 'drift'}),
    defineField({name: 'driftIntro', title: 'Introtekst', type: 'text', rows: 3, fieldset: 'drift'}),
  ],
  preview: {prepare: () => ({title: 'Support-siden'})},
})
