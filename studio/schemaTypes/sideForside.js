import {defineType, defineField} from 'sanity'

const fs = (name, title) => ({name, title, options: {collapsible: true, collapsed: true}})

export default defineType({
  name: 'sideForside',
  title: 'Side: Forsiden',
  type: 'document',
  fieldsets: [
    fs('hero', 'Toppseksjon (hero)'),
    fs('logostripe', 'Kundelogo-stripe'),
    fs('produktet', 'Produktet'),
    fs('faggrupper', 'Faggrupper'),
    fs('ki', 'Extensor KI'),
    fs('kunder', 'Hva kundene sier'),
    fs('cta', 'Ta kontakt (bunn)'),
  ],
  fields: [
    defineField({name: 'heroPill', title: 'Liten tekst over overskriften', type: 'string', fieldset: 'hero'}),
    defineField({name: 'heroTittel', title: 'Overskrift', type: 'text', rows: 2, description: 'Linjeskift her gir linjeskift på siden.', fieldset: 'hero'}),
    defineField({name: 'heroLead', title: 'Ingress', type: 'text', rows: 3, fieldset: 'hero'}),
    defineField({name: 'heroBilde', title: 'Hero-bilde (høyre side)', type: 'image', options: {hotspot: true}, fieldset: 'hero'}),
    defineField({
      name: 'heroKpier', title: 'Nøkkeltall under ingressen', fieldset: 'hero',
      type: 'array',
      of: [{type: 'object', name: 'kpi', fields: [
        {name: 'verdi', title: 'Verdi (f.eks. «Siden 2004»)', type: 'string'},
        {name: 'etikett', title: 'Etikett', type: 'string'},
      ], preview: {select: {title: 'verdi', subtitle: 'etikett'}}}],
      validation: (r) => r.max(4),
    }),
    defineField({name: 'ctaPrimar', title: 'Primærknapp', type: 'string', fieldset: 'hero'}),
    defineField({name: 'ctaSekundar', title: 'Sekundærknapp', type: 'string', fieldset: 'hero'}),

    defineField({name: 'logoStripeLabel', title: 'Tekst over logostripen', type: 'string', fieldset: 'logostripe'}),

    defineField({name: 'produktetTittel', title: 'Overskrift', type: 'text', rows: 2, fieldset: 'produktet'}),
    defineField({
      name: 'produktetPunkter', title: 'Produktpunkter', fieldset: 'produktet',
      type: 'array',
      of: [{type: 'object', name: 'punkt', fields: [
        {name: 'tittel', title: 'Tittel', type: 'string'},
        {name: 'tekst', title: 'Tekst', type: 'text', rows: 2},
      ], preview: {select: {title: 'tittel'}}}],
    }),
    defineField({name: 'produktetBilde', title: 'Bilde (høyre side)', type: 'image', options: {hotspot: true}, fieldset: 'produktet'}),

    defineField({name: 'faggrupperTittel', title: 'Overskrift', type: 'string', fieldset: 'faggrupper'}),
    defineField({name: 'faggrupperIntro', title: 'Introtekst', type: 'text', rows: 3, fieldset: 'faggrupper'}),

    defineField({name: 'kiPill', title: 'Liten tekst over overskriften', type: 'string', fieldset: 'ki'}),
    defineField({name: 'kiTittel', title: 'Overskrift', type: 'text', rows: 2, fieldset: 'ki'}),
    defineField({name: 'kiLead', title: 'Ingress', type: 'text', rows: 3, fieldset: 'ki'}),
    defineField({name: 'kiPunkter', title: 'Sjekkliste-punkter', type: 'array', of: [{type: 'string'}], fieldset: 'ki'}),
    defineField({name: 'kiKnapp', title: 'Knappetekst', type: 'string', fieldset: 'ki'}),

    defineField({name: 'kunderTittel', title: 'Overskrift', type: 'text', rows: 2, fieldset: 'kunder'}),
    defineField({name: 'kunderIntro', title: 'Introtekst', type: 'text', rows: 3, fieldset: 'kunder'}),

    defineField({name: 'ctaTittel', title: 'Overskrift', type: 'string', fieldset: 'cta'}),
    defineField({name: 'ctaLead', title: 'Ingress', type: 'text', rows: 3, fieldset: 'cta'}),
  ],
  preview: {prepare: () => ({title: 'Forsiden'})},
})
