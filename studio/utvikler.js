// Tekniske felt og avanserte innholdstyper vises kun for oss i M51.
// Redaktørene hos Extensor ser en forenklet utgave av studioet.
export const erUtvikler = (bruker) => Boolean(bruker?.email?.toLowerCase().endsWith('@m51.no'))

// For bruk i `hidden` på felt: skjul for alle andre enn utviklere
export const kunUtvikler = ({currentUser}) => !erUtvikler(currentUser)

// Sider som finnes ett sted og ikke skal opprettes, dupliseres eller slettes
export const sideTyper = ['side', 'sideForside', 'sideSupport']

// Innholdstyper kun utviklere skal se i menyen
export const avanserteTyper = ['kundelogo', 'testimonial', 'partner', 'addonProdukt']
