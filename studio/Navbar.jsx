import {useEffect} from 'react'
import {usePerspective, useSetPerspective} from 'sanity'

// Redaktørene skal alltid jobbe i utkast. Velgeren for «Published»/utgivelser skjules,
// og har noen havnet i «Published» (som er skrivebeskyttet) settes de tilbake til utkast.
export function Navbar(props) {
  const {selectedPerspectiveName} = usePerspective()
  const setPerspective = useSetPerspective()
  useEffect(() => {
    if (selectedPerspectiveName) setPerspective('drafts')
  }, [selectedPerspectiveName, setPerspective])
  return (
    <>
      <style>{'[data-ui="ReleasesNav"] { display: none !important; }'}</style>
      {props.renderDefault(props)}
    </>
  )
}
