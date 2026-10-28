import driftsmelding from './driftsmelding'
import nyhet from './nyhet'
import webinar from './webinar'
import kurs from './kurs'
import videoguide from './videoguide'
import brukermanual from './brukermanual'
import faqItem from './faqItem'
import nedlastning from './nedlastning'
import ansatt from './ansatt'
import testimonial from './testimonial'
import kundelogo from './kundelogo'
import side from './side'
import sideForside from './sideForside'
import sideSupport from './sideSupport'
import partner from './partner'
import addonProdukt from './addonProdukt'

export const schemaTypes = [
  nyhet,
  testimonial,
  kundelogo,
  ansatt,
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
  // Ligger i datasettet og brukes av nettsiden, men er ikke i menyen (må ha skjema for at studioet ikke skal feile)
  partner,
  addonProdukt,
]
