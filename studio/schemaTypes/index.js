import driftsmelding from './driftsmelding'
import nyhet from './nyhet'
import webinar from './webinar'
import kurs from './kurs'
import videoguide from './videoguide'
import brukermanual from './brukermanual'
import faqItem from './faqItem'
import nedlastning from './nedlastning'
import testimonial from './testimonial'
import kundelogo from './kundelogo'
import ansatt from './ansatt'
import partner from './partner'
import addonProdukt from './addonProdukt'
import side from './side'
import sideForside from './sideForside'
import sideSupport from './sideSupport'

export const schemaTypes = [
  // Forsiden-innhold
  nyhet,
  testimonial,
  kundelogo,
  // Om oss-innhold
  ansatt,
  partner,
  // Produkt-innhold
  addonProdukt,
  // Support / opplæring-innhold (samme rekkefølge som ressurskortene på Support-siden)
  webinar,
  kurs,
  videoguide,
  brukermanual,
  faqItem,
  nedlastning,
  // Driftsmelding har egen linje i strukturen (se sanity.config.js)
  driftsmelding,
  // Sider
  side,
  sideForside,
  sideSupport,
]
